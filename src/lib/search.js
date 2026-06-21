import productCategories, { productPages } from '../data/products';
import blogPosts from '../data/blog';

function tokenize(text) {
  return text.toLowerCase().split(/\s+/).filter(Boolean);
}

function score(queryTokens, text) {
  const textTokens = tokenize(text);
  let score = 0;
  for (const qt of queryTokens) {
    for (const tt of textTokens) {
      if (tt === qt) score += 3;
      else if (tt.startsWith(qt)) score += 2;
      else if (tt.includes(qt)) score += 1;
    }
  }
  return score;
}

export function searchIndex() {
  const results = [];

  for (const cat of productCategories) {
    const tokens = `${cat.name} ${cat.description}`;
    results.push({
      type: 'category',
      title: cat.name,
      description: cat.description,
      path: cat.path,
      keywords: tokens,
    });
  }

  for (const [key, page] of Object.entries(productPages)) {
    const tokens = `${page.name} ${page.overview} ${(page.benefits || []).join(' ')} ${(page.applications || '')}`;
    results.push({
      type: 'product',
      title: page.name,
      description: page.overview.slice(0, 160),
      path: `/products/${page.category}/${key}`,
      keywords: tokens,
      category: page.category,
    });
  }

  for (const post of blogPosts) {
    const tokens = `${post.title} ${post.excerpt} ${post.sections.map(s => `${s.heading} ${s.body}`).join(' ')}`;
    results.push({
      type: 'blog',
      title: post.title,
      description: post.excerpt,
      path: `/insights/blog/${post.slug}`,
      keywords: tokens,
    });
  }

  return results;
}

export function performSearch(query, items = searchIndex()) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const queryTokens = tokenize(q);

  const scored = items
    .map(item => ({ ...item, score: score(queryTokens, item.keywords) }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12);

  return scored;
}
