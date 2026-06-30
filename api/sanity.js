import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID,
  dataset: 'production',
  token: process.env.VITE_SANITY_TOKEN,
  useCdn: false,
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { action } = req.body
  if (!action) return res.status(400).json({ error: 'action is required' })

  try {
    switch (action) {
      case 'query': {
        const { query, params } = req.body
        const result = await client.fetch(query, params || {})
        return res.json(result)
      }

      case 'create': {
        const { doc } = req.body
        const result = await client.create(doc)
        return res.json(result)
      }

      case 'patch': {
        const { id, set } = req.body
        const result = await client.patch(id).set(set).commit()
        return res.json(result)
      }

      case 'delete': {
        const { id } = req.body
        const result = await client.delete(id)
        return res.json({ success: true, ...result })
      }

      case 'upload': {
        const { fileType, fileName, base64 } = req.body
        const buffer = Buffer.from(base64, 'base64')
        const asset = await client.assets.upload(fileType, buffer, { filename: fileName })
        return res.json(asset)
      }

      default:
        return res.status(400).json({ error: `Unknown action: ${action}` })
    }
  } catch (e) {
    console.error('Sanity API error:', e)
    return res.status(500).json({ error: e.message || 'Unknown error' })
  }
}
