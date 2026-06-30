import { Hexagon, Lock, Layers, Shield, Wrench } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import SpecSheet from '../components/SpecSheet';
import SiteCTA from '../components/SiteCTA';
import GalleryLightbox from '../components/GalleryLightbox';
import { ProductHighlightCard } from '../components/ProductHighlightCard';
import { PavingIcon, WallingIcon, KerbIcon } from '../components/CategoryIcons';
import './About.css';
import './HexagonalPavingBlocks.css';
import '../components/ProductTemplate.css';

const benefits = [
  { icon: '⬡', title: 'Attractive design', desc: 'Distinctive geometric appearance' },
  { icon: '🔗', title: 'Strong interlock', desc: 'Six-sided locking for stability' },
  { icon: '⚖', title: 'Load distribution', desc: 'Multi-directional force spread' },
  { icon: '☔', title: 'Weather-resistant', desc: 'Durable in all conditions' },
  { icon: '🧹', title: 'Easy maintenance', desc: 'Low upkeep requirements' },
];

const specs = [
  { label: 'Material', value: 'Cement, Riversand, Quarry Dust, Chippings, Water' },
  { label: 'Thickness', value: '60mm to 80mm.' },
  { label: 'Strength', value: '25 MPa to 50 MPa.' },
  { label: 'Surface finish', value: 'Smooth or lightly textured.' },
  { label: 'Colours', value: 'Grey, sand, red, charcoal, custom.' },
  { label: 'Coverage', value: '~32 pcs per square meter.' },
];

const applications = [
  'Garden paths', 'Courtyards', 'Public seating areas',
  'Entrance walkways', 'Landscaping projects', 'External circulation spaces',
];

const galleryImages = [
  '/images/products/hexagonal-paving-blocks-1.webp',
  '/images/products/hexagonal-paving-blocks-2.webp',
  '/images/products/hexagonal-paving-blocks-3.webp',
  '/images/products/hexagonal-paving-blocks-4.webp',
];

const related = [
  {
    name: 'Rectangular Paving Blocks',
    path: '/products/paving-blocks/rectangular',
    image: '/images/products/rectangular-paving-1.webp',
    category: 'Paving Blocks',
    icon: PavingIcon,
    desc: 'Clean, strong rectangular paving for pedestrian and commercial use.',
  },
  {
    name: 'Interlocking Paving Blocks',
    path: '/products/paving-blocks/interlocking',
    image: '/images/products/interlocking-paving-1.webp',
    category: 'Paving Blocks',
    icon: PavingIcon,
    desc: 'Precision-engineered interlocking units for stable pavement surfaces.',
  },
  {
    name: 'Walling',
    path: '/products/walling',
    image: '/images/products/hollow-blocks-1.webp',
    category: 'Walling',
    icon: WallingIcon,
    desc: 'Hollow, solid, and ceiling blocks for construction.',
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

export default function HexagonalPavingBlocks() {
  return (
    <>
      <SEO title="Hexagonal Paving Blocks" description="Distinctive hexagonal concrete paving blocks from Bessblock with superior interlocking for excellent load distribution in landscaping and high-traffic areas." />
      <div className="page">
      <PageHero title="Hexagonal Paving Blocks" description="Hexagonal paving blocks provide distinctive appearance and load distribution for landscaping and high-traffic areas." bgImage="/images/products/hexagonal-paving-blocks-1.webp" />

      {/* Overview with hex image */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Overview" title="Geometry that works harder" align="left" />
          <div className="hex-overview-split">
            <ScrollReveal direction="left">
              <div>
                <p className="about-text">
                  Hexagonal paving blocks are precision-manufactured concrete paving units designed with a unique shape that locks adjacent blocks together, creating a stable and durable pavement surface. Their superior interlocking capability minimizes movement under heavy loads, making them ideal for both pedestrian and vehicular traffic areas.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1}>
              <div className="hex-overview-img"
                style={{ backgroundImage: 'url(/images/products/hexagonal-paving-blocks-2.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Key Benefits" title="Five reasons to choose hexagonal" />
          <div className="hex-benefits-grid">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="hex-benefit-card">
                  <div className="hex-benefit-icon">
                    {i === 0 && <Hexagon size={22} />}
                    {i === 1 && <Lock size={22} />}
                    {i === 2 && <Layers size={22} />}
                    {i === 3 && <Shield size={22} />}
                    {i === 4 && <Wrench size={22} />}
                  </div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Specifications" title="Technical data" align="left" />
          <SpecSheet specs={specs} />
        </div>
      </section>

      {/* Tech Info */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Technical Information" title="How hexagonal paving works" align="left" />
          <div className="hex-tech-layout">
            <ScrollReveal direction="left">
              <div className="hex-tech-text">
                <p>A specific type of interlocking paving system that features hexagon-shaped units. These blocks are designed to fit together seamlessly, creating a unique and visually appealing pavement surface.</p>
                <p>Manufactured in a hexagon shape, with six equal sides and angles, allowing them to interlock tightly with neighboring units. Individual units or blocks fit together tightly to form a durable and visually appealing surface. Suitable in commercial and domestic use such as pathways, gardens, footpaths, parking areas etc.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1}>
              <div className="hex-tech-img"
                style={{ backgroundImage: 'url(/images/products/hexagonal-paving-blocks-3.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Applications" title="Where hexagonal paving excels" align="left" />
          <ul className="hex-apps-list">
            {applications.map((app, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <li className="hex-app-item">
                  <span>{app}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Project Gallery" title="Hexagonal in the real world" align="left" />
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
        title="Ready to specify hexagonal paving?"
        description="Contact our team for technical specifications, pricing, and project-specific advice."
        secondaryText="View All Paving"
        secondaryLink="/products/paving-blocks"
      />
    </div>
    </>
  );
}
