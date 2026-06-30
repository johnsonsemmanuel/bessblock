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
  { label: 'Product type', value: 'Precast concrete demarcation kerb.' },
  { label: 'Material', value: 'Concrete.' },
  { label: 'Function', value: 'Visual and physical demarcation between surfaces.' },
  { label: 'Typical use', value: 'Cycleways, carriageways, footpaths, and car park entrances.' },
  { label: 'Standard', value: 'Manufactured to BS EN 1340.' },
  { label: 'Performance', value: 'Designed to resist vehicle overrun in appropriate configurations.' },
];

const techItems = [
  'Demarcation kerbs are usually specified where the transition between road and adjacent movement spaces must be clear but not overly abrupt.',
  'Cycle demarcation kerbs commonly use an angled profile to create a smoother crossing between the carriageway and cycle lane while still providing route separation.',
  'The units are manufactured as precast concrete products and may be used with different finishes or accessories depending on the project.',
];

const apps = ['Cycle lanes.', 'Carriageway separation.', 'Footpath edges.', 'Car park entrances.', 'Crossings.', 'Urban public realm projects.', 'Shared surface transitions.', 'Access routes requiring visual separation.'];

const installation = [
  'Set out the kerb line carefully to maintain a consistent route boundary.',
  'Install on the correct bedding and backing detail for the site conditions.',
  'Match the profile to the intended use, especially where cycle movement is involved.',
  'Ensure alignment remains smooth where the kerb is used to create a transition.',
  'Use the appropriate finish and accessory details where appearance is important.',
];

const benefits = [
  'Clearly separates cycle routes, footpaths, and carriageways.',
  'Helps create safer and more intuitive traffic layouts.',
  'Suitable where space is limited and a compact kerb profile is needed.',
  'Can withstand vehicle overrun in specified applications.',
  'Offers a smooth, angled transition between surface types.',
  'Supports a clean, modern finish for streets and public realm projects.',
];

const related = [
  { name: 'Road Kerbs', path: '/products/kerbs-edging/road-kerbs', image: '/images/products/road-kerbs.webp', desc: 'Strong edge restraint for roads, parking areas, and traffic surfaces.' },
  { name: 'Garden Kerbs', path: '/products/kerbs-edging/garden-kerbs', image: '/images/products/garden-kerbs.webp', desc: 'Neat boundaries for lawns, paths, and landscaped edges.' },
  { name: 'Barrier Kerbs', path: '/products/kerbs-edging/barrier-kerbs', image: '/images/products/barrier-kerbs.webp', desc: 'Strong physical separation between vehicles and pedestrian areas.' },
  { name: 'Gutter Kerbs', path: '/products/kerbs-edging/gutter-kerbs', image: '/images/products/gutter-kerbs.webp', desc: 'Edge restraint combined with surface water management.' },
  { name: 'Slotted Kerbs', path: '/products/kerbs-edging/slotted-kerbs', image: '/images/categories/kerbs-edging.webp', desc: 'Edge restraint with integrated drainage slots.' },
];

export default function DemarcationKerbs() {
  return (
    <>
      <SEO title="Demarcation Kerbs" description="Bessblock demarcation kerbs provide clear visual separation between traffic lanes, pedestrian areas, cycle routes, and paved zones for safer streets." />
      <div className="page">
      <PageHero title="Demarcation Kerbs" description="Bessblock Demarcation Kerbs are designed to provide clear visual separation between traffic lanes, pedestrian areas, cycle routes, and other paved zones. They are a practical way to improve safety, guide movement, and give public or private spaces a clean, organised finish." bgImage="/images/products/demarcation-kerbs.webp" />

      <section className="section">
        <div className="container">
          <SectionTitle label="Overview" title="Clear boundaries for safer spaces" align="left" />
          <ScrollReveal>
            <div className="kerb-sub-tech">
              <p>Demarcation kerbs are used where a physical or visual boundary is needed without necessarily creating a high or heavy containment edge. They are especially useful in urban streets, cycle lanes, car parks, and access routes where the layout needs to be easy to understand at a glance.</p>
              <p>It is a functional and visually neat kerb solution that supports safe movement and clear site definition. It sits between simple edging and heavier road kerb profiles in terms of purpose and profile.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Key Benefits" title="Safety through separation" align="left" />
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
          <SectionTitle label="Technical Information" title="How demarcation kerbs work" align="left" />
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
          <SectionTitle label="Applications" title="Where demarcation kerbs are used" align="left" />
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
          <GalleryLightbox images={['/images/products/demarcation-kerbs.webp', '/images/products/road-kerbs.webp', '/images/products/garden-kerbs.webp']} />
        </div>
      </section>

      <SiteCTA
        title="Need demarcation kerbs for safer streets?"
        description="Contact our team for pricing, delivery, and technical information."
        secondaryText="View All Kerbs"
        secondaryLink="/products/kerbs-edging"
      />
    </div>
    </>
  );
}
