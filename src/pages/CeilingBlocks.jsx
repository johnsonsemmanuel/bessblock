import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import SiteCTA from '../components/SiteCTA';
import SpecSheet from '../components/SpecSheet';
import './Walling.css';

const specs = [
  { label: 'Dimensions', value: '400mm x 190mm x 150mm.' },
  { label: 'Average weight', value: '16.001kg.' },
  { label: 'Materials', value: 'Cement, riversand, quarry dust, chippings, and water.' },
  { label: 'Avg. compressive strength', value: '5 MPa to 8 MPa.' },
  { label: 'Coverage', value: 'Approx. 17 blocks per m².' },
  { label: 'Pack quantity', value: 'Approx. 105 blocks per pallet.' },
];

const techItems = [
  'Known as concrete beam blocks in some construction contexts.',
  'Designed for use between precast or cast-in-situ ribs.',
  'Typically used as non-structural filler units.',
  'Can include slots or notches to accommodate reinforcement or structural detailing.',
  'Works as part of a system that is completed with mesh, topping, and curing.',
];

const apps = [
  'Suspended floor slabs.', 'Ceiling systems.', 'Rib-and-block construction.',
  'Residential and commercial buildings.', 'Structural floor infill zones.',
];

const installation = [
  'Install onto pre-formed beams or ribs.',
  'Place blocks carefully to avoid chipping.',
  'Position reinforcement mesh where specified.',
  'Pour slab topping to the engineer\'s required depth.',
  'Cure the completed system correctly before loading.',
  'Follow the structural design and installation sequence precisely.',
];

const related = [
  { name: 'Hollow Concrete Blocks', path: '/products/walling/hollow-concrete-blocks' },
  { name: 'Solid Concrete Blocks', path: '/products/walling/solid-concrete-blocks' },
  { name: 'Retaining Walls', path: '/products/walling/retaining-walls' },
  { name: 'Paving Slabs', path: '/products/paving-slabs' },
];

export default function CeilingBlocks() {
  return (
    <>
      <SEO title="Ceiling Blocks" description="Bessblock ceiling blocks for rib-and-block slab systems, non-structural concrete infill units for suspended floors and ceilings in building construction." />
      <div className="page">
      <PageHero title="Ceiling Blocks" description="Ceiling Blocks are non-structural concrete infill units used in rib-and-block slab systems for suspended floors and ceilings. They are designed to work between reinforced concrete ribs or beams as part of a structural floor or roof assembly." bgImage="/images/hero/concrete-texture-2.webp" />

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Key Benefits" title="Efficient floor construction" align="left" />
          <div className="wall-sub-benefits">
            {[
              'Suitable for rib-and-block slab systems.',
              'Helps reduce dead load in suspended slab construction.',
              'Works with reinforced concrete ribs and toppings.',
              'Provides a practical infill solution for ceiling and floor systems.',
              'Helps speed up slab construction on site.',
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
          <SectionTitle label="Technical Information" title="How ceiling blocks work" align="left" />
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
          <SectionTitle label="Applications" title="Where ceiling blocks are used" align="left" />
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
          <SectionTitle label="Installation and Handling" title="Site best practices" align="left" />
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
          <SectionTitle label="Project Gallery" title="Ceiling blocks in construction" align="left" />
          <div className="wall-sub-gallery">
            {[
              '/images/products/ceiling-blocks-2.webp',
              '/images/products/ceiling-blocks-3.webp',
              '/images/products/ceiling-blocks-rib.webp',
              '/images/products/ceiling-blocks-1.webp',
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

      <SiteCTA
        title="Need ceiling blocks for your project?"
        description="Contact our team for pricing, delivery, and technical information."
        secondaryText="View All Walling"
        secondaryLink="/products/walling"
      />
    </div>
    </>
  );
}
