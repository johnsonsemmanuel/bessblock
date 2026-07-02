import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import SiteCTA from '../components/SiteCTA';
import SpecSheet from '../components/SpecSheet';
import GalleryLightbox from '../components/GalleryLightbox';
import { ProductHighlightCard } from '../components/ProductHighlightCard';
import { WallingIcon, KerbIcon } from '../components/CategoryIcons';
import './Walling.css';
import '../components/ProductTemplate.css';

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

const galleryImages = [
  '/images/gallery/hollow-blocks.webp',
  '/images/products/hollow-blocks-1.webp',
  '/images/products/hollow-blocks-2.webp',
  '/images/products/hollow-blocks-3.webp',
  '/images/products/hollow-blocks-4.webp',
];

const related = [
  {
    name: 'Solid Concrete Blocks',
    path: '/products/walling/solid-concrete-blocks',
    image: '/images/products/solid-blocks-1.webp',
    category: 'Walling',
    icon: WallingIcon,
    desc: 'Dense solid blocks for foundations and load-bearing walls.',
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
    image: '/images/products/retaining-walls.webp',
    category: 'Walling',
    icon: WallingIcon,
    desc: 'Terraforce® interlocking retaining wall system.',
  },
  {
    name: 'Kerbs & Edging',
    path: '/products/kerbs-edging',
    image: '/images/products/road-kerbs.webp',
    category: 'Kerbs & Edging',
    icon: KerbIcon,
    desc: 'Precast concrete kerbs, edgings, and channels.',
  },
];

export default function HollowConcreteBlocks() {
  return (
    <>
      <SEO title="Hollow Concrete Blocks" description="Bessblock hollow concrete blocks, lightweight, strong walling units for residential, commercial, and industrial construction with good thermal performance." />
      <div className="page">
      <PageHero title="Hollow Concrete Blocks" description="Hollow concrete blocks for general construction offering a balance of strength, weight, and build efficiency." bgImage="/images/products/hollow-blocks-1.webp" />

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
          <SectionTitle label="Products and Real World" title="Hollow blocks in action" align="left" />
          <GalleryLightbox images={galleryImages} />
        </div>
      </section>

      {/* Related */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Related Products" title="Explore more walling solutions" align="left" />
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
        title="Need hollow blocks for your project?"
        description="Contact our team for pricing, delivery, and technical information."
        secondaryText="View All Walling"
        secondaryLink="/products/walling"
      />
    </div>
    </>
  );
}
