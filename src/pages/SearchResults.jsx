import { useSearchParams, Link } from 'react-router-dom';
import { Search, Package, BookOpen, Grid3X3, FileText } from 'lucide-react';
import { performSearch, searchIndex } from '../lib/search';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import Breadcrumbs from '../components/Breadcrumbs';
import './SearchResults.css';

const iconMap = {
  category: Grid3X3,
  product: Package,
  blog: BookOpen,
};

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const items = query ? performSearch(query, searchIndex()) : [];

  const handleSearch = (e) => {
    e.preventDefault();
    const q = e.target.q.value.trim();
    if (q) setSearchParams({ q });
  };

  return (
    <>
      <SEO title={query ? `Search: ${query}` : 'Search'} description="Search results for Bessblock products, blog posts, and information." />
      <div className="page">
      <div className="container" style={{ paddingTop: 'var(--spacing-16)', paddingBottom: 'var(--spacing-16)' }}>
        <Breadcrumbs path="/search" current={query || 'Search'} />

        <SectionTitle
          label="Search"
          title={query ? `Results for "${query}"` : 'Search the site'}
          align="left"
        />

        <form onSubmit={handleSearch} className="sr-form">
          <div className="sr-search-wrap">
            <Search size={18} className="sr-search-icon" />
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="Search products, blog posts, and more..."
              aria-label="Search"
              className="sr-input"
              autoFocus
            />
          </div>
        </form>

        {query && (
          <p className="sr-count">{items.length} result{items.length !== 1 ? 's' : ''} found</p>
        )}

        {query && items.length === 0 && (
          <div className="sr-empty">
            <FileText size={48} className="sr-empty-icon" />
            <h3 className="sr-empty-title">No results found</h3>
            <p className="sr-empty-desc">
              We couldn't find anything matching "{query}". Try a different search term or browse our product categories.
            </p>
            <div className="sr-empty-links">
              <Link to="/products" className="sr-empty-link">Browse Products</Link>
              <Link to="/insights/blog" className="sr-empty-link">Read Blog</Link>
              <Link to="/faqs" className="sr-empty-link">View FAQs</Link>
            </div>
          </div>
        )}

        {items.length > 0 && (
          <div className="sr-results">
            {items.map((item, i) => {
              const Icon = iconMap[item.type] || FileText;
              return (
                <Link key={i} to={item.path} className="sr-card">
                  <div className="sr-card-icon">
                    <Icon size={20} />
                  </div>
                  <div className="sr-card-body">
                    <span className="sr-card-type">{item.type}</span>
                    <h3 className="sr-card-title">{item.title}</h3>
                    <p className="sr-card-desc">{item.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {!query && (
          <div className="sr-empty">
            <Search size={48} className="sr-empty-icon" />
            <h3 className="sr-empty-title">Search our products and content</h3>
            <p className="sr-empty-desc">
              Enter a search term above to find products, blog posts, and information across the Bessblock website.
            </p>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
