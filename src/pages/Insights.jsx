import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, FileText, HelpCircle } from 'lucide-react';
import { sanityApi, urlFor } from '../lib/sanity';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedButton from '../components/AnimatedButton';
import './Insights.css';

const QUERY = `*[_type == "post"] | order(publishedAt desc) {
  "slug": slug.current,
  title,
  "date": publishedAt,
  author->{name},
  category,
  excerpt,
  readTime,
  "image": mainImage,
  "imageAlt": mainImage.alt
}`;

function fmtPost(p) {
  return {
    ...p,
    date: p.date ? new Date(p.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' }) : '',
    image: p.image ? urlFor(p.image).width(800).url() : '/images/production/IMG_1750.webp',
    imageAlt: p.imageAlt || p.title,
    readTime: p.readTime ? `${p.readTime} min read` : '5 min read',
  };
}

export default function Insights() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityApi.fetch(QUERY)
      .then(data => setPosts((data || []).map(fmtPost)))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const featured = posts[0];
  const rest = posts.slice(1);
  const categories = [...new Set(posts.map(p => p.category))];

  return (
    <>
      <SEO title="Insights" description="Technical articles, industry knowledge, and best practices from the Bessblock team on concrete products and construction." />
      <div className="page">
        <PageHero
          title="Insights"
          description="Technical articles, industry knowledge, and best practices from the Bessblock team."
          bgImage="/images/hero/concrete-texture-1.webp"
        />

        {loading && (
          <section className="section">
            <div className="container" style={{ textAlign: 'center', color: 'var(--text-tertiary)' }}>Loading…</div>
          </section>
        )}

        {!loading && featured && (
          <section className="section">
            <div className="container">
              <Link to={`/insights/blog/${featured.slug}`} className="insights-featured">
                <div className="insights-featured-image">
                  <img src={featured.image} alt={featured.imageAlt} loading="lazy" />
                  <div className="insights-featured-overlay" />
                  <span className="insights-featured-badge">Featured Article</span>
                </div>
                <div className="insights-featured-body">
                  <div className="insights-featured-meta">
                    <span className="insights-featured-cat">{featured.category}</span>
                    <span className="insights-featured-date">
                      <Clock size={12} />
                      {featured.date}
                    </span>
                    <span>{featured.readTime}</span>
                  </div>
                  <h2 className="insights-featured-title">{featured.title}</h2>
                  <p className="insights-featured-desc">{featured.excerpt}</p>
                  <span className="insights-featured-link">
                    Read Article <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </div>
          </section>
        )}

        {!loading && rest.length > 0 && (
          <section className="section section-light">
            <div className="container">
              <h2 className="insights-section-title">More Articles</h2>
              <div className="insights-grid">
                {rest.map((post, i) => (
                  <motion.article
                    key={post.slug}
                    className="insight-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Link to={`/insights/blog/${post.slug}`} className="insight-card-link">
                      <div className="insight-card-image">
                        <img src={post.image} alt={post.imageAlt} loading="lazy" />
                      </div>
                      <div className="insight-card-body">
                        <div className="insight-card-meta">
                          <span className="insight-card-cat">{post.category}</span>
                          <span className="insight-card-date">{post.date}</span>
                        </div>
                        <h3 className="insight-card-title">{post.title}</h3>
                        <p className="insight-card-excerpt">{post.excerpt}</p>
                        <span className="insight-card-link-text">
                          Read Article <ArrowRight size={12} />
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {!loading && categories.length > 0 && (
          <section className="section">
            <div className="container">
              <h2 className="insights-section-title">Browse by Category</h2>
              <div className="insights-categories">
                {categories.map(cat => (
                  <ScrollReveal key={cat}>
                    <div className="insights-category-card">
                      <FileText size={20} />
                      <span>{cat}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section section-light">
          <div className="container">
            <div className="insights-faq-cta">
              <HelpCircle size={24} />
              <div>
                <h3>Have a specific question?</h3>
                <p>Check our FAQ page for quick answers about products, ordering, and technical specifications.</p>
              </div>
              <AnimatedButton to="/faqs" variant="primary">View FAQs</AnimatedButton>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
