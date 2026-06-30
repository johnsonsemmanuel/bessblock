import { CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import SiteCTA from '../components/SiteCTA';
import GalleryLightbox from '../components/GalleryLightbox';
import SpecSheet from '../components/SpecSheet';
import { ProductHighlightCard } from '../components/ProductHighlightCard';
import { KerbIcon } from '../components/CategoryIcons';
import './Kerbs.css';
import '../components/ProductTemplate.css';

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
  { name: 'Road Kerbs', path: '/products/kerbs-edging/road-kerbs', image: '/images/products/road-kerbs.webp', desc: 'Strong edge restraint for roads, parking areas, and traffic surfaces.' },
  { name: 'Demarcation Kerbs', path: '/products/kerbs-edging/demarcation-kerbs', image: '/images/products/demarcation-kerbs.webp', desc: 'Clear visual separation between traffic lanes and pedestrian areas.' },
  { name: 'Garden Kerbs', path: '/products/kerbs-edging/garden-kerbs', image: '/images/products/garden-kerbs.webp', desc: 'Neat boundaries for lawns, paths, and landscaped edges.' },
  { name: 'Barrier Kerbs', path: '/products/kerbs-edging/barrier-kerbs', image: '/images/products/barrier-kerbs.webp', desc: 'Strong physical separation between vehicles and pedestrian areas.' },
  { name: 'Slotted Kerbs', path: '/products/kerbs-edging/slotted-kerbs', image: '/images/categories/kerbs-edging.webp', desc: 'Edge restraint with integrated drainage slots.' },
];

export default function GutterKerbs() {
  return (
    <>
      <SEO title="Gutter Kerbs" description="Bessblock gutter kerbs combine edge restraint with water management, helping guide surface runoff along roads, driveways, and paved areas." />
      <div className="page">
      <PageHero title="Gutter Kerbs" description="Bessblock Gutter Kerbs combine edge restraint with water management for surface runoff along roads and paved areas." bgImage="/images/products/gutter-kerbs.webp" />

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
          <div className="related-grid" style={{ '--rel-columns': 5 }}>
            {related.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 0.06}>
                <ProductHighlightCard
                  categoryIcon={KerbIcon}
                  category="Kerbs & Edging"
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

      {/* Project Gallery */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Project Gallery" title="See it in action" align="left" />
          <GalleryLightbox images={['/images/products/gutter-kerbs.webp', '/images/products/road-kerbs.webp', '/images/products/barrier-kerbs.webp']} />
        </div>
      </section>

      <SiteCTA
        title="Need gutter kerbs for drainage management?"
        description="Contact our team for pricing, delivery, and technical information."
        secondaryText="View All Kerbs"
        secondaryLink="/products/kerbs-edging"
      />
    </div>
    </>
  );
}
