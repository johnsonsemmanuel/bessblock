import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Grid3x3, Home, PanelBottom, Ruler, Layers, MapPin, Mountain, ArrowUpDown, Truck, Warehouse, Factory, HardHat, Settings } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/Accordion';
import '../components/Accordion.css';
import './FAQs.css';

const faqData = [
  { category: 'Paving Blocks', icon: Grid3x3, questions: [
    { q: 'What are interlocking paving blocks used for?', a: 'Interlocking paving blocks are used for driveways, walkways, parking areas, yards, and other hard landscaping surfaces that need strength, durability, and a neat finish.' },
    { q: 'What thickness should I choose for paving blocks?', a: '60mm blocks are typically suitable for pedestrian areas, 80mm blocks are used for residential driveways and parking, and 100mm blocks are best for heavy-duty industrial or commercial use.' },
    { q: 'Are paving blocks easy to maintain?', a: 'Yes. They are easy to maintain because damaged units can be replaced individually without disturbing the surrounding pavement.' },
    { q: 'Do paving blocks allow drainage?', a: 'Yes. When installed with jointing sand, they allow water to drain through the joints more effectively than many rigid surfaces.' },
  ]},
  { category: 'Walling Blocks', icon: Home, questions: [
    { q: 'What are hollow concrete blocks commonly used for?', a: 'Hollow concrete blocks are commonly used for residential, commercial, and industrial wall construction.' },
    { q: 'What is the difference between hollow and solid concrete blocks?', a: 'Hollow blocks are commonly used for general wall construction, while solid blocks are denser and better suited to foundations and load-bearing walls.' },
    { q: 'Are concrete blocks suitable for load-bearing walls?', a: 'Yes. Depending on the block type and project design, concrete blocks can be used for both load-bearing and non-load-bearing walls.' },
    { q: 'Can concrete blocks be used in coastal or wet environments?', a: 'Yes. Solid concrete blocks are especially suitable where durability and resistance to moisture are important.' },
  ]},
  { category: 'Ceiling Blocks', icon: PanelBottom, questions: [
    { q: 'What are ceiling blocks used for?', a: 'Ceiling blocks are used in rib-and-block slab systems as non-structural fillers between reinforced concrete ribs or beams.' },
    { q: 'Are ceiling blocks structural?', a: 'No. They are non-structural filler units, while the beams and reinforcement provide the main structural support.' },
    { q: 'How are ceiling blocks installed?', a: 'They are placed between beams, followed by reinforcement mesh where specified and then a concrete topping is applied.' },
  ]},
  { category: 'Retaining Walls', icon: Mountain, questions: [
    { q: 'What are retaining wall blocks used for?', a: 'Retaining wall blocks are used to retain soil, stabilise slopes, create terraces, and support landscaped changes in level.' },
    { q: 'Do retaining wall blocks need drainage?', a: 'Yes. Proper drainage aggregate and backfill are important to help manage water pressure behind the wall.' },
    { q: 'Can retaining walls be reinforced?', a: 'Yes. Higher walls can be designed with geogrid reinforcement and engineering support where required.' },
  ]},
  { category: 'Kerbs and Edging', icon: Ruler, questions: [
    { q: 'What are kerbs used for?', a: 'Kerbs are used to define edges, separate traffic and pedestrian areas, protect road margins, and help control surface water.' },
    { q: 'Where are concrete kerbs typically installed?', a: 'They are commonly used on roads, pavements, parking areas, estates, and drainage channels.' },
    { q: 'Are kerbs strong enough for traffic areas?', a: 'Yes. Concrete kerbs are designed for durable edge restraint and impact resistance in traffic environments.' },
  ]},
  { category: 'Steps', icon: ArrowUpDown, questions: [
    { q: 'What are Heavy-Duty Step Risers used for?', a: 'Heavy-Duty Step Risers are used to create strong, neat step edges in landscaping and access projects.' },
    { q: 'Can step products be used in both homes and commercial spaces?', a: 'Yes. They are suitable for residential entrances, garden steps, terraces, and commercial access routes.' },
    { q: 'What other step products are available?', a: 'Related products include Mayfair Step Slabs, Mayfair Step Slabs with contrasting nosing, and Granite Step Unit.' },
  ]},
  { category: 'Driveways and Parking', icon: Warehouse, questions: [
    { q: 'What is the best product for a durable driveway?', a: 'Interlocking paving blocks are a strong option for driveways because they distribute loads well and can be selected in the right thickness for the intended traffic.' },
    { q: 'Which block thickness should I use for parking areas?', a: '80mm is generally recommended for residential parking, while 100mm is better for heavier traffic applications.' },
  ]},
  { category: 'Paths and Walkways', icon: MapPin, questions: [
    { q: 'What is best for pedestrian walkways?', a: '60mm paving blocks are typically suitable for pedestrian walkways and domestic paths.' },
    { q: 'Can block paving be used around gardens and homes?', a: 'Yes. Block paving is widely used for paths, gardens, patios, and other residential landscaping areas.' },
  ]},
  { category: 'Walling and Foundations', icon: Layers, questions: [
    { q: 'What should I use for boundary walls?', a: 'Hollow concrete blocks are commonly used for general wall construction, while solid blocks may be preferred where greater density or load-bearing performance is needed.' },
    { q: 'What should I use for foundations or load-bearing walls?', a: 'Solid concrete blocks are the better option when high durability and load-bearing capacity are required.' },
  ]},
  { category: 'Slopes and Level Changes', icon: Mountain, questions: [
    { q: 'How do I stabilise a sloping site?', a: 'Retaining wall blocks are designed for slope stabilisation, terracing, and soil retention.' },
    { q: 'Can a retaining wall be curved?', a: 'Yes. Interlocking retaining wall systems can be used to form curved layouts where the design allows.' },
  ]},
  { category: 'Access and Stairs', icon: ArrowUpDown, questions: [
    { q: 'What is the best option for outdoor steps?', a: 'Heavy-Duty Step Risers are a practical choice for creating durable step edges in landscape and access applications.' },
    { q: 'How do I create a matching step finish?', a: 'Pair the riser with compatible tread units such as step slabs or granite step units for a more complete finish.' },
  ]},
  { category: 'Orders, Delivery & Support', icon: Truck, questions: [
    { q: 'What are your standard lead times?', a: 'Standard lead times range from 3 to 7 working days depending on product type and quantity. Bulk orders may require additional lead time. We recommend placing orders a minimum of two weeks before your required delivery date.' },
    { q: 'Do you offer technical support for product selection?', a: 'Yes. Our technical team can assist with product selection based on your project requirements, including load specifications, environmental conditions, and installation methods.' },
    { q: 'What is your minimum order quantity?', a: 'Minimum order quantities vary by product. Standard blocks and paving units typically have a minimum of 500 units. Contact our sales team for specific product MOQs.' },
    { q: 'Do you provide delivery across the region?', a: 'We deliver to projects within a 200km radius of our manufacturing facility. For locations beyond this range, please contact us to discuss logistics arrangements.' },
    { q: 'Can you supply samples for testing?', a: 'Yes. Product samples can be provided for independent testing. Sample requests should be made through our technical team with at least 48 hours notice.' },
    { q: 'What quality certificates do you provide?', a: 'Each batch is supplied with a certificate of conformity showing compressive strength results. Additional test certificates are available on request.' },
    { q: 'Do you offer custom block sizes?', a: 'Custom sizes can be produced for large-volume orders subject to mould availability and minimum production quantities. Contact our technical team to discuss requirements.' },
    { q: 'What payment terms are available?', a: 'Standard payment terms are 30 days from invoice for approved credit accounts. New customers may be required to provide a deposit or letter of credit.' },
  ]},
];

