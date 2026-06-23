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
  { label: 'Product type', value: 'Precast concrete barrier kerb.' },
  { label: 'Profile', value: 'High containment / traffic restraint profile.' },
  { label: 'Material', value: 'Hydraulically pressed or precast concrete.' },
  { label: 'Standard reference', value: 'Manufactured in line with BS EN 1340.' },
  { label: 'Typical use', value: 'Roads, junctions, parking edges, and traffic-sensitive layouts.' },
  { label: 'Finish', value: 'Standard concrete grey unless project-specific finishes are requested.' },
];

const techItems = [
  'Barrier kerbs are generally specified where a stronger kerb line is needed to resist vehicle overrun or to improve traffic discipline.',
  'British Standard kerb products are durable, precision-manufactured concrete kerb systems for highway use, with consistent long-term performance when installed correctly.',
  'Barrier Kerbs are suitable for projects where safety, containment, and durability are more important than decorative appearance alone.',
];

const apps = ['Roads and highways.', 'Junction protection.', 'Parking area containment.', 'Commercial access roads.', 'Traffic separation zones.', 'Edges requiring vehicle restraint.', 'Public realm schemes with higher safety needs.', 'Boundary protection around paved areas.'];

const installation = [
  'Excavate the kerb trench to the correct line and level.',
  'Lay units on a stable concrete bed.',
  'Set kerbs carefully to maintain containment performance.',
  'Use rear haunching or backing concrete where needed.',
  'Align joints and profiles consistently along the full run.',
  'Match the kerb type to the expected traffic and site conditions.',
];

const benefits = [
  'Provides strong physical separation between vehicles and adjacent spaces.',
  'Helps improve safety in high-traffic or higher-risk locations.',
  'Suitable for containment and traffic management applications.',
  'More robust than garden or simple demarcation kerbs.',
  'Supports long-term durability in highways and public-facing schemes.',
  'Can be integrated with other kerb units for a consistent streetscape finish.',
];

const related = [
  { name: 'Road Kerbs', path: '/products/kerbs-edging/road-kerbs' },
  { name: 'Demarcation Kerbs', path: '/products/kerbs-edging/demarcation-kerbs' },
  { name: 'Garden Kerbs', path: '/products/kerbs-edging/garden-kerbs' },
  { name: 'Gutter Kerbs', path: '/products/kerbs-edging/gutter-kerbs' },
  { name: 'Slotted Kerbs', path: '/products/kerbs-edging/slotted-kerbs' },
];

export default function BarrierKerbs() {
  return (
    <>
      <SEO title="Barrier Kerbs" description="Bessblock barrier kerbs provide strong physical separation between vehicles and pedestrian areas for improved safety in high-traffic locations." />
      <div className="page">
      <PageHero title="Barrier Kerbs" description="Bessblock Barrier Kerbs are designed to provide a stronger, more protective edge than standard edging or low-profile kerbs. They are used where vehicles need clearer physical separation from pedestrian areas, structures, or sensitive paved zones." bgImage="/images/hero/concrete-texture-1.webp" />

      <section className="section">
        <div className="container">
          <SectionTitle label="Overview" title="Stronger separation where it matters" align="left" />
          <ScrollReveal>
            <div className="kerb-sub-tech">
              <p>Barrier kerbs are heavy-duty concrete kerb units used to create a firmer boundary between traffic and adjoining surfaces. Their role is not just visual; they also help reduce vehicle encroachment and improve safety in higher-risk or higher-load locations.</p>
              <p>This is the containment-focused option in the kerb range. They are especially relevant for roads, junctions, busy access routes, and public realm schemes where a more robust interface is needed between carriageway and adjacent areas.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Key Benefits" title="Containment and safety" align="left" />
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
          <SectionTitle label="Applications" title="Where barrier kerbs are used" align="left" />
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
        title="Need barrier kerbs for higher safety?"
        description="Contact our team for pricing, delivery, and technical information."
        secondaryText="View All Kerbs"
        secondaryLink="/products/kerbs-edging"
      />
    </div>
    </>
  );
}
