import { motion } from 'framer-motion';
import { Link, Navigate } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import SEO from './SEO';
import Breadcrumbs from './Breadcrumbs';
import LazyBackground from './LazyBackground';
import { Check, ArrowRight } from 'lucide-react';
import { ProductHighlightCard } from './ProductHighlightCard';
import SpecSheet from './SpecSheet';
import { PavingIcon, WallingIcon, KerbIcon, SlabIcon, StepIcon } from './CategoryIcons';
import { productPages } from '../data/products';
import './ProductTemplate.css';

const categoryIcons = { 'paving-blocks': PavingIcon, 'walling': WallingIcon, 'paving-slabs': SlabIcon, 'step-risers': StepIcon, 'kerbs-edging': KerbIcon };

const productImages = {
  'interlocking-paving-blocks': '/images/products/interlocking-paving-1.jpg',
  'rectangular-paving-blocks': '/images/products/rectangular-paving-1.jpg',
  'hexagonal-paving-blocks': '/images/products/hexagonal-paving-blocks-1.jpg',
  'hollow-concrete-blocks': '/images/products/hollow-blocks-1.jpg',
  'solid-concrete-blocks': '/images/products/solid-blocks-1.jpg',
  'ceiling-blocks': '/images/products/ceiling-blocks-1.jpg',
  'retaining-walls': '/images/products/retaining-wall-1.jpg',
  'road-kerbs': '/images/products/rectangular-paving-5.jpg',
  'demarcation-kerbs': '/images/products/rectangular-paving-6.jpg',
  'garden-kerbs': '/images/products/rectangular-paving-7.jpg',
  'barrier-kerbs': '/images/products/rectangular-paving-8.jpg',
  'gutter-kerbs': '/images/products/interlocking-paving-1.jpg',
  'slotted-kerbs': '/images/products/hexagonal-paving-blocks-2.jpg',
  'textured-paving-slabs': '/images/products/rectangular-paving-2.jpg',
  'smooth-paving-slabs': '/images/products/rectangular-paving-4.jpg',
  'large-format-slabs': '/images/products/rectangular-paving-5.jpg',
  'standard-step-risers': '/images/products/rectangular-paving-6.jpg',
  'wide-tread-steps': '/images/products/rectangular-paving-7.jpg',
  'bullnose-steps': '/images/products/rectangular-paving-8.jpg',
  'l-range-standard': '/images/products/retaining-wall-1.jpg',
  'l-range-rock-face': '/images/products/retaining-wall-2.jpg',
  '4x4-step-block': '/images/products/retaining-wall-3.jpg',
  'terralite': '/images/products/retaining-wall-1.jpg',
  'terrafix': '/images/products/retaining-wall-2.jpg',
  'terracrete': '/images/products/retaining-wall-3.jpg',
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function ProductTemplate({ productKey, heroImage }) {
  const product = productPages[productKey];
  if (!product) return <Navigate to="/" replace />;

  return (
    <>
      <SEO title={product.name} description={product.overview?.slice(0, 160)} />
      <div className="page">
      <section className="product-hero">
        <LazyBackground
          src={heroImage}
          className="product-hero-bg-fill"
          style={{ position: 'absolute', inset: 0, zIndex: 0, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        {heroImage && <div className="product-hero-overlay" />}
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Breadcrumbs path={`products/${product.category}/${productKey}`} current={product.name} />
            <h1 className="product-hero-title">{product.name}</h1>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="product-layout">
            <motion.div
              className="product-main"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={sectionVariants}>
                <h2 className="product-section-title">Overview</h2>
                <p className="product-text">{product.overview}</p>
              </motion.div>

              {product.benefits && product.benefits.length > 0 && (
                <motion.div variants={sectionVariants}>
                  <h2 className="product-section-title">Key Benefits</h2>
                  <div className="product-benefits-list">
                    {product.benefits.map((b, i) => (
                      <div key={i} className="product-benefit-item">
                        <span className="product-benefit-icon">
                          <Check size={14} />
                        </span>
                        <span className="product-benefit-text">{b}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {product.specifications && product.specifications.length > 0 && (
                <motion.div variants={sectionVariants}>
                  <h2 className="product-section-title">Specifications</h2>
                  <SpecSheet specs={product.specifications} />
                </motion.div>
              )}

              {product.technical && (
                <motion.div variants={sectionVariants}>
                  <h2 className="product-section-title">Technical Information</h2>
                  <p className="product-text">{product.technical}</p>
                </motion.div>
              )}

              {product.applications && (
                <motion.div variants={sectionVariants}>
                  <h2 className="product-section-title">Applications</h2>
                  <p className="product-text">{product.applications}</p>
                </motion.div>
              )}

              {product.installation && (
                <motion.div variants={sectionVariants}>
                  <h2 className="product-section-title">Installation & Handling</h2>
                  <p className="product-text">{product.installation}</p>
                </motion.div>
              )}
            </motion.div>

            <aside className="product-sidebar">
              {product.specifications && product.specifications.length > 0 && (
                <SpecSheet
                  specs={product.specifications.slice(0, 4)}
                  title="Quick Facts"
                  variant="sidebar"
                />
              )}
              <motion.div
                className="product-sidebar-cta"
                variants={sectionVariants}
              >
                <h3 className="product-sidebar-cta-title">Interested in this product?</h3>
                <p className="product-sidebar-cta-desc">
                  Our team can provide pricing, technical specifications, and delivery options.
                </p>
                <Link to="/request-quote" className="product-sidebar-cta-btn">
                  Request a Quote
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Project Gallery" title="See it in action" align="left" />
          <div className="product-gallery-grid">
            {['/images/hero/construction-aerial-1.jpg', '/images/hero/construction-aerial-2.jpg', '/images/hero/construction-aerial-3.jpg'].map((img, i) => (
              <Link key={i} to="/projects" className="product-gallery-card">
                <div className="product-gallery-image" style={{ backgroundImage: `url(${img})` }} />
                <div className="product-gallery-overlay">
                  <span>View Project</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <section className="section">
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
                    imageSrc={productImages[key]}
                    imageAlt={related.name}
                  />
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
    </>
  );
}
