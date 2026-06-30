import { motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import SEO from './SEO';
import Breadcrumbs from './Breadcrumbs';
import LazyBackground from './LazyBackground';
import GalleryLightbox from './GalleryLightbox';
import { Check } from 'lucide-react';
import { ProductHighlightCard } from './ProductHighlightCard';
import SpecSheet from './SpecSheet';
import SiteCTA from './SiteCTA';
import AnimatedButton from './AnimatedButton';
import { PavingIcon, WallingIcon, KerbIcon, SlabIcon, StepIcon } from './CategoryIcons';
import { productPages, getProductPath } from '../data/products';
import './ProductTemplate.css';

const categoryIcons = { 'paving-blocks': PavingIcon, 'walling': WallingIcon, 'paving-slabs': SlabIcon, 'step-risers': StepIcon, 'kerbs-edging': KerbIcon };

const categoryGalleryImages = {
  'paving-blocks': [
    '/images/gallery/interlocking-residential.webp',
    '/images/gallery/rectangular-residential.webp',
    '/images/gallery/rectangular-katamanso.webp',
    '/images/gallery/rectangular-residential-2.webp',
    '/images/gallery/paving-blocks-stack.webp',
  ],
  'walling': [
    '/images/gallery/hollow-blocks.webp',
    '/images/gallery/solid-blocks.webp',
    '/images/gallery/retaining-action.webp',
    '/images/gallery/paving-blocks-stack.webp',
  ],
  'paving-slabs': [
    '/images/gallery/textured-slabs-pool.webp',
    '/images/gallery/paving-blocks-stack.webp',
    '/images/gallery/interlocking-residential.webp',
  ],
  'step-risers': [
    '/images/gallery/step-risers/Paving%20Slabs%20-%20See%20it%20in%20action%20-%20Bessblock%20Concrete%20Product%20Ltd%20----.webp',
    '/images/gallery/step-risers/Paving%20Slabs%20-%20See%20it%20in%20action%20-%20Bessblock%20Concrete%20Product%20Ltd%20--..webp',
    '/images/gallery/step-risers/Paving%20Slabs%20-%20See%20it%20in%20action%20-%20Bessblock%20Concrete%20Product%20Ltd%20-..webp',
  ],
  'kerbs-edging': [
    '/images/gallery/road-kerbs-delivery.webp',
    '/images/gallery/paving-blocks-stack.webp',
    '/images/gallery/solid-blocks.webp',
  ],
};

const productImages = {
  'interlocking-paving-blocks': '/images/products/interlocking-paving-1.webp',
  'rectangular-paving-blocks': '/images/products/rectangular-paving-1.webp',
  'hexagonal-paving-blocks': '/images/products/hexagonal-paving-blocks-1.webp',
  'hollow-concrete-blocks': '/images/products/hollow-blocks-1.webp',
  'solid-concrete-blocks': '/images/products/solid-blocks-1.webp',
  'ceiling-blocks': '/images/products/ceiling-blocks-1.webp',
  'retaining-walls': '/images/products/retaining-walls.webp',
  'road-kerbs': '/images/products/road-kerbs.webp',
  'demarcation-kerbs': '/images/products/demarcation-kerbs.webp',
  'garden-kerbs': '/images/products/garden-kerbs.webp',
  'barrier-kerbs': '/images/products/barrier-kerbs.webp',
  'gutter-kerbs': '/images/products/gutter-kerbs.webp',
  'slotted-kerbs': '/images/categories/kerbs-edging.webp',
  'textured-paving-slabs': '/images/products/textured-paving-slabs.webp',
  'smooth-paving-slabs': '/images/products/smooth-paving-slabs.webp',
  'large-format-slabs': '/images/products/large-format-slabs.webp',
  'standard-step-risers': '/images/products/standard-step-risers.webp',
  'wide-tread-steps': '/images/products/wide-tread-steps.webp',
  'bullnose-steps': '/images/products/bullnose-steps.webp',
  'l-range-standard': '/images/products/l-range-standard.webp',
  'l-range-rock-face': '/images/products/l-range-rock-face.webp',
  '4x4-step-block': '/images/products/4x4-step-block.webp',
  'terralite': '/images/products/terralite.webp',
  'terrafix': '/images/products/terrafix.webp',
  'terracrete': '/images/products/terracrete.webp',
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
            <Breadcrumbs path={getProductPath(productKey).slice(1)} current={product.name} />
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
                <AnimatedButton to="/contact" variant="primary">Contact Sales</AnimatedButton>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Project Gallery" title="See it in action" align="left" />
          <GalleryLightbox images={categoryGalleryImages[product.category] || ['/images/gallery/paving-blocks-stack.webp', '/images/gallery/interlocking-residential.webp', '/images/gallery/rectangular-residential.webp']} />
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
                    to={getProductPath(key)}
                    imageSrc={productImages[key]}
                    imageAlt={related.name}
                  />
                );
              })}
            </div>
          </div>
        </section>
      )}

      <SiteCTA
        title={`Need ${product.name} for your project?`}
        description="Contact our team for pricing, technical specifications, and delivery options."
        primaryText="Get a Quote"
        primaryLink="/request-quote"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
    </div>
    </>
  );
}
