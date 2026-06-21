import { Link } from 'react-router-dom';
import { ArrowRight, Hexagon, Lock, Layers, Shield, Wrench } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import SpecSheet from '../components/SpecSheet';
import AnimatedButton from '../components/AnimatedButton';
import './About.css';
import './HexagonalPavingBlocks.css';

const benefits = [
  { icon: '⬡', title: 'Attractive design', desc: 'Distinctive geometric appearance' },
  { icon: '🔗', title: 'Strong interlock', desc: 'Six-sided locking for stability' },
  { icon: '⚖', title: 'Load distribution', desc: 'Multi-directional force spread' },
  { icon: '☔', title: 'Weather-resistant', desc: 'Durable in all conditions' },
  { icon: '🧹', title: 'Easy maintenance', desc: 'Low upkeep requirements' },
];

const specs = [
  { label: 'Material', value: 'Cement, Riversand, Quarry Dust, Chippings, Water' },
  { label: 'Thickness', value: '60mm to 80mm.' },
  { label: 'Strength', value: '25 MPa to 50 MPa.' },
  { label: 'Colours', value: 'Grey, sand, red, charcoal, custom.' },
  { label: 'Coverage', value: '~32 pcs per square meter.' },
];

const applications = [
  'Garden paths', 'Courtyards', 'Public seating areas',
  'Entrance walkways', 'Landscaping projects', 'External circulation spaces',
];

const related = [
  { name: 'Rectangular Paving Block', path: '/products/paving-blocks/rectangular' },
  { name: 'Interlocking Paving Blocks', path: '/products/paving-blocks/interlocking' },
  { name: 'Walling', path: '/products/walling' },
  { name: 'Kerbs & Edging', path: '/products/kerbs-edging' },
];

function HexImgagePlaceholder({ label }) {
  return (
    <div className="hex-overview-img">
      <Hexagon size={36} />
      <span>{label}</span>
    </div>
  );
}

function TechImgPlaceholder({ label }) {
  return (
    <div className="hex-tech-img">
      <Hexagon size={36} />
      <span>{label}</span>
    </div>
  );
}

export default function HexagonalPavingBlocks() {
  return (
    <>
      <SEO title="Hexagonal Paving Blocks" description="Distinctive hexagonal concrete paving blocks from Bessblock with superior interlocking for excellent load distribution in landscaping and high-traffic areas." />
      <div className="page">
      <PageHero title="Hexagonal Paving Blocks" description="Hexagonal paving blocks provide a distinctive appearance and excellent load distribution due to their six-sided geometry. They are widely used in landscaping and high-traffic paved areas." bgImage="/images/hero/concrete-texture-2.jpg" />

      {/* Overview with hex image */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Overview" title="Geometry that works harder" align="left" />
          <div className="hex-overview-split">
            <ScrollReveal direction="left">
              <div>
                <p className="about-text">
                  Hexagonal paving blocks are precision-manufactured concrete paving units designed with a unique shape that locks adjacent blocks together, creating a stable and durable pavement surface. Their superior interlocking capability minimizes movement under heavy loads, making them ideal for both pedestrian and vehicular traffic areas.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1}>
              <HexImgagePlaceholder label="Hexagonal block — coming soon" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Key Benefits" title="Five reasons to choose hexagonal" />
          <div className="hex-benefits-grid">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="hex-benefit-card">
                  <div className={`hex-benefit-icon ${i % 2 === 0 ? 'hex-benefit-hex' : 'hex-benefit-icon-rounded'}`}>
                    {i === 0 && <Hexagon size={22} />}
                    {i === 1 && <Lock size={22} />}
                    {i === 2 && <Layers size={22} />}
                    {i === 3 && <Shield size={22} />}
                    {i === 4 && <Wrench size={22} />}
                  </div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Specifications" title="Technical data" align="left" />
          <SpecSheet specs={specs} />
        </div>
      </section>

      {/* Tech Info */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Technical Information" title="How hexagonal paving works" align="left" />
          <div className="hex-tech-layout">
            <ScrollReveal direction="left">
              <div className="hex-tech-text">
                <p>A specific type of interlocking paving system that features hexagon-shaped units. These blocks are designed to fit together seamlessly, creating a unique and visually appealing pavement surface.</p>
                <p>Manufactured in a hexagon shape, with six equal sides and angles, allowing them to interlock tightly with neighboring units. Individual units or blocks fit together tightly to form a durable and visually appealing surface. Suitable in commercial and domestic use such as pathways, gardens, footpaths, parking areas etc.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1}>
              <TechImgPlaceholder label="Technical diagram — coming soon" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Applications" title="Where hexagonal paving excels" align="left" />
          <ul className="hex-apps-list">
            {applications.map((app, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <li className="hex-app-item">
                  <ArrowRight size={14} className="hex-app-dot" />
                  <span>{app}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Project Gallery" title="Hexagonal in the real world" align="left" />
          <div className="hex-gallery">
            {[0, 1, 2, 3, 4, 5].map(i => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div className="hex-gallery-item">
                  <Hexagon size={24} />
                  <span>Project image</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Related Products" title="Explore more" align="left" />
          <div className="product-related-links">
            {related.map(r => (
              <Link key={r.name} to={r.path} className="product-related-link">
                <span>{r.name}</span>
                <ArrowRight size={16} className="product-related-arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-blue">
        <div className="container">
          <div className="about-cta">
            <h2 className="about-cta-title" style={{ color: 'var(--color-white)' }}>Ready to specify hexagonal paving?</h2>
            <p className="about-cta-text" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Contact our team for technical specifications, pricing, and project-specific advice.
            </p>
            <div className="about-cta-actions">
              <AnimatedButton to="/request-quote" variant="yellow">Request a Quote</AnimatedButton>
              <AnimatedButton to="/products/paving-blocks" variant="outline">View All Paving</AnimatedButton>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
