import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, FileText, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedButton from '../components/AnimatedButton';
import blogPosts from '../data/blog';
import './Insights.css';

const categories = [...new Set(blogPosts.map(p => p.category))];

export default function Insights() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      <SEO title="Insights" description="Technical articles, industry knowledge, and best practices from the Bessblock team on concrete products and construction." />
      <div className="page">
        <PageHero
          title="Insights"
          description="Technical articles, industry knowledge, and best practices from the Bessblock team."
          bgImage="/images/hero/concrete-texture-1.jpg"
        />

        {/* Featured post */}
        {featured && (
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

        {/* Blog post grid */}
        {rest.length > 0 && (
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

        {/* Categories */}
        {categories.length > 0 && (
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

        {/* FAQ CTA */}
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
