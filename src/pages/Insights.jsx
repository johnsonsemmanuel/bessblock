import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import './Insights.css';

const articles = [
  { title: 'Selecting the Right Paving Block for Heavy Traffic Areas', excerpt: 'Understanding load classifications, block geometry, and installation methods for industrial and commercial paving applications.', date: 'March 2026' },
  { title: 'Concrete Block Quality: What to Look For', excerpt: 'Key quality indicators including compressive strength, dimensional tolerance, water absorption, and curing methodology.', date: 'February 2026' },
  { title: 'Retaining Wall Design Considerations for Commercial Sites', excerpt: 'Engineering principles for segmental retaining walls, including drainage, reinforcement, and foundation requirements.', date: 'January 2026' },
  { title: 'Sustainable Block Manufacturing Practices', excerpt: 'Environmental considerations in concrete block production, including material sourcing, water recycling, and waste reduction.', date: 'December 2025' },
];

export default function Insights() {
  return (
    <>
      <SEO title="Insights" description="Technical articles, industry knowledge, and best practices from the Bessblock team on concrete products and construction." />
      <div className="page">
      <PageHero
        title="Insights"
        description="Technical articles, industry knowledge, and best practices from the Bessblock team."
        bgImage="/images/hero/paving-hero.jpg"
      >
        <Link to="/insights/blog" className="page-hero-cta">
          Visit Our Blog &rarr;
        </Link>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="insights-grid">
            {articles.map((article, i) => (
              <motion.article
                key={i}
                className="insight-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="insight-date">{article.date}</span>
                <h2 className="insight-title">{article.title}</h2>
                <p className="insight-excerpt">{article.excerpt}</p>
                <span className="insight-link">Read Article</span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
