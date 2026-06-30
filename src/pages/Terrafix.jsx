import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import GalleryLightbox from '../components/GalleryLightbox';
import ScrollReveal from '../components/ScrollReveal';
import SiteCTA from '../components/SiteCTA';
import SpecSheet from '../components/SpecSheet';
import './Walling.css';

const specs = [
  { label: 'System', value: 'Terraforce® Terrafix' },
  { label: 'Block type', value: 'Reinforced wall system block' },
  { label: 'Wall types', value: 'Geosynthetic reinforced' },
  { label: 'Construction', value: 'Dry-stack with geogrid layers' },
];

const techItems = [
  'Engineered for mechanically stabilised earth (MSE) wall construction.',
  'Geogrid layers placed between block courses for reinforced soil mass.',
  'Enables taller retaining wall structures with geosynthetic reinforcement.',
];

const apps = ['Tall retaining walls.', 'Highway embankments.', 'Commercial site terracing.', 'Infrastructure slope stabilisation.'];

const related = [
  { name: 'L Range - Standard Option', path: '/products/walling/l-range-standard' },
  { name: 'L Range - Rock Face Option', path: '/products/walling/l-range-rock-face' },
  { name: 'Terracrete', path: '/products/walling/terracrete' },
  { name: 'Retaining Walls', path: '/products/walling/retaining-walls' },
];

export default function Terrafix() {
  return (
    <>
      <SEO title="Terrafix" description="Terraforce® Terrafix, a retaining wall block designed for geosynthetic reinforced segmental retaining wall systems requiring higher wall heights." />
      <div className="page">
      <PageHero title="Terrafix" description="A Terraforce retaining wall block designed for geosynthetic reinforced segmental retaining wall systems where higher wall heights and additional reinforcement are required." bgImage="/images/products/terrafix.webp" />

      <section className="section">
        <div className="container">
          <SectionTitle label="Overview" title="Reinforced wall solutions" align="left" />
          <ScrollReveal>
            <div className="wall-sub-overview">
              <p>Terrafix is engineered for mechanically stabilised earth (MSE) wall construction, where geogrid layers are placed between block courses to create reinforced soil mass. This system enables taller retaining walls while maintaining the aesthetic and practical benefits of the Terraforce block system.</p>
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
          <SectionTitle label="Applications" title="Where Terrafix is used" align="left" />
          <div className="wall-sub-apps">
            {apps.map((app, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div className="wall-sub-app">{app}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
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
          <SectionTitle label="Project Gallery" title="See it in action" align="left" />
          <GalleryLightbox images={['/images/products/terrafix.webp', '/images/products/terracrete.webp', '/images/products/terralite.webp']} />
        </div>
      </section>

      <SiteCTA
        title="Need Terrafix for a reinforced wall project?"
        description="Contact our team for pricing, delivery, and technical information."
        secondaryText="View All Retaining Walls"
        secondaryLink="/products/walling/retaining-walls"
      />
    </div>
    </>
  );
}
