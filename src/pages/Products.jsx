import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { ProductHighlightCard } from '../components/ProductHighlightCard';
import { PavingIcon, WallingIcon, KerbIcon, SlabIcon, StepIcon } from '../components/CategoryIcons';
import productCategories from '../data/products';
import SEO from '../components/SEO';
import './Products.css';

const icons = { 'paving-blocks': PavingIcon, 'walling': WallingIcon, 'paving-slabs': SlabIcon, 'step-risers': StepIcon, 'kerbs-edging': KerbIcon };

const categoryImages = {
  'paving-blocks': 'https://images.unsplash.com/photo-1590674899484-d5640d0f7b3e?w=800&q=80',
  'walling': 'https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=800&q=80',
  'paving-slabs': 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
  'step-risers': 'https://images.unsplash.com/photo-1504307651254-84280e7f79d8?w=800&q=80',
  'kerbs-edging': 'https://images.unsplash.com/photo-1558459654-c430be5b5717?w=800&q=80',
};

function CategoryCard({ cat }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="pc-card">
        <motion.div
          className="pc-card-bg"
          style={{
            backgroundImage: `url(${categoryImages[cat.id]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <div className="pc-card-overlay" />
        <div className="pc-card-content">
          <div className="pc-card-icon">{icons[cat.id]}</div>
          <h2 className="pc-card-title">{cat.name}</h2>
          <p className="pc-card-desc">{cat.description}</p>
        </div>
        <div className="pc-card-tags">
          {cat.subcategories.map(sub => (
            <Link key={sub.id} to={sub.path} className="pc-card-tag">{sub.name}</Link>
          ))}
        </div>
      </div>

      <div className="pc-grid">
        {cat.subcategories.map(sub => (
          <ProductHighlightCard
            key={sub.id}
            categoryIcon={icons[cat.id]}
            category={cat.name}
            title={sub.name}
            description={sub.description}
            to={sub.path}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Products() {
  return (
    <>
      <SEO title="All Products" description="Browse Bessblock's complete range of concrete paving blocks, walling blocks, kerbs, paving slabs, and step risers for construction projects." />
      <div className="page">
      <PageHero
        title="All Products"
        description="Comprehensive range of concrete blocks, paving units, kerbs, and edging solutions for infrastructure and institutional projects."
        bgImage="/images/hero/paving-hero.jpg"
      />

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
            {productCategories.map(cat => (
              <CategoryCard key={cat.id} cat={cat} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <motion.div
            className="products-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="products-cta-title">Need Help Choosing?</h2>
            <p className="products-cta-desc">
              Our technical team can help you select the right products for your project specifications.
            </p>
            <div className="products-cta-actions">
              <Link to="/contact" className="products-cta-btn products-cta-btn-primary">
                Request a Quote
              </Link>
              <Link to="/contact" className="products-cta-btn products-cta-btn-secondary">
                Speak to an Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
