import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedButton from '../components/AnimatedButton';
import SpecSheet from '../components/SpecSheet';
import './About.css';
import './Walling.css';

const specs = [
  { label: 'System', value: 'Terraforce® Terracrete' },
  { label: 'Block type', value: 'Cement stabilised backfill system' },
  { label: 'Wall types', value: 'Stabilised backfill, constrained sites' },
  { label: 'Construction', value: 'Dry-stack with cementitious backfill' },
];

const techItems = [
  'Used where space or site conditions make conventional geosynthetic reinforced walls impractical.',
  'Cement stabilised backfill creates a monolithic reinforced block mass.',
  'Ideal for constrained urban sites and limited-access locations.',
];

const apps = ['Constrained urban sites.', 'Infrastructure cut-and-fill.', 'Boundary walls with limited space.', 'Retaining walls where access restricts geogrid placement.'];

const related = [
  { name: 'L Range - Standard Option', path: '/products/walling/l-range-standard' },
  { name: 'Terrafix', path: '/products/walling/terrafix' },
  { name: 'L Range - Rock Face Option', path: '/products/walling/l-range-rock-face' },
  { name: 'Retaining Walls', path: '/products/walling/retaining-walls' },
];

export default function Terracrete() {
  return (
    <>
      <SEO title="Terracrete" description="Terraforce® Terracrete — a retaining wall solution for constrained sites using cement stabilised backfill where conventional reinforced wall construction is impractical." />
      <div className="page">
      <PageHero title="Terracrete" description="A Terraforce retaining wall solution designed for use with cement stabilised backfill in constrained site conditions where space or geometry limits conventional reinforced wall construction." bgImage="/images/products/retaining-wall-3.jpg" />

      <section className="section">
        <div className="container">
          <SectionTitle label="Overview" title="Solutions for constrained sites" align="left" />
          <ScrollReveal>
            <div className="wall-sub-overview">
              <p>Terracrete is used where space or site conditions make conventional geosynthetic reinforced walls impractical. Cement stabilised backfill creates a monolithic reinforced block mass, making it ideal for constrained urban sites and limited-access locations.</p>
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
          <SectionTitle label="Applications" title="Where Terracrete is used" align="left" />
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

      <section className="section section-blue">
        <div className="container">
          <div className="about-cta">
            <h2 className="about-cta-title" style={{ color: 'var(--color-white)' }}>Need Terracrete for a constrained site?</h2>
            <p className="about-cta-text" style={{ color: 'rgba(255,255,255,0.8)' }}>Contact our team for pricing, delivery, and technical information.</p>
            <div className="about-cta-actions">
              <AnimatedButton to="/contact" variant="yellow">Request a Quote</AnimatedButton>
              <AnimatedButton to="/products/walling/retaining-walls" variant="outline">View All Retaining Walls</AnimatedButton>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
