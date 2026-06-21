import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedButton from '../components/AnimatedButton';
import SpecSheet from '../components/SpecSheet';
import './About.css';
import './Kerbs.css';

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
  { name: 'Road Kerbs', path: '/products/kerbs-edging/road-kerbs' },
  { name: 'Garden Kerbs', path: '/products/kerbs-edging/garden-kerbs' },
  { name: 'Barrier Kerbs', path: '/products/kerbs-edging/barrier-kerbs' },
  { name: 'Gutter Kerbs', path: '/products/kerbs-edging/gutter-kerbs' },
  { name: 'Demarcation Kerbs', path: '/products/kerbs-edging/demarcation-kerbs' },
];

export default function SlottedKerbs() {
  return (
    <>
      <SEO title="Slotted Kerbs" description="Bessblock slotted kerbs combine edge restraint with integrated drainage slots for effective surface water management along roads and paved areas." />
      <div className="page">
      <PageHero title="Slotted Kerbs" description="Bessblock Slotted Kerbs are designed to combine edge restraint with drainage performance, making them suitable for projects where surface water needs to be guided away efficiently. They provide a practical kerb solution for roads, paved areas, and drainage-led layouts." bgImage="/images/products/retaining-wall-3.jpg" />

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
          <div className="kerb-sub-related">
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
            <h2 className="about-cta-title" style={{ color: 'var(--color-white)' }}>Need slotted kerbs for drainage?</h2>
            <p className="about-cta-text" style={{ color: 'rgba(255,255,255,0.8)' }}>Contact our team for pricing, delivery, and technical information.</p>
            <div className="about-cta-actions">
              <AnimatedButton to="/contact" variant="yellow">Request a Quote</AnimatedButton>
              <AnimatedButton to="/products/kerbs-edging" variant="outline">View All Kerbs</AnimatedButton>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
