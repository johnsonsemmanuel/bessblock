import { Grid3x3, Wrench, Shield, Home, PanelBottom, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import GalleryLightbox from '../components/GalleryLightbox';
import ScrollReveal from '../components/ScrollReveal';
import SpecSheet from '../components/SpecSheet';
import SiteCTA from '../components/SiteCTA';
import { ProductHighlightCard } from '../components/ProductHighlightCard';
import BlockDesign from '../components/BlockDesigns';
import CoverageCalculator from '../components/CoverageCalculator';
import '../components/CoverageCalculator.css';
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
      <PageHero title="Walling" description="Bessblock's walling range provides durable concrete solutions for residential, commercial, and industrial construction." bgImage="/images/products/hollow-blocks-1.webp" />

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
                  <BlockDesign variant={['running-bond', 'stack-bond', 'hex-grid', 'interlock', 'running-bond', 'stack-bond'][i]} className="walling-benefit-design" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle label="Technical Range" title="Common specifications" align="left" />
          <ScrollReveal><SpecSheet specs={techItems} columns={2} /></ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Product Range" title="Explore our walling products" />
          <div className="walling-sub-grid">
              {[
                { ...cat.subcategories[0], image: '/images/products/hollow-blocks-1.webp' },
                { ...cat.subcategories[1], image: '/images/products/solid-blocks-1.webp' },
                { ...cat.subcategories[2], image: '/images/products/ceiling-blocks-1.webp' },
                { ...cat.subcategories[3], image: '/images/products/retaining-walls.webp' },
                { ...cat.subcategories[4], image: '/images/products/l-range-rock-face.webp' },
                { ...cat.subcategories[5], image: '/images/products/4x4-step-block.webp' },
                { ...cat.subcategories[6], image: '/images/products/hollow-blocks-2.webp' },
                { ...cat.subcategories[7], image: '/images/products/solid-blocks-2.webp' },
                { ...cat.subcategories[8], image: '/images/products/ceiling-blocks-2.webp' },
                { ...cat.subcategories[9], image: '/images/products/hollow-blocks-3.webp' },
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

      <section className="section section-light">
        <div className="container">
          <div className="calculator-layout">
            <div className="calculator-info">
              <SectionTitle title="Coverage Calculator" label="Estimate quantity" />
              <p>Use our coverage calculator to estimate the number of blocks needed for your walling project. Enter your wall area to get a quick quantity estimate.</p>
              <ul>
                <li><CheckCircle2 size={16} />Covers hollow, solid, and ceiling block ranges</li>
                <li><CheckCircle2 size={16} />Based on standard block coverage rates</li>
                <li><CheckCircle2 size={16} />Instant quantity estimate with unit count</li>
              </ul>
            </div>
            <CoverageCalculator />
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Gallery" title="See it in action" align="left" />
          <GalleryLightbox images={['/images/gallery/hollow-blocks.webp', '/images/gallery/solid-blocks.webp', '/images/gallery/retaining-action.webp', '/images/products/hollow-blocks-1.webp', '/images/products/hollow-blocks-2.webp', '/images/products/hollow-blocks-3.webp', '/images/products/hollow-blocks-4.webp', '/images/products/solid-blocks-1.webp', '/images/products/solid-blocks-2.webp', '/images/products/solid-blocks-3.webp', '/images/products/solid-blocks-4.webp', '/images/products/solid-blocks-5.webp', '/images/products/solid-blocks-6.webp', '/images/products/solid-blocks-7.webp', '/images/products/solid-blocks-8.webp', '/images/products/ceiling-blocks-1.webp', '/images/products/ceiling-blocks-2.webp', '/images/products/ceiling-blocks-3.webp', '/images/products/ceiling-blocks-rib.webp']} />
        </div>
      </section>

      <SiteCTA
        title="Need walling products for your project?"
        description="Contact our team for technical specifications, pricing, and project advice."
        secondaryText="View All Products"
        secondaryLink="/products"
      />
    </div>
    </>
  );
}
