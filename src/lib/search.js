import productCategories, { productPages, getProductPath } from '../data/products';

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

let cachedBlogPosts = null;

export async function initSearch() {
  if (cachedBlogPosts) return;
  try {
    const { sanityApi } = await import('./sanity');
    const posts = await sanityApi.fetch(`*[_type == "post"] { title, excerpt, "slug": slug.current }`);
    cachedBlogPosts = posts || [];
  } catch {
    cachedBlogPosts = [];
  }
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
      path: getProductPath(key),
      keywords: tokens,
      category: page.category,
    });
  }

  if (cachedBlogPosts) {
    for (const post of cachedBlogPosts) {
      results.push({
        type: 'blog',
        title: post.title,
        description: post.excerpt || '',
        path: `/insights/blog/${post.slug}`,
        keywords: `${post.title} ${post.excerpt || ''}`,
      });
    }
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
