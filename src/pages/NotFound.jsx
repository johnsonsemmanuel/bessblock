import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import './NotFound.css';

export default function NotFound() {
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
          <div className="not-found-actions">
            <Link to="/" className="not-found-btn not-found-btn-primary">
              <Home size={18} />
              Go Home
            </Link>
            <button
              className="not-found-btn not-found-btn-secondary"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
