import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Plus, Lock, Grid3x3, Image, Layers, Wrench, Clock, Info } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedButton from '../components/AnimatedButton';
import SpecSheet from '../components/SpecSheet';
import './About.css';
import './RectangularPavingBlocks.css';
import './InterlockingPavingBlocks.css';

function PlusIcon() {
  return <Plus size={24} />;
}

function LockIcon() {
  return <Lock size={24} />;
}

function GridIcon() {
  return <Grid3x3 size={24} />;
}

const steps = [
  { icon: PlusIcon, title: 'Precision Manufacturing', desc: 'High-pressure vibration and hydraulic compaction produce uniform, dimensionally accurate units.' },
  { icon: LockIcon, title: 'Interlocking Design', desc: 'Each block locks securely with neighbours to create a unified pavement system.' },
  { icon: GridIcon, title: 'Complete Coverage', desc: 'Blocks distribute loads across the entire surface, reducing point stress and movement.' },
];

const benefits = [
  { icon: '⬡', title: 'High load-bearing', desc: 'Withstands heavy vehicular traffic without deformation.' },
  { icon: '🔗', title: 'Interlocking strength', desc: 'Superior mechanical interlock prevents shifting.' },
  { icon: '🔧', title: 'Easy replacement', desc: 'Individual blocks removed and replaced without disrupting the surface.' },
  { icon: '🎨', title: 'Attractive finishes', desc: 'Multiple colours and textures for design flexibility.' },
];

const specs = [
  { label: 'Product type', value: 'Precast concrete paving slab.' },
  { label: 'Standard sizes', value: '200mm x 100mm x 60mm, 200mm x 100mm x 80mm.' },
  { label: 'Thickness options', value: '60mm to 80mm, depending on application.' },
  { label: 'Compressive strength', value: '25 MPa to 50 MPa.' },
  { label: 'Surface finish', value: 'Smooth or lightly textured.' },
  { label: 'Colour options', value: 'Grey, yellow, red, and charcoal.' },
  { label: 'Coverage', value: 'Approx. 45pcs' },
];

const techItems = [
  'Produced using high-pressure vibration and hydraulic compaction.',
  'Cured for a minimum of 14–28 days to achieve optimum strength.',
  'Individual units or blocks fit together tightly to form a durable and visually appealing surface.',
  'Suitable in commercial and domestic use such as pathways, gardens, footpaths, parking areas etc.',
];

const applications = [
  'Garden patios.', 'Footpaths.', 'Courtyards.',
  'Residential walkways.', 'Landscape paving.', 'Light-use commercial outdoor areas.',
];

const related = [
  { name: 'Rectangular Paving Blocks', path: '/products/paving-blocks/rectangular' },
  { name: 'Hexagonal Paving Block', path: '/products/paving-blocks/hexagonal' },
];

function ImgPlaceholder({ label, className }) {
  return (
    <div className={`inter-hero-img ${className || ''}`}>
      <Image size={40} />
      <span>{label}</span>
    </div>
  );
}

export default function InterlockingPavingBlocks() {
  return (
    <>
      <SEO title="Interlocking Paving Blocks" description="Precision-engineered interlocking concrete paving blocks from Bessblock for durable, stable pavement surfaces for pedestrian and vehicular traffic." />
      <div className="page">
      <PageHero title="Interlocking Paving Blocks" description="Precision-engineered concrete paving units designed to interlock with adjacent blocks, creating a durable and stable pavement surface. Their unique shape distributes loads effectively, making them suitable for both pedestrian and vehicular traffic." bgImage="/images/hero/concrete-texture-1.jpg" />

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Process" title="How interlocking paving works" />
          <div className="inter-steps">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="inter-step">
                  <div className="inter-step-num">{i + 1}</div>
                  <div className="inter-step-icon"><step.icon /></div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Key Benefits" title="Why choose interlocking" align="left" />
          <div className="inter-benefits">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <motion.div
                  className="inter-benefit"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="inter-benefit-icon">
                    {i === 0 && <Layers size={24} />}
                    {i === 1 && <Lock size={24} />}
                    {i === 2 && <Wrench size={24} />}
                    {i === 3 && <Clock size={24} />}
                  </div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Specs */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Specifications" title="Detailed product data" align="left" />
          <ScrollReveal><SpecSheet specs={specs} columns={2} /></ScrollReveal>
        </div>
      </section>

      {/* Technical Information */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Technical Information" title="Manufacturing & performance" align="left" />
          <div className="inter-tech-list">
            {techItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="inter-tech-item">
                  <Info size={16} className="inter-tech-dot" />
                  <p>{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Applications" title="Where to use interlocking paving" align="left" />
          <div className="inter-apps-grid">
            {applications.map((app, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div className="inter-app-card">{app}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Project Gallery" title="See interlocking in action" align="left" />
          <div className="inter-gallery-grid">
            <div className="inter-gallery-cell inter-gallery-featured">
              <Image size={40} />
              <span>Featured project — coming soon</span>
            </div>
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="inter-gallery-cell">
                <Image size={24} />
                <span>Project image</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Related Products" title="Explore more paving solutions" align="left" />
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
            <h2 className="about-cta-title" style={{ color: 'var(--color-white)' }}>Start your paving project</h2>
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