export default function FAQs() {
  const [openCategory, setOpenCategory] = useState(null);

  return (
    <>
      <SEO title="FAQs" description="Frequently asked questions about Bessblock concrete products, ordering process, delivery, and technical specifications." />
      <div className="page">
      <PageHero title="FAQs" description="Frequently asked questions about our products, ordering process, and delivery." bgImage="/images/hero/concrete-texture-1.webp" />

      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <Factory size={280} className="decor-icon decor-icon-tl" />
        <HardHat size={200} className="decor-icon decor-icon-br" />
        <Settings size={160} className="decor-icon decor-icon-tr" />
        <div className="container">
          <div className="faqs-grid">
            {faqData.map((group, gi) => {
              const Icon = group.icon;
              const isOpen = openCategory === gi;
              return (
                <motion.div
                  key={gi}
                  className={`faq-card ${isOpen ? 'faq-card-open' : ''}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: gi * 0.04 }}
                >
                  <button
                    className="faq-card-header"
                    onClick={() => setOpenCategory(isOpen ? null : gi)}
                  >
                    <span className="faq-card-icon">
                      <Icon size={16} />
                    </span>
                    <span style={{ flex: 1 }}>{group.category}</span>
                  </button>
                  {isOpen && (
                    <div className="faq-card-body">
                      <Accordion type="single" collapsible>
                        {group.questions.map((faq, fi) => (
                          <AccordionItem key={fi} value={`q-${fi}`}>
                            <AccordionTrigger>{faq.q}</AccordionTrigger>
                            <AccordionContent>{faq.a}</AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="section-light">
          <div className="container">
            <motion.div
              className="faqs-cta"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="faqs-cta-title">Still Have Questions?</h2>
              <p className="faqs-cta-desc">
                Our team is ready to help with product specifications, technical advice, or project support.
              </p>
              <Link to="/contact" className="faqs-cta-btn">Contact Us</Link>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>
    </div>
    </>
  );
}
