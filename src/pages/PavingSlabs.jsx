import { Shield, Ruler, HardHat, Grid3x3, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import { ProductHighlightCard } from '../components/ProductHighlightCard';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import SiteCTA from '../components/SiteCTA';
import BlockDesign from '../components/BlockDesigns';
import { SlabIcon } from '../components/CategoryIcons';
import productCategories from '../data/products';
import './PavingSlabs.css';

const benefits = [
  { icon: Shield, text: 'Large-format concrete slabs for pedestrian areas, patios, and public spaces.' },
  { icon: Grid3x3, text: 'Available in textured, smooth, and large format finishes.' },
  { icon: Ruler, text: 'Manufactured to BS EN 1339 for dimensional accuracy and durability.' },
  { icon: HardHat, text: 'Suitable for civic spaces, commercial forecourts, and residential landscaping.' },
  { icon: CheckCircle2, text: 'Slip-resistant surface options for safety in public areas.' },
];

export default function PavingSlabs() {
  const cat = productCategories.find(c => c.id === 'paving-slabs');
  return (
    <>
      <SEO title="Paving Slabs" description="Explore Bessblock's concrete paving slab range, textured, smooth, and large format slabs for pedestrian areas, patios, and commercial spaces." />
      <div className="page">
      <PageHero title="Paving Slabs" description={cat.description} bgImage="/images/hero/concrete-texture-1.webp" />

      <section className="section">
        <div className="container">
          <SectionTitle label="Overview" title="Premium paving slabs for public and commercial spaces" align="left" />
          <ScrollReveal>
            <p className="about-text">Our paving slabs are designed for pedestrian areas, public spaces, and commercial settings where finish quality and durability matter. Available in textured, smooth, and large format options, each slab is manufactured to precise dimensional standards for consistent installation.</p>
            <p className="about-text">From civic plazas to residential patios, our slab range offers the flexibility to match the aesthetic and functional requirements of each project.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Key Benefits" title="Why choose Bessblock slabs" align="left" />
          <div className="slab-benefits-grid">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="slab-benefit-card">
                  <div className="slab-benefit-icon">
                    <b.icon size={20} />
                  </div>
                  <p className="slab-benefit-text">{b.text}</p>
                  <BlockDesign variant={['stack-bond', 'running-bond', 'hex-grid', 'interlock'][i]} className="slab-benefit-design" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle label="Product Range" title="Our paving slab range" align="left" />
          <div className="subcategory-grid">
              {[
                { ...cat.subcategories[0], image: '/images/products/textured-paving-slabs.jpg' },
                { ...cat.subcategories[1], image: '/images/products/smooth-paving-slabs.jpg' },
                { ...cat.subcategories[2], image: '/images/products/large-format-slabs.jpg' },
              ].map(sub => (
              <ProductHighlightCard
                key={sub.id}
                categoryIcon={SlabIcon}
                category="Paving Slabs"
                title={sub.name}
                description={sub.description}
                to={sub.path}
                imageSrc={sub.image}
                imageAlt={sub.name}
              />
            ))}
          </div>
        </div>
      </section>

      <SiteCTA
        title="Need paving slabs for your project?"
        description="Contact our team for product advice, pricing, and delivery information."
        secondaryText="Request a Quote"
        secondaryLink="/request-quote"
      />
    </div>
    </>
  );
}
