import { CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import SiteCTA from '../components/SiteCTA';
import SpecSheet from '../components/SpecSheet';
import GalleryLightbox from '../components/GalleryLightbox';
import { ProductHighlightCard } from '../components/ProductHighlightCard';
import { WallingIcon, PavingIcon } from '../components/CategoryIcons';
import './Walling.css';
import '../components/ProductTemplate.css';

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

const galleryImages = [
  '/images/products/solid-blocks-2.webp',
  '/images/products/solid-blocks-3.webp',
  '/images/products/solid-blocks-4.webp',
  '/images/products/solid-blocks-5.webp',
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
    name: 'Ceiling Blocks',
    path: '/products/walling/ceiling-blocks',
    image: '/images/products/ceiling-blocks-1.webp',
    category: 'Walling',
    icon: WallingIcon,
    desc: 'Non-structural infill units for rib-and-block slab systems.',
  },
  {
    name: 'Retaining Walls',
    path: '/products/walling/retaining-walls',
    image: '/images/products/retaining-walls.jpg',
    category: 'Walling',
    icon: WallingIcon,
    desc: 'Terraforce® interlocking retaining wall system.',
  },
  {
    name: 'Paving Blocks',
    path: '/products/paving-blocks',
    image: '/images/categories/paving-blocks.webp',
    category: 'Paving Blocks',
    icon: PavingIcon,
    desc: 'Concrete paving blocks for pedestrian and vehicular surfaces.',
  },
];

export default function SolidConcreteBlocks() {
  return (
    <>
      <SEO title="Solid Concrete Blocks" description="Dense solid concrete blocks from Bessblock for foundations, load-bearing walls, and heavy-duty structural applications requiring high strength and durability." />
      <div className="page">
      <PageHero title="Solid Concrete Blocks" description="Solid Concrete Blocks are dense masonry units used where higher load performance and greater structural robustness are required. They are especially useful in foundations, retaining substructures, and load-bearing wall segments." bgImage="/images/products/solid-blocks-1.webp" />

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
        title="Need solid blocks for your project?"
        description="Contact our team for pricing, delivery, and technical information."
        secondaryText="View All Walling"
        secondaryLink="/products/walling"
      />
    </div>
    </>
  );
}
