import { useState, useEffect } from 'react';
import { sanityApi, urlFor } from '../lib/sanity';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import BlogCard from '../components/BlogCard';
import './Blog.css';

const QUERY = `*[_type == "post"] | order(publishedAt desc) {
  "slug": slug.current,
  title,
  "date": publishedAt,
  author->{name, "avatar": avatar.asset->url},
  category,
  excerpt,
  readTime,
  "image": mainImage,
  "imageAlt": mainImage.alt
}`;

function toStaticPost(p) {
  return {
    ...p,
    date: p.date ? new Date(p.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' }) : '',
    image: p.image ? urlFor(p.image).width(800).url() : '/images/production/IMG_1750.webp',
    imageAlt: p.imageAlt || p.title,
  };
}

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityApi.fetch(QUERY)
      .then(data => setPosts((data || []).map(toStaticPost)))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <SEO title="Blog" description="News, insights, and technical articles from the Bessblock team on concrete products, construction best practices, and industry developments." />
      <div className="page">
        <PageHero
          title="Blog"
          description="News, insights, and technical articles from the Bessblock team."
          bgImage="/images/hero/concrete-texture-1.webp"
        />
        <section className="section">
          <div className="container">
            {loading ? (
              <p style={{ textAlign: 'center', color: 'var(--text-tertiary)' }}>Loading posts…</p>
            ) : posts.length === 0 ? (
              <p style={{ textAlign: 'center', color: 'var(--text-tertiary)' }}>No posts yet. Check back soon.</p>
            ) : (
              <div className="blog-grid">
                {posts.map((post, i) => <BlogCard key={post.slug} post={post} index={i} />)}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
