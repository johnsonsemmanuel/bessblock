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
  { label: 'System', value: 'Terraforce® L Range - Standard Option' },
  { label: 'Block type', value: 'Reversible hollow-core' },
  { label: 'Interlock', value: 'Horizontal (no nibs or slots)' },
  { label: 'Construction', value: 'Dry-stack (mortar-free)' },
  { label: 'Wall types', value: 'Gravity, reinforced, stabilised backfill' },
  { label: 'Wall geometry', value: 'Straight, curved, stepped, tiered' },
];

const techItems = [
  'Uses a distinctive horizontal interlock without nibs and slots restricting wall geometry.',
  'When filled with soil, gravel, or concrete, blocks gain additional vertical interlock and mass.',
  'Can be used as part of a gravity wall or as the fascia of a geosynthetic reinforced wall structure.',
  'In some applications, can be used with cement filled backfill where design requires it.',
];

const apps = [
  'Soil retaining walls.', 'Garden terracing.', 'Landscaping walls.',
  'Erosion control.', 'Storm water control.', 'Sea shore erosion control.',
  'Reinforced slopes.', 'Civil engineering retaining structures.',
];

const features = [
  'Reversible hollow-core concrete block design.',
  'Horizontal interlock for stable dry-stacked construction.',
  'Suitable for curves, corners, and unrestricted wall angles.',
  'Can be planted to create a living wall effect.',
  'Lightweight for delivery, with added mass when filled.',
  'Suitable for gravity and reinforced retaining wall systems.',
];

const related = [
  { name: 'L Range - Rock Face Option', path: '/products/walling/l-range-rock-face' },
  { name: '4x4 Step Block', path: '/products/walling/4x4-step-block' },
  { name: 'Terralite', path: '/products/walling/terralite' },
  { name: 'Terrafix', path: '/products/walling/terrafix' },
  { name: 'Terracrete', path: '/products/walling/terracrete' },
];

export default function LRangeStandard() {
  return (
    <>
      <SEO title="L-Range Standard" description="Terraforce® L Range Standard Option, a versatile dry-stack interlocking concrete retaining block for landscaping, erosion control, and gravity retaining walls." />
      <div className="page">
      <PageHero title="L Range - Standard Option" description="A versatile concrete retaining block for landscaping and erosion control, designed to stack without mortar in most applications using dry-stacked construction for faster installation and reduced consumables." bgImage="/images/hero/concrete-texture-2.webp" />

      <section className="section">
        <div className="container">
          <SectionTitle label="Overview" title="The original Terraforce® block" align="left" />
          <ScrollReveal>
            <div className="wall-sub-overview">
              <p>The L Range - Standard Option is a versatile concrete retaining block for landscaping and erosion control. It is suitable for creating terraced gardens, civil engineering retaining structures, and other projects where soil retention is required.</p>
              <p>The block is designed to stack without mortar in most applications, using dry-stacked construction for faster installation and reduced consumables. The hollow-core form also allows the wall to be planted, creating a softer living wall appearance where required.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Key Benefits" title="Engineered for flexibility" align="left" />
          <div className="wall-sub-benefits">
            {features.map((item, i) => (
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

      <section className="section">
        <div className="container">
          <SectionTitle label="Detailed Specifications" title="Technical data" align="left" />
          <ScrollReveal><SpecSheet specs={specs} /></ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Technical Information" title="How the system works" align="left" />
          <div className="wall-sub-tech">
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
          <SectionTitle label="Applications" title="Where L Range blocks excel" align="left" />
          <div className="wall-sub-apps">
            {apps.map((app, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div className="wall-sub-app">{app}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Installation and Handling" title="Site best practices" align="left" />
          <ScrollReveal>
            <div className="wall-sub-instruction">
              <p>The blocks are dry stacked in most applications, making installation straightforward and reducing the need for mortar.</p>
              <p>Their interlocking design supports quicker wall build times and allows the wall line to follow the required profile.</p>
              <p>Foundation preparation requires a compacted granular base extending beyond the wall face.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Related Products" title="Explore more Terraforce® options" align="left" />
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
            <h2 className="about-cta-title" style={{ color: 'var(--color-white)' }}>Need L Range blocks for your project?</h2>
            <p className="about-cta-text" style={{ color: 'rgba(255,255,255,0.8)' }}>Contact our team for pricing, delivery, and technical information.</p>
            <div className="about-cta-actions">
              <AnimatedButton to="/request-quote" variant="yellow">Request a Quote</AnimatedButton>
              <AnimatedButton to="/products/walling/retaining-walls" variant="outline">View All Retaining Walls</AnimatedButton>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
