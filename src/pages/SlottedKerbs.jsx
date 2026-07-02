import { CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import GalleryLightbox from '../components/GalleryLightbox';
import ScrollReveal from '../components/ScrollReveal';
import SiteCTA from '../components/SiteCTA';
import SpecSheet from '../components/SpecSheet';
import { ProductHighlightCard } from '../components/ProductHighlightCard';
import { KerbIcon } from '../components/CategoryIcons';
import './Kerbs.css';
import '../components/ProductTemplate.css';

const specs = [
  { label: 'Product type', value: 'Precast concrete slotted kerb.' },
  { label: 'Form', value: 'Kerb unit with integrated drainage slots.' },
  { label: 'Material', value: 'High-strength concrete.' },
  { label: 'Typical length', value: '1,000mm across the Bessblock kerb range.' },
  { label: 'Typical use', value: 'Drainage-controlled edges, roads, and paved boundaries.' },
  { label: 'Finish', value: 'Standard concrete grey unless otherwise specified.' },
];

const techItems = [
  'Slotted kerbs are typically installed on a concrete bed and aligned to the required line and level so runoff flows as intended.',
  'Their slot openings help direct water into the channel or drainage system while still acting as a robust kerb restraint.',
  'Slotted Kerbs are suitable for schemes where drainage capacity and edge definition both matter.',
];

const apps = ['Roadside drainage edges.', 'Car parks.', 'Estate roads.', 'Access roads.', 'Paved runoff control zones.', 'Hard landscaping with drainage requirements.', 'Public realm and civic schemes.', 'Areas needing kerb restraint with water entry points.'];

const installation = [
  'Excavate the trench to the required line and level.',
  'Prepare a firm concrete bedding base.',
  'Set the kerbs accurately so the slots align with the drainage line.',
  'Ensure joints are consistent and secure.',
  'Backfill and compact after placement.',
  'Match the kerb detail to the surrounding pavement or channel construction.',
];

const benefits = [
  'Helps move surface water into the drainage system.',
  'Provides a strong and tidy edge restraint.',
  'Suitable for roads, paved areas, and drainage channels.',
  'Improves the performance of kerb lines in wet conditions.',
  'Supports practical, engineered external works layouts.',
  'Works well as part of a coordinated kerb and drainage detail.',
];

const related = [
  { name: 'Road Kerbs', path: '/products/kerbs-edging/road-kerbs', image: '/images/products/road-kerbs.webp', desc: 'Strong edge restraint for roads, parking areas, and traffic surfaces.' },
  { name: 'Garden Kerbs', path: '/products/kerbs-edging/garden-kerbs', image: '/images/products/garden-kerbs.webp', desc: 'Neat boundaries for lawns, paths, and landscaped edges.' },
  { name: 'Barrier Kerbs', path: '/products/kerbs-edging/barrier-kerbs', image: '/images/products/barrier-kerbs.webp', desc: 'Strong physical separation between vehicles and pedestrian areas.' },
  { name: 'Gutter Kerbs', path: '/products/kerbs-edging/gutter-kerbs', image: '/images/products/gutter-kerbs.webp', desc: 'Edge restraint combined with surface water management.' },
  { name: 'Demarcation Kerbs', path: '/products/kerbs-edging/demarcation-kerbs', image: '/images/products/demarcation-kerbs.webp', desc: 'Clear visual separation between traffic lanes and pedestrian areas.' },
];

export default function SlottedKerbs() {
  return (
    <>
      <SEO title="Slotted Kerbs" description="Bessblock slotted kerbs combine edge restraint with integrated drainage slots for effective surface water management along roads and paved areas." />
      <div className="page">
      <PageHero title="Slotted Kerbs" description="Bessblock Slotted Kerbs combine edge restraint with drainage for efficient surface water management along roads." bgImage="/images/categories/kerbs-edging.webp" />

      <section className="section">
        <div className="container">
          <SectionTitle label="Overview" title="Edge restraint with drainage built in" align="left" />
          <ScrollReveal>
            <div className="kerb-sub-tech">
              <p>Slotted kerbs are used where controlled water runoff is needed alongside a strong kerb edge. The slot openings allow water to enter the drainage system more effectively, which makes them useful in streetscape and highway-style detailing.</p>
              <p>Slotted Kerbs are a functional civil and landscape product rather than a decorative edging item. The core focus is on drainage support, durability, and clean integration with adjacent paving or road construction.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Key Benefits" title="Drainage and definition" align="left" />
          <div className="kerb-sub-benefits">
            {benefits.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="kerb-sub-benefit">
                  <CheckCircle2 size={16} className="kerb-sub-benefit-dot" />
                  <span>{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle label="Detailed Specifications" title="Technical data" align="left" />
          <ScrollReveal><SpecSheet specs={specs} /></ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Technical Information" title="How slotted kerbs work" align="left" />
          <div className="kerb-sub-tech">
            {techItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <p>{item}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle label="Applications" title="Where slotted kerbs are used" align="left" />
          <div className="kerb-sub-apps">
            {apps.map((app, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div className="kerb-sub-app">{app}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Installation and Handling" title="Best practices" align="left" />
          <div className="kerb-sub-instruction">
            {installation.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <p>{item}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle label="Related Products" title="Explore more kerb options" align="left" />
          <div className="related-grid" style={{ '--rel-columns': 5 }}>
            {related.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 0.06}>
                <ProductHighlightCard
                  categoryIcon={KerbIcon}
                  category="Kerbs & Edging"
                  title={r.name}
                  description={r.desc}
                  to={r.path}
                  imageSrc={r.image}
                  imageAlt={r.name}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Gallery" title="See it in action" align="left" />
          <GalleryLightbox images={['/images/gallery/kerbs-edging/road-kerbs-action.webp', '/images/products/road-kerbs.webp', '/images/products/gutter-kerbs.webp']} />
        </div>
      </section>

      <SiteCTA
        title="Need slotted kerbs for drainage?"
        description="Contact our team for pricing, delivery, and technical information."
        secondaryText="View All Kerbs"
        secondaryLink="/products/kerbs-edging"
      />
    </div>
    </>
  );
}
