let keyCounter = 0
const key = () => `k${++keyCounter}`

const MARK_MAP = {
  bold: 'strong',
  italic: 'em',
  underline: 'underline',
  strike: 'strike-through',
  code: 'code',
}

function convertMarks(marks, block) {
  const defs = []
  const m = (marks || []).map(mk => {
    if (mk.type === 'link') {
      const defKey = key()
      defs.push({ _type: 'link', _key: defKey, href: mk.attrs?.href || '' })
      return { _key: defKey, _type: 'link' }
    }
    return MARK_MAP[mk.type] || null
  }).filter(Boolean)
  return { marks: m, markDefs: defs }
}

function textNode(text, marks, markDefs) {
  const n = { _type: 'span', _key: key(), text: text || '', marks: [] }
  if (marks?.length) n.marks = marks
  return n
}

function inlineImage(node) {
  return {
    _type: 'image',
    _key: key(),
    asset: node.attrs?.asset ? { _ref: node.attrs.asset._ref, _type: 'reference' } : undefined,
    url: node.attrs?.src || '',
  }
}

function blockContent(node) {
  if (node.type === 'text') {
    const { marks, markDefs } = convertMarks(node.marks)
    return { nodes: [textNode(node.text, marks)], defs: markDefs }
  }
  if (node.type === 'image') {
    return { nodes: [inlineImage(node)], defs: [] }
  }
  if (node.type === 'hardBreak') {
    return { nodes: [textNode('\n')], defs: [] }
  }
  if (node.content) {
    const all = node.content.reduce((acc, child) => {
      const r = blockContent(child)
      return { nodes: [...acc.nodes, ...r.nodes], defs: [...acc.defs, ...r.defs] }
    }, { nodes: [], defs: [] })
    return all
  }
  return { nodes: [], defs: [] }
}

const HEADING_MAP = { 1: 'h1', 2: 'h2', 3: 'h3' }

export function pmToPt(json) {
  keyCounter = 0
  if (!json?.content) return []
  const blocks = []

  for (const node of json.content) {
    if (node.type === 'paragraph' || node.type === 'heading' || node.type === 'blockquote' || node.type === 'codeBlock') {
      const { nodes, defs } = blockContent(node)
      const block = {
        _type: 'block',
        _key: key(),
        style: node.type === 'heading' ? HEADING_MAP[node.attrs?.level] || 'normal'
              : node.type === 'blockquote' ? 'blockquote'
              : node.type === 'codeBlock' ? 'code' : 'normal',
        children: nodes,
        markDefs: defs,
      }
      if (node.type === 'codeBlock') {
        block.children = [textNode(node.content?.[0]?.text || '')]
      }
      blocks.push(block)
    } else if (node.type === 'bulletList' || node.type === 'orderedList') {
      for (const item of node.content || []) {
        const { nodes, defs } = blockContent(item)
        blocks.push({
          _type: 'block',
          _key: key(),
          style: 'normal',
          listItem: node.type === 'bulletList' ? 'bullet' : 'number',
          level: 1,
          children: nodes.length ? nodes : [textNode('')],
          markDefs: defs,
        })
      }
    } else if (node.type === 'image') {
      blocks.push(inlineImage(node))
    }
  }

  return blocks
}

export function ptToPm(blocks) {
  if (!blocks?.length) return { type: 'doc', content: [{ type: 'paragraph', content: [] }] }

  const content = []
  let i = 0
  while (i < blocks.length) {
    const block = blocks[i]
    if (block.listItem) {
      const listType = block.listItem === 'number' ? 'orderedList' : 'bulletList'
      const items = []
      while (i < blocks.length && blocks[i]?.listItem === block.listItem) {
        items.push(listItemContent(blocks[i]))
        i++
      }
      content.push({ type: listType, attrs: {}, content: items })
    } else if (block._type === 'image') {
      const attrs = block.asset?._ref ? { asset: { _ref: block.asset._ref } } : { src: block.url || '' }
      content.push({ type: 'image', attrs })
      i++
    } else {
      content.push(blockToPmNode(block))
      i++
    }
  }

  return { type: 'doc', content }
}

function blockToPmNode(block) {
  const nodeType = block.style === 'h1' ? 'heading'
    : block.style === 'h2' ? 'heading'
    : block.style === 'h3' ? 'heading'
    : block.style === 'code' ? 'codeBlock'
    : block.style === 'blockquote' ? 'blockquote'
    : 'paragraph'

  const attrs = nodeType === 'heading' ? { level: parseInt(block.style?.[1]) || 1 } : {}

  const content = (block.children || []).map(child => {
    if (child._type === 'span') {
      const marks = (child.marks || []).map(m => {
        if (m._type === 'link') {
          const def = (block.markDefs || []).find(d => d._key === m._key)
          return { type: 'link', attrs: { href: def?.href || '' } }
        }
        const rev = Object.entries(MARK_MAP).find(([, v]) => v === m)
        return rev ? { type: rev[0] } : null
      }).filter(Boolean)
      return { type: 'text', text: child.text || '', marks: marks.length ? marks : undefined }
    }
    if (child._type === 'image') {
      return { type: 'image', attrs: { src: child.url || '' } }
    }
    return { type: 'text', text: '' }
  })

  if (nodeType === 'codeBlock') {
    return { type: 'codeBlock', attrs: {}, content: [{ type: 'text', text: content.map(c => c.text).join('') }] }
  }

  return { type: nodeType, attrs, content }
}

function listItemContent(block) {
  const { nodes } = blockContent({
    type: 'paragraph',
    content: (block.children || []).map(c => {
      if (c._type === 'span') {
        const m = (c.marks || []).map(mk => {
          if (mk._type === 'link') {
            const def = (block.markDefs || []).find(d => d._key === mk._key)
            return { type: 'link', attrs: { href: def?.href || '' } }
          }
          const rev = Object.entries(MARK_MAP).find(([, v]) => v === mk)
          return rev ? { type: rev[0] } : null
        }).filter(Boolean)
        return { type: 'text', text: c.text || '', marks: m.length ? m : undefined }
      }
      return { type: 'text', text: '' }
    }),
  })
  return { type: 'listItem', content: [{ type: 'paragraph', content: nodes }] }
}
