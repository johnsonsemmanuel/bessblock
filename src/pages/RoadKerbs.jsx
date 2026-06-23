import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import SiteCTA from '../components/SiteCTA';
import SpecSheet from '../components/SpecSheet';
import './Kerbs.css';

const specs = [
  { label: 'Product type', value: 'Precast concrete road kerb.' },
  { label: 'Typical length', value: '1,000mm.' },
  { label: 'Common size range', value: '350mm x 150mm, depending on profile.' },
  { label: 'Material', value: 'Cement, graded aggregates, and water.' },
  { label: 'Finish', value: 'Standard concrete grey.' },
  { label: 'Typical use', value: 'Roads, highways, estates, and parking areas.' },
];

const techItems = [
  'Road kerbs are installed on a concrete bed and are usually supported with rear haunching to improve stability.',
  'They are designed to resist traffic impact and edge movement, which makes them suitable for roads and other areas exposed to repeated loading.',
  'The kerb profile can also help with surface water management and the controlled transition between paved areas.',
  'Correct setting-out, line, and level are essential because road kerbs contribute both to structural performance and to the final visual appearance of the project.',
];

const apps = ['Road edges.', 'Carriageways.', 'Estate roads.', 'Parking areas.', 'Pavement restraint.', 'Traffic separation zones.', 'Access roads.', 'Highway-related works.'];

const installation = [
  'Lay on a properly prepared concrete bed.',
  'Set the kerbs accurately to line and level.',
  'Use rear haunching or backing concrete where required.',
  'Ensure joints are consistent and properly finished.',
  'Protect the units until the bedding and backing have cured.',
  'Match the kerb profile to the road design and loading conditions.',
];

const benefits = [
  'Provides strong edge restraint for road and pavement construction.',
  'Helps separate vehicle and pedestrian zones.',
  'Improves the durability of adjacent pavement edges.',
  'Suitable for high-traffic and long-life applications.',
  'Supports drainage control when combined with the correct profile.',
  'Creates a neat and professional road finish.',
];

const related = [
  { name: 'Demarcation Kerbs', path: '/products/kerbs-edging/demarcation-kerbs' },
  { name: 'Garden Kerbs', path: '/products/kerbs-edging/garden-kerbs' },
  { name: 'Barrier Kerbs', path: '/products/kerbs-edging/barrier-kerbs' },
  { name: 'Gutter Kerbs', path: '/products/kerbs-edging/gutter-kerbs' },
  { name: 'Slotted Kerbs', path: '/products/kerbs-edging/slotted-kerbs' },
];

export default function RoadKerbs() {
  return (
    <>
      <SEO title="Road Kerbs" description="Bessblock road kerbs provide strong edge restraint and a clean, durable finish for roads, parking areas, pavements, and traffic-bearing surfaces." />
      <div className="page">
      <PageHero title="Road Kerbs" description="Bessblock Road Kerbs are designed to provide strong edge restraint and a clean, durable finish for roads, parking areas, pavements, and other traffic-bearing surfaces. They help hold the pavement structure in place while defining the road edge clearly and professionally." bgImage="/images/hero/concrete-texture-2.webp" />

      <section className="section">
        <div className="container">
          <SectionTitle label="Overview" title="The standard for road edge restraint" align="left" />
          <ScrollReveal>
            <div className="kerb-sub-tech">
              <p>Road kerbs are heavy-duty concrete edging units used to separate carriageways from pedestrian areas and to protect the edges of paved surfaces. They are a standard component in highways, estates, commercial developments, and access roads because they help maintain line, level, and durability over time.</p>
              <p>Road Kerbs are the most robust kerb option in the range. The product is suitable where traffic loads, repeated impact, and long-term edge stability are important.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Key Benefits" title="Built for traffic and durability" align="left" />
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
          <SectionTitle label="Technical Information" title="Performance characteristics" align="left" />
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
          <SectionTitle label="Applications" title="Where road kerbs are used" align="left" />
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

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Related Products" title="Explore more kerb options" align="left" />
          <div className="kerb-sub-related">
            {related.map(r => (
              <Link key={r.name} to={r.path} className="product-related-link">
                <span>{r.name}</span>
                <ArrowRight size={16} className="product-related-arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteCTA
        title="Need road kerbs for your project?"
        description="Contact our team for pricing, delivery, and technical information."
        secondaryText="View All Kerbs"
        secondaryLink="/products/kerbs-edging"
      />
    </div>
    </>
  );
}
