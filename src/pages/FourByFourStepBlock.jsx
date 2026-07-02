import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import SiteCTA from '../components/SiteCTA';
import GalleryLightbox from '../components/GalleryLightbox';
import SpecSheet from '../components/SpecSheet';
import './Walling.css';

const specs = [
  { label: 'System', value: 'Terraforce® 4x4 Step Block' },
  { label: 'Block type', value: 'Interlocking step unit' },
  { label: 'Construction', value: 'Dry-stack' },
  { label: 'Use', value: 'Stepped transitions, tiered walls' },
];

const techItems = [
  'Designed to integrate seamlessly with the L Range system.',
  'Allows wall elevation changes without cutting or special detailing.',
  'Ideal for tiered retaining wall layouts and stepped transitions.',
];

const apps = ['Stepped retaining walls.', 'Tiered garden terracing.', 'Elevation transitions in landscape walls.'];

const related = [
  { name: 'L Range - Standard Option', path: '/products/walling/l-range-standard' },
  { name: 'L Range - Rock Face Option', path: '/products/walling/l-range-rock-face' },
  { name: 'Terralite', path: '/products/walling/terralite' },
  { name: 'Retaining Walls', path: '/products/walling/retaining-walls' },
];

export default function FourByFourStepBlock() {
  return (
    <>
      <SEO title="4x4 Step Block" description="Terraforce® 4x4 Step Block for creating stepped transitions and tiered wall layouts within retaining wall systems without cutting or special detailing." />
      <div className="page">
      <PageHero title="4x4 Step Block" description="A Terraforce retaining wall component for stepped transitions and tiered wall layouts within retaining wall systems." bgImage="/images/products/4x4-step-block.webp" />

      <section className="section">
        <div className="container">
          <SectionTitle label="Overview" title="Step transitions made simple" align="left" />
          <ScrollReveal>
            <div className="wall-sub-overview">
              <p>The 4x4 Step Block enables wall elevation changes without cutting or special detailing, integrating seamlessly with the L Range system for tiered retaining wall layouts.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Specifications" title="Technical data" align="left" />
          <ScrollReveal><SpecSheet specs={specs} /></ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle label="Technical Information" title="How it works" align="left" />
          <div className="wall-sub-tech">
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
          <SectionTitle label="Applications" title="Where it's used" align="left" />
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
          <SectionTitle label="Gallery" title="Products and Real World" align="left" />
          <GalleryLightbox images={['/images/gallery/retaining-walls/retaining-walls-action-1.webp', '/images/gallery/retaining-walls/retaining-walls-action-2.webp', '/images/gallery/retaining-walls/retaining-walls-action.webp', '/images/products/4x4-step-block.webp', '/images/products/l-range-standard.webp', '/images/products/retaining-walls.webp']} />
        </div>
      </section>

      <SiteCTA
        title="Need step blocks for your retaining wall?"
        description="Contact our team for pricing, delivery, and technical information."
        secondaryText="View All Retaining Walls"
        secondaryLink="/products/walling/retaining-walls"
      />
    </div>
    </>
  );
}
