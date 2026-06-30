import { CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import SiteCTA from '../components/SiteCTA';
import SpecSheet from '../components/SpecSheet';
import GalleryLightbox from '../components/GalleryLightbox';
import { ProductHighlightCard } from '../components/ProductHighlightCard';
import { WallingIcon, SlabIcon } from '../components/CategoryIcons';
import './Walling.css';
import '../components/ProductTemplate.css';

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

const galleryImages = [
  '/images/products/ceiling-blocks-2.webp',
  '/images/products/ceiling-blocks-3.webp',
  '/images/products/ceiling-blocks-rib.webp',
  '/images/products/ceiling-blocks-1.webp',
];

const related = [
  {
    name: 'Hollow Concrete Blocks',
    path: '/products/walling/hollow-concrete-blocks',
    image: '/images/products/hollow-blocks-1.webp',
    category: 'Walling',
    icon: WallingIcon,
    desc: 'Lightweight, strong walling units for general construction.',
  },
  {
    name: 'Solid Concrete Blocks',
    path: '/products/walling/solid-concrete-blocks',
    image: '/images/products/solid-blocks-1.webp',
    category: 'Walling',
    icon: WallingIcon,
    desc: 'Dense solid blocks for foundations and load-bearing walls.',
  },
  {
    name: 'Retaining Walls',
    path: '/products/walling/retaining-walls',
    image: '/images/products/retaining-walls.webp',
    category: 'Walling',
    icon: WallingIcon,
    desc: 'Terraforce® interlocking retaining wall system.',
  },
  {
    name: 'Paving Slabs',
    path: '/products/paving-slabs',
    image: '/images/products/smooth-paving-slabs.webp',
    category: 'Paving Slabs',
    icon: SlabIcon,
    desc: 'Concrete slabs for pedestrian areas, patios, and public spaces.',
  },
];

export default function CeilingBlocks() {
  return (
    <>
      <SEO title="Ceiling Blocks" description="Bessblock ceiling blocks for rib-and-block slab systems, non-structural concrete infill units for suspended floors and ceilings in building construction." />
      <div className="page">
      <PageHero title="Ceiling Blocks" description="Non-structural concrete infill units for rib-and-block slab systems in suspended floors and ceilings." bgImage="/images/products/ceiling-blocks-1.webp" />

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
          <GalleryLightbox images={galleryImages} />
        </div>
      </section>

      {/* Related */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Related Products" title="Explore more" align="left" />
          <div className="related-grid" style={{ '--rel-columns': 4 }}>
            {related.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 0.06}>
                <ProductHighlightCard
                  categoryIcon={r.icon}
                  category={r.category}
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
