import SectionTitle from '../components/SectionTitle';
import blogPosts from '../data/blog';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import BlogCard from '../components/BlogCard';
import './Blog.css';

export default function Blog() {
  return (
    <>
      <SEO title="Blog" description="News, insights, and technical articles from the Bessblock team on concrete products, construction best practices, and industry developments." />
      <div className="page">
      <PageHero
        title="Blog"
        description="News, insights, and technical articles from the Bessblock team."
        bgImage="/images/hero/concrete-texture-1.jpg"
      />

      <section className="section">
        <div className="container">
          {blogPosts.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--text-tertiary)' }}>No posts yet. Check back soon.</p>
          ) : (
            <div className="blog-grid">
              {blogPosts.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
    </>
  );
}
