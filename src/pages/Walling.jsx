import { Grid3x3, Wrench, Shield, Home, PanelBottom } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedButton from '../components/AnimatedButton';
import { ProductHighlightCard } from '../components/ProductHighlightCard';
import { WallingIcon } from '../components/CategoryIcons';
import productCategories from '../data/products';
import './Walling.css';

const benefits = [
  { title: 'Versatile', desc: 'Suitable for load-bearing and non-load-bearing applications.' },
  { title: 'Consistent', desc: 'Consistent dimensions for faster and cleaner construction.' },
  { title: 'Flexible', desc: 'Available in multiple sizes to suit different wall thicknesses.' },
  { title: 'Durable', desc: 'Strong, durable, and suitable for a wide range of environments.' },
  { title: 'Finish-ready', desc: 'Compatible with plastering, rendering, and reinforced structural systems.' },
  { title: 'Dual-purpose', desc: 'Useful for both internal and external wall construction.' },
];

const techItems = [
  { label: 'Material', value: 'Cement, graded aggregates, clean water, and controlled mix ratios.' },
  { label: 'Colour', value: 'Natural grey.' },
  { label: 'Manufacturing approach', value: 'Controlled production and curing.' },
  { label: 'Finish', value: 'Plain concrete masonry finish.' },
  { label: 'Typical application', value: 'Structural walling, partitions, foundations, and slab infill.' },
];

export default function Walling() {
  const cat = productCategories.find(c => c.id === 'walling');
  return (
    <>
      <SEO title="Walling" description="Explore Bessblock's concrete walling range, hollow blocks, solid blocks, ceiling blocks, and retaining walls for residential, commercial, and industrial construction." />
      <div className="page">
      <PageHero title="Walling" description="Bessblock's walling range provides practical, durable concrete solutions for residential, commercial, and industrial construction. The range covers hollow blocks, solid blocks, and ceiling blocks for both structural and non-structural applications." bgImage="/images/hero/concrete-texture-2.jpg" />

      <section className="section">
        <div className="container">
          <SectionTitle label="Overview" title="The backbone of construction" align="left" />
          <ScrollReveal>
            <div className="walling-overview">
              <p>Walling products play a critical role in building construction because they form the backbone of load-bearing and partition systems. Bessblock walling products are manufactured to support speed of construction, dimensional consistency, and reliable structural performance, making them suitable for projects where strength and build quality matter.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Key Benefits" title="Built for site efficiency" align="left" />
          <p className="about-text" style={{ marginBottom: 'var(--spacing-8)', maxWidth: 640 }}>
            Bessblock walling products are designed for site efficiency and long-term durability. They offer practical advantages for builders who want materials that are easy to work with while still meeting the demands of modern construction.
          </p>
          <div className="walling-benefits-grid">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="walling-benefit-card">
                  <div className="walling-benefit-icon">
                    {i === 0 && <Grid3x3 size={22} />}
                    {i === 1 && <Wrench size={22} />}
                    {i === 2 && <Grid3x3 size={22} />}
                    {i === 3 && <Shield size={22} />}
                    {i === 4 && <Home size={22} />}
                    {i === 5 && <PanelBottom size={22} />}
                  </div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle label="Technical Range" title="Common specifications" align="left" />
          <div className="walling-tech">
            {techItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div className="walling-tech-item">
                  <span className="walling-tech-label">{item.label}</span>
                  <span className="walling-tech-value">{item.value}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Product Range" title="Explore our walling products" />
          <div className="walling-sub-grid">
            {[
              { ...cat.subcategories[0], image: '/images/products/hollow-blocks-1.jpg' },
              { ...cat.subcategories[1], image: '/images/products/solid-blocks-1.jpg' },
              { ...cat.subcategories[2], image: '/images/products/ceiling-blocks-1.jpg' },
              { ...cat.subcategories[3], image: '/images/products/retaining-wall-1.jpg' },
              { ...cat.subcategories[4], image: '/images/products/retaining-wall-2.jpg' },
              { ...cat.subcategories[5], image: '/images/products/retaining-wall-3.jpg' },
              { ...cat.subcategories[6], image: '/images/products/retaining-wall-1.jpg' },
              { ...cat.subcategories[7], image: '/images/products/retaining-wall-2.jpg' },
              { ...cat.subcategories[8], image: '/images/products/retaining-wall-3.jpg' },
              { ...cat.subcategories[9], image: '/images/products/retaining-wall-1.jpg' },
            ].map((sub, i) => (
              <ScrollReveal key={sub.id} delay={i * 0.06}>
                <ProductHighlightCard
                  categoryIcon={WallingIcon}
                  category="Walling"
                  title={sub.name}
                  description={sub.description}
                  to={sub.path}
                  imageSrc={sub.image}
                  imageAlt={sub.name}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-blue">
        <div className="container">
          <div className="about-cta">
            <h2 className="about-cta-title" style={{ color: 'var(--color-white)' }}>Need walling products for your project?</h2>
            <p className="about-cta-text" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Contact our team for technical specifications, pricing, and project advice.
            </p>
            <div className="about-cta-actions">
              <AnimatedButton to="/request-quote" variant="yellow">Request a Quote</AnimatedButton>
              <AnimatedButton to="/products" variant="outline">View All Products</AnimatedButton>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
