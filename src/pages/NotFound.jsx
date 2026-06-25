import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Home, ArrowLeft, Search, ArrowRight, Package, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import AnimatedButton from '../components/AnimatedButton';
import './NotFound.css';

const popularLinks = [
  { to: '/products', label: 'All Products', icon: Package },
  { to: '/products/paving-blocks', label: 'Paving Blocks', icon: Package },
  { to: '/products/walling', label: 'Walling', icon: Package },
  { to: '/projects', label: 'Project Gallery', icon: FileText },
  { to: '/faqs', label: 'FAQs', icon: FileText },
  { to: '/contact', label: 'Contact Us', icon: FileText },
];

export default function NotFound() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist or has been moved." />
      <div className="page not-found-page">
      <div className="not-found-bg" />
      <div className="not-found-overlay" />

      <div className="container not-found-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="not-found-code">404</span>
          <h1 className="not-found-title">Page Not Found</h1>
          <p className="not-found-desc">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
          </p>

          <form className="not-found-search" onSubmit={handleSearch}>
            <Search size={16} className="not-found-search-icon" />
            <input
              type="text"
              placeholder="Search products, articles..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="not-found-search-input"
              aria-label="Search"
            />
            <button type="submit" className="not-found-search-btn" aria-label="Search">
              <ArrowRight size={16} />
            </button>
          </form>

          <div className="not-found-links">
            <span className="not-found-links-label">Popular pages</span>
            <div className="not-found-links-grid">
              {popularLinks.map(link => (
                <Link key={link.to} to={link.to} className="not-found-link">
                  <link.icon size={14} />
                  <span>{link.label}</span>
                  <ArrowRight size={12} className="not-found-link-arrow" />
                </Link>
              ))}
            </div>
          </div>

          <div className="not-found-actions">
            <AnimatedButton to="/" variant="primary">Go Home</AnimatedButton>
            <button
              className="abtn abtn-outline abtn-md"
              onClick={() => window.history.back()}
            >
              <span className="abtn-text">Go Back</span>
              <span className="abtn-icon"><ArrowRight size={16} /></span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
