import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import SiteCTA from '../components/SiteCTA';
import GalleryLightbox from '../components/GalleryLightbox';
import SpecSheet from '../components/SpecSheet';
import './Walling.css';

const specs = [
  { label: 'System', value: 'Terraforce® L Range' },
  { label: 'Finish', value: 'Rock-face (natural rugged texture)' },
  { label: 'Block type', value: 'Reversible hollow-core' },
  { label: 'Construction', value: 'Dry-stack, interlocking' },
  { label: 'Wall types', value: 'Gravity, reinforced, stabilised backfill' },
  { label: 'Wall geometry', value: 'Straight, curved, stepped, tiered' },
];

const techItems = [
  'Uses the same interlocking block geometry as the Standard Option.',
  'Textured rock-face finish on the exposed face for a natural look.',
  'When filled with soil, gravel, or concrete, blocks gain additional vertical interlock and mass.',
  'Suitable for walls up to 3m in gravity mode and higher with geosynthetic reinforcement.',
];

const apps = [
  'Retaining walls.', 'Garden terracing.', 'Slope stabilisation.',
  'Landscaping boundaries.', 'Erosion control works.', 'Infrastructure and civil retaining structures.',
];

const features = [
  'Dry-stack, interlocking retaining wall system.',
  'Rock-face finish for a natural rugged look.',
  'Hollow-core block form for reduced unit weight and optional infill.',
  'Suitable for curves and unrestricted wall angles.',
  'Can be used in gravity walls and reinforced wall systems.',
];

const related = [
  { name: 'L Range - Standard Option', path: '/products/walling/l-range-standard' },
  { name: 'Terralite', path: '/products/walling/terralite' },
  { name: 'Terrafix', path: '/products/walling/terrafix' },
  { name: 'Terracrete', path: '/products/walling/terracrete' },
];

export default function LRangeRockFace() {
  return (
    <>
      <SEO title="L-Range Rock Face" description="Terraforce® L Range Rock Face Option, a dry-stack interlocking retaining block with a rugged rock-face finish for natural-looking retaining walls." />
      <div className="page">
      <PageHero title="L Range - Rock Face Option" description="A concrete retaining block with a rock-face finish for a rugged, natural appearance in landscaping and erosion control." bgImage="/images/products/l-range-rock-face.webp" />

      <section className="section">
        <div className="container">
          <SectionTitle label="Overview" title="Rock-face retaining system" align="left" />
          <ScrollReveal>
            <div className="wall-sub-overview">
              <p>The Rock Face Option is part of the Terraforce retaining wall range and is intended for gravity and reinforced retaining wall applications. Its hollow-core, interlocking design supports stable construction while allowing curves and wall angles without restrictive nib-and-slot geometry.</p>
              <p>The rock-face finish gives the wall a more textured, natural look, making it suitable for visible landscaping works where appearance matters as much as performance.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Key Features" title="What makes it different" align="left" />
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
          <ScrollReveal><SpecSheet specs={specs} /></ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
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

      <section className="section">
        <div className="container">
          <SectionTitle label="Applications" title="Where rock-face blocks excel" align="left" />
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
          <SectionTitle label="Related Products" title="Explore more Terrafox® options" align="left" />
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
          <GalleryLightbox images={['/images/gallery/retaining-walls/retaining-walls-action-1.webp', '/images/gallery/retaining-walls/retaining-walls-action-2.webp', '/images/gallery/retaining-walls/retaining-walls-action.webp', '/images/products/l-range-rock-face.webp', '/images/products/l-range-standard.webp', '/images/products/retaining-walls.webp']} />
        </div>
      </section>

      <SiteCTA
        title="Need rock-face retaining blocks?"
        description="Contact our team for pricing, delivery, and technical information."
        secondaryText="View All Retaining Walls"
        secondaryLink="/products/walling/retaining-walls"
      />
    </div>
    </>
  );
}
