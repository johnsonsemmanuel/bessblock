import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import SpecSheet from '../components/SpecSheet';
import SiteCTA from '../components/SiteCTA';
import GalleryLightbox from '../components/GalleryLightbox';
import { ProductHighlightCard } from '../components/ProductHighlightCard';
import { KerbIcon } from '../components/CategoryIcons';
import productCategories from '../data/products';
import { CheckCircle2 } from 'lucide-react';
import './KerbsEdging.css';

const benefits = [
  'Provides rigid edge restraint for paved and landscaped areas.',
  'Helps maintain the shape and integrity of roads, pavements, and driveways.',
  'Creates a neat, finished boundary between different surface types.',
  'Suitable for public, commercial, residential, and estate projects.',
  'Supports drainage control and surface separation where required.',
  'Available in different profiles to suit roads, gardens, gutters, and traffic interfaces.',
];

const techItems = [
  'Kerbs and edgings are normally laid on a concrete foundation rather than a conventional sub-base alone.',
  'They are often supported with backing concrete or haunching to improve stability.',
  'The laying process generally requires correct line, level, and joint control.',
  'Wider kerb systems may also support water management and traffic separation.',
];

const specs = [
  { label: 'Product type', value: 'Precast concrete kerbs and edging units.' },
  { label: 'Material', value: 'Cement, aggregates, and water.' },
  { label: 'Typical length', value: '1,000mm across variants.' },
  { label: 'Typical use', value: 'Edge restraint, road separation, drainage control, and landscaping boundaries.' },
  { label: 'Finish options', value: 'Standard grey and project-specific finishes.' },
  { label: 'Installation method', value: 'Laid on a concrete bed with rear haunching where required.' },
];

const apps = [
  'Roads and carriageways.', 'Pavements and footpaths.', 'Driveways and parking areas.',
  'Estate roads and residential developments.', 'Garden boundaries and lawn edges.',
  'Drainage channels and surface water control areas.', 'Traffic separation and edge containment zones.',
];

export default function KerbsEdging() {
  const cat = productCategories.find(c => c.id === 'kerbs-edging');
  return (
    <>
      <SEO title="Kerbs & Edging" description="Explore Bessblock's range of concrete kerbs and edging, road kerbs, demarcation kerbs, garden kerbs, barrier kerbs, gutter kerbs, and slotted kerbs." />
      <div className="page">
      <PageHero
        title="Kerbs & Edging"
        description="Bessblock's Kerbs & Edging range is designed to provide clean boundaries, edge restraint, and durable finishing detail for roads, pavements, driveways, parking areas, and landscaped spaces."
        bgImage="/images/categories/kerbs-edging.webp"
      />

      <section className="section">
        <div className="container">
          <SectionTitle label="Overview" title="The foundation of neat edges" align="left" />
          <ScrollReveal>
            <div className="kerbs-overview">
              <p>Kerbs and edging units are a vital part of paving construction because they define the boundary between surfaces and help prevent movement or crumbling at the edges. They also improve the visual finish of a project by giving it a more complete and professional appearance.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Key Benefits" title="Essential for lasting pavements" align="left" />
          <div className="kerbs-benefits">
            {benefits.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="kerbs-benefit-card">
                  <CheckCircle2 size={16} className="kerbs-benefit-dot" />
                  <span>{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle label="Product Range" title="Our kerb and edging products" />
          <div className="kerbs-sub-grid">
            {[
              { ...cat.subcategories[0], image: '/images/products/road-kerbs.webp' },
              { ...cat.subcategories[1], image: '/images/products/demarcation-kerbs.webp' },
              { ...cat.subcategories[2], image: '/images/products/garden-kerbs.webp' },
              { ...cat.subcategories[3], image: '/images/products/barrier-kerbs.webp' },
              { ...cat.subcategories[4], image: '/images/products/gutter-kerbs.webp' },
              { ...cat.subcategories[5], image: '/images/categories/kerbs-edging.webp' },
            ].map((sub, i) => (
              <ScrollReveal key={sub.id} delay={i * 0.06}>
                <ProductHighlightCard
                  categoryIcon={KerbIcon}
                  category="Kerbs & Edging"
                  title={sub.name}
                  description={sub.description}
                  to={sub.path}
                  imageSrc={sub.image}
                  imageAlt={sub.name}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Detailed Specifications" title="Common specifications" align="left" />
          <ScrollReveal><SpecSheet specs={specs} columns={2} /></ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle label="Technical Information" title="Installation principles" align="left" />
          <div className="kerbs-tech">
            {techItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <p>{item}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Applications" title="Where kerbs and edging are used" align="left" />
          <div className="kerbs-apps">
            {apps.map((app, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div className="kerbs-app">{app}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Project Gallery" title="See it in action" align="left" />
          <GalleryLightbox images={['/images/gallery/road-kerbs-delivery.webp', '/images/gallery/paving-blocks-stack.webp', '/images/gallery/solid-blocks.webp']} />
        </div>
      </section>

      <SiteCTA
        title="Need kerbs for your project?"
        description="Contact our team for technical specifications, pricing, and project advice."
        secondaryText="View All Products"
        secondaryLink="/products"
      />
    </div>
    </>
  );
}
