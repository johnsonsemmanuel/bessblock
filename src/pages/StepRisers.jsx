import PageHero from '../components/PageHero';
import { ProductHighlightCard } from '../components/ProductHighlightCard';
import SEO from '../components/SEO';
import { StepIcon } from '../components/CategoryIcons';
import productCategories from '../data/products';

export default function StepRisers() {
  const cat = productCategories.find(c => c.id === 'step-risers');
  return (
    <>
      <SEO title="Step Risers" description="Explore Bessblock's concrete step riser range, standard step risers, wide tread steps, and bullnose steps for durable outdoor stair construction." />
      <div className="page">
      <PageHero title="Step Risers" description={cat.description} bgImage="/images/hero/concrete-texture-2.jpg" />
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-6)' }}>
              {[
                { ...cat.subcategories[0], image: '/images/products/rectangular-paving-1.jpg' },
                { ...cat.subcategories[1], image: '/images/products/rectangular-paving-2.jpg' },
                { ...cat.subcategories[2], image: '/images/products/rectangular-paving-3.jpg' },
              ].map(sub => (
              <ProductHighlightCard
                key={sub.id}
                categoryIcon={StepIcon}
                category="Step Risers"
                title={sub.name}
                description={sub.description}
                to={sub.path}
                imageSrc={sub.image}
                imageAlt={sub.name}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
