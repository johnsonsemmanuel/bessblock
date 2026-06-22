import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedButton from '../components/AnimatedButton';
import SpecSheet from '../components/SpecSheet';
import './About.css';
import './Walling.css';

const specs = [
  { label: 'Sizes', value: '4", 5", 6", and 8" solid blocks.' },
  { label: 'Face dimensions', value: '390mm x 190mm nominal across variants.' },
  { label: 'Compressive strength', value: 'Range of 5 MPa to 12 MPa.' },
  { label: 'Structure', value: 'Dense solid body.' },
  { label: 'Colour', value: 'Natural grey, unpainted.' },
  { label: 'Coverage', value: 'Variable based on unit size and wall thickness.' },
];

const techItems = [
  'Designed for foundations and heavy-duty wall applications.',
  'Suitable for environments where impact resistance and long-term durability are important.',
  'Can be used in retaining or boundary walls where the structural design allows.',
  'Dense form provides a stronger base option for selected building applications.',
  'Suitable for projects requiring robust wall sections and dependable performance.',
];

const apps = [
  'Foundations.', 'Load-bearing walls.', 'Boundary walls.',
  'Retaining substructures.', 'Utility structures.', 'Industrial walls and service enclosures.',
];

const installation = [
  'Use a correct mortar mix and maintain line and level.',
  'Ensure proper curing to support long-term wall performance.',
  'Protect from excessive moisture before installation.',
  'Follow structural engineering guidance where load conditions are significant.',
  'Use suitable jointing and reinforcement where specified.',
];

const related = [
  { name: 'Hollow Concrete Blocks', path: '/products/walling/hollow-concrete-blocks' },
  { name: 'Ceiling Blocks', path: '/products/walling/ceiling-blocks' },
  { name: 'Retaining Walls', path: '/products/walling/retaining-walls' },
  { name: 'Paving Blocks', path: '/products/paving-blocks' },
];

export default function SolidConcreteBlocks() {
  return (
    <>
      <SEO title="Solid Concrete Blocks" description="Dense solid concrete blocks from Bessblock for foundations, load-bearing walls, and heavy-duty structural applications requiring high strength and durability." />
      <div className="page">
      <PageHero title="Solid Concrete Blocks" description="Solid Concrete Blocks are dense masonry units used where higher load performance and greater structural robustness are required. They are especially useful in foundations, retaining substructures, and load-bearing wall segments." bgImage="/images/hero/concrete-texture-2.webp" />

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Key Benefits" title="Strength where it counts" align="left" />
          <div className="wall-sub-benefits">
            {[
              'Higher density for stronger structural performance.',
              'Well suited to foundations and load-bearing walls.',
              'Durable in wet and coastal environments.',
              'Resistant to cracking and shrinkage when properly installed.',
              'Helpful where durability is more important than reduced unit weight.',
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="wall-sub-benefit">
                  <CheckCircle2 size={16} className="wall-sub-benefit-dot" />
                  <span>{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Detailed Specifications" title="Technical data" align="left" />
          <ScrollReveal><SpecSheet specs={specs} /></ScrollReveal>
        </div>
      </section>

      {/* Technical info */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Technical Information" title="Performance characteristics" align="left" />
          <div className="wall-sub-tech">
            {techItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <p>{item}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Applications" title="Where solid blocks excel" align="left" />
          <div className="wall-sub-apps">
            {apps.map((app, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div className="wall-sub-app">{app}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Installation & Handling" title="Best practices" align="left" />
          <div className="wall-sub-instruction">
            {installation.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <p>{item}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Project Gallery" title="Solid block applications" align="left" />
          <div className="wall-sub-gallery">
            {[
              '/images/products/solid-blocks-2.webp',
              '/images/products/solid-blocks-3.webp',
              '/images/products/solid-blocks-4.webp',
              '/images/products/solid-blocks-5.webp',
            ].map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="wall-sub-gallery-item"
                  style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Related Products" title="Explore more" align="left" />
          <div className="wall-sub-related">
            {related.map(r => (
              <Link key={r.name} to={r.path} className="product-related-link">
                <span>{r.name}</span>
                <ArrowRight size={16} className="product-related-arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-blue">
        <div className="container">
          <div className="about-cta">
            <h2 className="about-cta-title" style={{ color: 'var(--color-white)' }}>Need solid blocks for your project?</h2>
            <p className="about-cta-text" style={{ color: 'rgba(255,255,255,0.8)' }}>Contact our team for pricing, delivery, and technical information.</p>
            <div className="about-cta-actions">
              <AnimatedButton to="/request-quote" variant="yellow">Request a Quote</AnimatedButton>
              <AnimatedButton to="/products/walling" variant="outline">View All Walling</AnimatedButton>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
