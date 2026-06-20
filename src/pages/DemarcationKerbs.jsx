import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedButton from '../components/AnimatedButton';
import './About.css';
import './Kerbs.css';

const specs = [
  { label: 'Product type', value: 'Precast concrete demarcation kerb.' },
  { label: 'Material', value: 'Concrete.' },
  { label: 'Function', value: 'Visual and physical demarcation between surfaces.' },
  { label: 'Typical use', value: 'Cycleways, carriageways, footpaths, and car park entrances.' },
  { label: 'Standard', value: 'Manufactured to BS EN 1340.' },
  { label: 'Performance', value: 'Designed to resist vehicle overrun in appropriate configurations.' },
];

const techItems = [
  'Demarcation kerbs are usually specified where the transition between road and adjacent movement spaces must be clear but not overly abrupt.',
  'Cycle demarcation kerbs commonly use an angled profile to create a smoother crossing between the carriageway and cycle lane while still providing route separation.',
  'The units are manufactured as precast concrete products and may be used with different finishes or accessories depending on the project.',
];

const apps = ['Cycle lanes.', 'Carriageway separation.', 'Footpath edges.', 'Car park entrances.', 'Crossings.', 'Urban public realm projects.', 'Shared surface transitions.', 'Access routes requiring visual separation.'];

const installation = [
  'Set out the kerb line carefully to maintain a consistent route boundary.',
  'Install on the correct bedding and backing detail for the site conditions.',
  'Match the profile to the intended use, especially where cycle movement is involved.',
  'Ensure alignment remains smooth where the kerb is used to create a transition.',
  'Use the appropriate finish and accessory details where appearance is important.',
];

const benefits = [
  'Clearly separates cycle routes, footpaths, and carriageways.',
  'Helps create safer and more intuitive traffic layouts.',
  'Suitable where space is limited and a compact kerb profile is needed.',
  'Can withstand vehicle overrun in specified applications.',
  'Offers a smooth, angled transition between surface types.',
  'Supports a clean, modern finish for streets and public realm projects.',
];

const related = [
  { name: 'Road Kerbs', path: '/products/kerbs-edging/road-kerbs' },
  { name: 'Garden Kerbs', path: '/products/kerbs-edging/garden-kerbs' },
  { name: 'Barrier Kerbs', path: '/products/kerbs-edging/barrier-kerbs' },
  { name: 'Gutter Kerbs', path: '/products/kerbs-edging/gutter-kerbs' },
  { name: 'Slotted Kerbs', path: '/products/kerbs-edging/slotted-kerbs' },
];

export default function DemarcationKerbs() {
  return (
    <div className="page">
      <PageHero title="Demarcation Kerbs" description="Bessblock Demarcation Kerbs are designed to provide clear visual separation between traffic lanes, pedestrian areas, cycle routes, and other paved zones. They are a practical way to improve safety, guide movement, and give public or private spaces a clean, organised finish." bgImage="/images/products/retaining-wall-2.jpg" />

      <section className="section">
        <div className="container">
          <SectionTitle label="Overview" title="Clear boundaries for safer spaces" align="left" />
          <ScrollReveal>
            <div className="kerb-sub-tech">
              <p>Demarcation kerbs are used where a physical or visual boundary is needed without necessarily creating a high or heavy containment edge. They are especially useful in urban streets, cycle lanes, car parks, and access routes where the layout needs to be easy to understand at a glance.</p>
              <p>It is a functional and visually neat kerb solution that supports safe movement and clear site definition. It sits between simple edging and heavier road kerb profiles in terms of purpose and profile.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Key Benefits" title="Safety through separation" align="left" />
          <div className="kerb-sub-benefits">
            {benefits.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="kerb-sub-benefit">
                  <div className="kerb-sub-benefit-dot" />
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
          <div className="kerb-sub-specs">
            {specs.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div className="kerb-sub-spec">
                  <span className="kerb-sub-spec-label">{s.label}</span>
                  <span className="kerb-sub-spec-value">{s.value}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Technical Information" title="How demarcation kerbs work" align="left" />
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
          <SectionTitle label="Applications" title="Where demarcation kerbs are used" align="left" />
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
            <h2 className="about-cta-title" style={{ color: 'var(--color-white)' }}>Need demarcation kerbs for safer streets?</h2>
            <p className="about-cta-text" style={{ color: 'rgba(255,255,255,0.8)' }}>Contact our team for pricing, delivery, and technical information.</p>
            <div className="about-cta-actions">
              <AnimatedButton to="/contact" variant="yellow">Request a Quote</AnimatedButton>
              <AnimatedButton to="/products/kerbs-edging" variant="outline">View All Kerbs</AnimatedButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
