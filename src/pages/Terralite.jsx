import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import GalleryLightbox from '../components/GalleryLightbox';
import ScrollReveal from '../components/ScrollReveal';
import SpecSheet from '../components/SpecSheet';
import SiteCTA from '../components/SiteCTA';
import './Walling.css';

const specs = [
  { label: 'System', value: 'Terraforce® Terralite' },
  { label: 'Finish', value: 'Rockface (standard)' },
  { label: 'Block type', value: 'Dry-stack interlocking' },
  { label: 'Application', value: 'Light landscaping, DIY' },
  { label: 'Wall types', value: 'Gravity, curved, stepped' },
  { label: 'Compatibility', value: 'Stairblock systems' },
];

const techItems = [
  'Smaller retaining block for light landscaping applications.',
  'Dry-stack interlocking system for straightforward installation.',
  'Rockface finish as the standard appearance.',
  'Suitable for curved walls, steps, and transitions from vertical to inclined walls.',
  'Can be used with Stairblock systems for added design flexibility.',
];

const apps = [
  'Flowerbed borders.', 'Tree rings.', 'Braai areas.',
  'Patio walls.', 'Driveway walls.', 'Garden landscaping and light retaining.',
];

const features = [
  'Smaller retaining block for DIY-friendly installation.',
  'Dry-stack interlocking system for mortar-free construction.',
  'Rockface finish for a natural textured appearance.',
  'Suitable for tight curves, stepped transitions, and compact layouts.',
  'Can be reversed to create steps and used with Stairblock units.',
];

const related = [
  { name: 'L Range - Standard Option', path: '/products/walling/l-range-standard' },
  { name: 'L Range - Rock Face Option', path: '/products/walling/l-range-rock-face' },
  { name: '4x4 Step Block', path: '/products/walling/4x4-step-block' },
  { name: 'Retaining Walls', path: '/products/walling/retaining-walls' },
];

export default function Terralite() {
  return (
    <>
      <SEO title="Terralite" description="Terraforce® Terralite, a compact dry-stack interlocking retaining block for DIY landscaping, garden walls, borders, and small retaining projects." />
      <div className="page">
      <PageHero title="Terralite" description="A smaller dry-stack interlocking retaining block for garden walls, borders, and DIY landscaping." bgImage="/images/products/terralite.webp" />

      <section className="section">
        <div className="container">
          <SectionTitle label="Overview" title="Compact retaining for landscaping" align="left" />
          <ScrollReveal>
            <div className="wall-sub-overview">
              <p>Terralite is a smaller landscaping retaining wall block designed for garden projects, light retaining, and DIY applications. Its compact size and interlocking dry-stack format make it easy to install and ideal for curved walls, borders, and stepped landscape features.</p>
              <p>Supplied largely in a rockface finish, Terralite delivers a natural, textured appearance that suits decorative garden settings as well as practical retaining needs. It can also be reversed to create steps and used in combination with Stairblock units for added design flexibility.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Key Features" title="Built for gardens and DIY" align="left" />
          <div className="wall-sub-benefits">
            {features.map((item, i) => (
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

      <section className="section">
        <div className="container">
          <SectionTitle label="Detailed Specifications" title="Technical data" align="left" />
          <SpecSheet specs={specs} columns={2} />
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Technical Information" title="How Terralite works" align="left" />
          <div className="wall-sub-tech">
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
          <SectionTitle label="Applications" title="Where Terralite is used" align="left" />
          <div className="wall-sub-apps">
            {apps.map((app, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div className="wall-sub-app">{app}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Related Products" title="Explore more Terraforce® options" align="left" />
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

      {/* Project Gallery */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Gallery" title="See it in action" align="left" />
          <GalleryLightbox images={['/images/gallery/retaining-walls/retaining-walls-action-1.webp', '/images/gallery/retaining-walls/retaining-walls-action-2.webp', '/images/gallery/retaining-walls/retaining-walls-action.webp', '/images/products/terralite.webp', '/images/products/terrafix.webp', '/images/products/terracrete.webp']} />
        </div>
      </section>

      <SiteCTA
        title="Need Terralite for your garden project?"
        description="Contact our team for pricing, delivery, and technical information."
        secondaryText="View All Retaining Walls"
        secondaryLink="/products/walling/retaining-walls"
      />
    </div>
    </>
  );
}
