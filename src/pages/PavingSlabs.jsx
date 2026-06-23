import PageHero from '../components/PageHero';
import { ProductHighlightCard } from '../components/ProductHighlightCard';
import SEO from '../components/SEO';
import { SlabIcon } from '../components/CategoryIcons';
import productCategories from '../data/products';

export default function PavingSlabs() {
  const cat = productCategories.find(c => c.id === 'paving-slabs');
  return (
    <>
      <SEO title="Paving Slabs" description="Explore Bessblock's concrete paving slab range, textured, smooth, and large format slabs for pedestrian areas, patios, and commercial spaces." />
      <div className="page">
      <PageHero title="Paving Slabs" description={cat.description} bgImage="/images/hero/concrete-texture-1.webp" />
      <section className="section">
        <div className="container">
          <div className="subcategory-grid">
              {[
                { ...cat.subcategories[0], image: '/images/products/rectangular-paving-2.webp' },
                { ...cat.subcategories[1], image: '/images/products/rectangular-paving-3.webp' },
                { ...cat.subcategories[2], image: '/images/products/rectangular-paving-4.webp' },
              ].map(sub => (
              <ProductHighlightCard
                key={sub.id}
                categoryIcon={SlabIcon}
                category="Paving Slabs"
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
