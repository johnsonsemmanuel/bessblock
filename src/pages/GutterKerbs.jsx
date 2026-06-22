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
  { label: 'Product type', value: 'Precast concrete gutter kerb.' },
  { label: 'Form', value: 'Kerb, gutter, or combined kerb-and-gutter detail.' },
  { label: 'Material', value: 'Concrete.' },
  { label: 'Typical installation length', value: '3 metres or less in cast sections.' },
  { label: 'Finish', value: 'Standard concrete grey unless project-specific requirements apply.' },
  { label: 'Use', value: 'Road drainage, channel detail, and edge restraint.' },
];

const techItems = [
  'Gutter kerbs are generally installed on a compacted, even base and set to the correct line, grade, and level to ensure water flows as intended.',
  'Kerb and gutter work should be true to line, grade, and level within 5 mm and free from visible distortion.',
  'Where gutter kerbs are installed on rigid pavement or minor structures, tie bars may be required.',
];

const apps = ['Roadside drainage detail.', 'Carriageway edge restraint.', 'Combined kerb and gutter construction.', 'Estate roads.', 'Parking areas.', 'Access roads.', 'Channel and runoff control.', 'Minor civil engineering works.'];

const installation = [
  'Excavate to the required depth before installation.',
  'Compact the base to a firm, even surface.',
  'Remove soft or unsuitable material before laying.',
  'Set to the correct line, grade, and level.',
  'Use preformed filler joints where specified in cast sections.',
  'Make good any defects with suitable mortar and replace rejected sections if required.',
];

const benefits = [
  'Helps manage surface water along roads and paved edges.',
  'Provides a neat transition between carriageway and drainage line.',
  'Suitable for roads, channels, and edge detail work.',
  'Improves edge stability while supporting drainage performance.',
  'Can be used as part of combined kerb-and-gutter construction.',
  'Supports a tidy, engineered finish for transport and access routes.',
];

const related = [
  { name: 'Road Kerbs', path: '/products/kerbs-edging/road-kerbs' },
  { name: 'Demarcation Kerbs', path: '/products/kerbs-edging/demarcation-kerbs' },
  { name: 'Garden Kerbs', path: '/products/kerbs-edging/garden-kerbs' },
  { name: 'Barrier Kerbs', path: '/products/kerbs-edging/barrier-kerbs' },
  { name: 'Slotted Kerbs', path: '/products/kerbs-edging/slotted-kerbs' },
];

export default function GutterKerbs() {
  return (
    <>
      <SEO title="Gutter Kerbs" description="Bessblock gutter kerbs combine edge restraint with water management, helping guide surface runoff along roads, driveways, and paved areas." />
      <div className="page">
      <PageHero title="Gutter Kerbs" description="Bessblock Gutter Kerbs are designed to combine edge restraint with water management, helping guide surface runoff along roads, driveways, and paved areas. They are a practical choice where the kerb line also needs to support drainage performance and keep the paved edge tidy and durable." bgImage="/images/hero/concrete-texture-2.webp" />

      <section className="section">
        <div className="container">
          <SectionTitle label="Overview" title="Edge restraint meets drainage" align="left" />
          <ScrollReveal>
            <div className="kerb-sub-tech">
              <p>Gutter kerbs are used where a kerb and drainage function work together, often along road edges, access routes, and paved surfaces that need controlled runoff. They help channel water while still providing a strong boundary between the carriageway and adjacent areas.</p>
              <p>Gutter Kerbs are a functional infrastructure product rather than purely a decorative edge. The emphasis should be on durability, line-and-level accuracy, and the ability to support a clean road or channel detail in both public and private schemes.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Key Benefits" title="Drainage and durability combined" align="left" />
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
          <SectionTitle label="Technical Information" title="How gutter kerbs work" align="left" />
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
          <SectionTitle label="Applications" title="Where gutter kerbs are used" align="left" />
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
            <h2 className="about-cta-title" style={{ color: 'var(--color-white)' }}>Need gutter kerbs for drainage management?</h2>
            <p className="about-cta-text" style={{ color: 'rgba(255,255,255,0.8)' }}>Contact our team for pricing, delivery, and technical information.</p>
            <div className="about-cta-actions">
              <AnimatedButton to="/request-quote" variant="yellow">Request a Quote</AnimatedButton>
              <AnimatedButton to="/products/kerbs-edging" variant="outline">View All Kerbs</AnimatedButton>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
