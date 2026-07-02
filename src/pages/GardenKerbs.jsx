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
  { label: 'Product type', value: 'Precast concrete garden kerb.' },
  { label: 'Typical size', value: '200mm x 50mm.' },
  { label: 'Length', value: '1,000mm across the kerb range.' },
  { label: 'Material', value: 'High-strength concrete.' },
  { label: 'Finish', value: 'Standard concrete grey.' },
  { label: 'Coverage', value: '1m per kerb.' },
];

const techItems = [
  'Garden kerbs are usually installed on a concrete bed to keep them level and secure over time.',
  'They are intended to provide low-level restraint rather than heavy traffic containment.',
  'Best suited to landscaping and decorative applications.',
];

const apps = ['Garden borders.', 'Lawn edging.', 'Flower bed boundaries.', 'Path edges.', 'Courtyard landscaping.', 'Residential outdoor spaces.', 'Park and estate landscaping.', 'Decorative softscape separation.'];

const installation = [
  'Excavate a shallow trench to the required line.',
  'Prepare a firm and level concrete bedding base.',
  'Set the kerbs accurately to line and level.',
  'Maintain consistent joints between units.',
  'Backfill carefully after installation.',
  'Match the kerb edge to the surrounding paving or landscaping detail.',
];

const benefits = [
  'Creates clean separation between lawns, planting areas, and paved surfaces.',
  'Gives landscaped spaces a neat, decorative finish.',
  'Helps retain soil, mulch, gravel, or edging materials.',
  'Suitable for residential gardens and public landscaping projects.',
  'Easier to handle and more understated than heavier kerb profiles.',
  'Works well with paths, borders, and soft landscaping layouts.',
];

const related = [
  { name: 'Road Kerbs', path: '/products/kerbs-edging/road-kerbs', image: '/images/products/road-kerbs.webp', desc: 'Strong edge restraint for roads, parking areas, and traffic surfaces.' },
  { name: 'Demarcation Kerbs', path: '/products/kerbs-edging/demarcation-kerbs', image: '/images/products/demarcation-kerbs.webp', desc: 'Clear visual separation between traffic lanes and pedestrian areas.' },
  { name: 'Barrier Kerbs', path: '/products/kerbs-edging/barrier-kerbs', image: '/images/products/barrier-kerbs.webp', desc: 'Strong physical separation between vehicles and pedestrian areas.' },
  { name: 'Gutter Kerbs', path: '/products/kerbs-edging/gutter-kerbs', image: '/images/products/gutter-kerbs.webp', desc: 'Edge restraint combined with surface water management.' },
  { name: 'Slotted Kerbs', path: '/products/kerbs-edging/slotted-kerbs', image: '/images/categories/kerbs-edging.webp', desc: 'Edge restraint with integrated drainage slots.' },
];

export default function GardenKerbs() {
  return (
    <>
      <SEO title="Garden Kerbs" description="Bessblock garden kerbs create neat boundaries for lawns, paths, flower beds, and landscaped edges with a clean, finished appearance for outdoor spaces." />
      <div className="page">
      <PageHero title="Garden Kerbs" description="Bessblock Garden Kerbs create neat boundaries for lawns, paths, and flower beds with a clean, finished appearance." bgImage="/images/products/garden-kerbs.webp" />

      <section className="section">
        <div className="container">
          <SectionTitle label="Overview" title="A refined edge for landscapes" align="left" />
          <ScrollReveal>
            <div className="kerb-sub-tech">
              <p>Garden kerbs are used where a low-profile concrete edge is needed to define landscaped spaces and keep surfaces visually tidy. They are ideal for residential gardens, parks, courtyards, and decorative outdoor schemes where appearance matters as much as function.</p>
              <p>This is a practical landscaping product that helps control the spread of gravel, soil, or turf while giving the project a more refined border. The product also fits well with both modern and traditional outdoor settings.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Key Benefits" title="Clean edges for natural spaces" align="left" />
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
          <SectionTitle label="Technical Information" title="Installation principles" align="left" />
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
          <SectionTitle label="Applications" title="Where garden kerbs are used" align="left" />
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
          <SectionTitle label="Products and Real World" title="See it in action" align="left" />
          <GalleryLightbox images={['/images/gallery/kerbs-edging/garden-kerbs-action.webp', '/images/products/garden-kerbs.webp', '/images/products/road-kerbs.webp', '/images/products/demarcation-kerbs.webp']} />
        </div>
      </section>

      <SiteCTA
        title="Need garden kerbs for your landscape?"
        description="Contact our team for pricing, delivery, and technical information."
        secondaryText="View All Kerbs"
        secondaryLink="/products/kerbs-edging"
      />
    </div>
    </>
  );
}
