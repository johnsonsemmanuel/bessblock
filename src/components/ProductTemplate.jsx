import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import { ArrowLeft } from 'lucide-react';
import { ProductHighlightCard } from './ProductHighlightCard';
import { PavingIcon, WallingIcon, KerbIcon, SlabIcon, StepIcon } from './CategoryIcons';
import { productPages } from '../data/products';
import './ProductTemplate.css';

const categoryIcons = { 'paving-blocks': PavingIcon, 'walling': WallingIcon, 'paving-slabs': SlabIcon, 'step-risers': StepIcon, 'kerbs-edging': KerbIcon };

export default function ProductTemplate({ productKey, heroImage }) {
  const product = productPages[productKey];
  if (!product) return null;

  return (
    <div className="page">
      <section
        className="product-hero"
        style={heroImage ? { backgroundImage: `url(${heroImage})` } : undefined}
      >
        {heroImage && <div className="product-hero-overlay" />}
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link to={`/products/${product.category}`} className="product-breadcrumb">
              <ArrowLeft size={16} />
              Back to {product.category.replace(/-/g, ' ')}
            </Link>
            <h1 className="product-hero-title">{product.name}</h1>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="product-layout">
            <div className="product-main">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h2 className="product-section-title">Overview</h2>
                <p className="product-text">{product.overview}</p>
              </motion.div>

              <motion.div
                className="product-benefits"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <h2 className="product-section-title">Key Benefits</h2>
                <ul className="product-list">
                  {product.benefits.map((b, i) => (
                    <li key={i} className="product-list-item">{b}</li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="product-specs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <h2 className="product-section-title">Specifications</h2>
                <div className="specs-grid">
                  {product.specifications.map((spec, i) => (
                    <div key={i} className="spec-item">
                      <span className="spec-label">{spec.label}</span>
                      <span className="spec-value">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                <h2 className="product-section-title">Technical Information</h2>
                <p className="product-text">{product.technical}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <h2 className="product-section-title">Applications</h2>
                <p className="product-text">{product.applications}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 }}
              >
                <h2 className="product-section-title">Installation & Handling</h2>
                <p className="product-text">{product.installation}</p>
              </motion.div>
            </div>

            <aside className="product-sidebar">
              <div className="sidebar-card">
                <h3 className="sidebar-title">Quick Facts</h3>
                <div className="sidebar-stats">
                  {product.specifications.slice(0, 4).map((spec, i) => (
                    <div key={i} className="sidebar-stat">
                      <span className="sidebar-stat-value">{spec.value}</span>
                      <span className="sidebar-stat-label">{spec.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <section className="section section-light">
          <div className="container">
            <SectionTitle
              label="Related"
              title="Related Products"
              align="left"
            />
            <div className="related-grid">
              {product.relatedProducts.map((key) => {
                const related = productPages[key];
                if (!related) return null;
                return (
                  <ProductHighlightCard
                    key={key}
                    categoryIcon={categoryIcons[related.category] || PavingIcon}
                    category={related.category.replace(/-/g, ' ')}
                    title={related.name}
                    description={related.overview.slice(0, 100) + '...'}
                    to={`/products/${related.category}/${key}`}
                  />
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
