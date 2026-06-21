import { Link } from 'react-router-dom';
import { ArrowRight, Image, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedButton from '../components/AnimatedButton';
import SpecSheet from '../components/SpecSheet';
import './About.css';
import './Walling.css';

const specs = [
  { label: 'Sizes', value: '4", 5", 6", and 8" blocks.' },
  { label: 'Face dimensions', value: '390mm x 190mm nominal across variants.' },
  { label: 'Compressive strength', value: '5 MPa to 8 MPa.' },
  { label: 'Coverage', value: 'Approx. 13 blocks per m².' },
  { label: 'Pack quantity', value: 'Approx. 75 to 120 blocks per pallet depending on size.' },
  { label: 'Material composition', value: 'Cement, graded aggregates, and clean water under controlled mix ratios.' },
  { label: 'Colour', value: 'Natural grey, unpainted.' },
];

const techItems = [
  'Suitable for residential, commercial, and industrial construction.',
  'Can be used in load-bearing or non-load-bearing wall systems depending on design.',
  'Good thermal insulation properties.',
  'Compatible with reinforced concrete structures.',
  'High dimensional accuracy supports faster laying and cleaner plastering.',
  'Suitable for internal and external wall applications where properly protected and detailed.',
];

const apps = [
  'External and internal walls.', 'Residential houses.', 'Apartments and mixed-use buildings.',
  'Commercial buildings.', 'Industrial structures.', 'Partition and infill walls.',
];

const installation = [
  'Blocks should be laid on a properly prepared mortar bed.',
  'Joints should be filled fully and kept consistent.',
  'Use reinforcement and lintels where required by structural design.',
  'Protect stacked blocks from saturation before installation.',
  'Store on level ground to avoid breakage or distortion.',
  'Walling should be built in accordance with the engineer\'s specification and relevant site standards.',
];

const related = [
  { name: 'Solid Concrete Blocks', path: '/products/walling/solid-concrete-blocks' },
  { name: 'Ceiling Blocks', path: '/products/walling/ceiling-blocks' },
  { name: 'Kerbs & Edging', path: '/products/kerbs-edging' },
  { name: 'Retaining Walls', path: '/products/walling/retaining-walls' },
];

export default function HollowConcreteBlocks() {
  return (
    <>
      <SEO title="Hollow Concrete Blocks" description="Bessblock hollow concrete blocks — lightweight, strong walling units for residential, commercial, and industrial construction with good thermal performance." />
      <div className="page">
      <PageHero title="Hollow Concrete Blocks" description="Hollow Concrete Blocks are the primary walling unit for general construction. They are commonly used in residential, commercial, and industrial buildings because they offer a practical balance of strength, weight, and build efficiency." bgImage="/images/hero/concrete-texture-1.jpg" />

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Key Benefits" title="The workhorse of construction" align="left" />
          <div className="wall-sub-benefits">
            {[
              'Suitable for load-bearing and non-load-bearing walls.',
              'Good thermal performance compared with denser wall units.',
              'Easier handling because of the hollow core structure.',
              'High dimensional accuracy helps reduce site waste.',
              'Well suited to reinforced concrete building systems.',
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
          <SectionTitle label="Detailed Specifications" title="Sizes & performance data" align="left" />
          <ScrollReveal><SpecSheet specs={specs} /></ScrollReveal>
        </div>
      </section>

      {/* Technical info */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Technical Information" title="Performance & compatibility" align="left" />
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
          <SectionTitle label="Applications" title="Where to use hollow blocks" align="left" />
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
          <SectionTitle label="Installation Notes" title="Best practices on site" align="left" />
          <div className="wall-sub-instruction">
            {installation.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
                <p>{item}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Project Gallery" title="Hollow blocks in action" align="left" />
          <div className="wall-sub-gallery">
            <div className="wall-sub-gallery-item wall-sub-gallery-featured">
              <Image size={36} />
              <span>Hollow block wall construction — coming soon</span>
            </div>
            {[1, 2, 3].map(i => (
              <div key={i} className="wall-sub-gallery-item">
                <Image size={24} />
                <span>Project image</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Related Products" title="Explore more walling solutions" align="left" />
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
            <h2 className="about-cta-title" style={{ color: 'var(--color-white)' }}>Need hollow blocks for your project?</h2>
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
