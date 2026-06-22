
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import productCategories from '../data/products';
import FlickeringGrid from './FlickeringGrid';
import './Footer.css';

const footerLinks = [
  {
    title: 'Products',
    links: productCategories.map(cat => ({
      title: cat.name,
      url: cat.path,
    })),
  },
  {
    title: 'Company',
    links: [
      { title: 'Who We Are', url: '/about' },
      { title: 'Manufacturing & Quality', url: '/about/manufacturing' },
      { title: 'Leadership', url: '/about/leadership' },
      { title: 'Projects Gallery', url: '/projects' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { title: 'Insights', url: '/insights' },
      { title: 'FAQs', url: '/faqs' },
      { title: 'Contact', url: '/contact' },
      { title: 'Privacy Policy', url: '/privacy-policy' },
    ],
  },
];

function SocialIcon({ name }) {
  const svgs = {
    linkedin: <path d="M4 9h2v6H4V9zm1-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM9 9h2v1h.02a2.2 2.2 0 011.98-1c2.12 0 2.5 1.2 2.5 3.5V15h-2v-2.5c0-1.2-.3-1.5-1-1.5s-1.5.6-1.5 1.5V15H9V9z" fill="currentColor"/>,
    twitter: <path d="M15.2 3H17.7L12.2 9.2L18.7 17.5H13.6L9.6 12.4L5 17.5H2.5L8.3 10.9L2 3H7.3L10.9 7.7L15.2 3ZM14.3 16H15.7L5.7 4.4H4.2L14.3 16Z" fill="currentColor"/>,
    facebook: <path d="M16 8.05C16 4.26 12.87 1.1 9 1.1S2 4.26 2 8.05c0 3.47 2.56 6.34 5.9 6.85v-4.84H6.18V8.05h1.72V6.28c0-1.7 1-2.64 2.55-2.64.74 0 1.52.13 1.52.13v1.67h-.85c-.84 0-1.1.52-1.1 1.06v1.27h1.88l-.3 2.01h-1.58v4.84c3.34-.5 5.9-3.38 5.9-6.85z" fill="currentColor"/>,
    instagram: <path d="M10 2.16c2.67 0 3 .01 4.05.06 1.46.06 2.24.3 2.77.5.7.26 1.2.57 1.73 1.1.52.52.83 1.02 1.1 1.72.2.53.44 1.31.5 2.77.05 1.05.06 1.38.06 4.05 0 2.67-.01 3-.06 4.05-.06 1.46-.3 2.24-.5 2.77a4.64 4.64 0 01-2.83 2.83c-.53.2-1.31.44-2.77.5-1.05.05-1.38.06-4.05.06-2.67 0-3-.01-4.05-.06-1.46-.06-2.24-.3-2.77-.5a4.64 4.64 0 01-2.83-2.83c-.2-.53-.44-1.31-.5-2.77-.05-1.05-.06-1.38-.06-4.05 0-2.67.01-3 .06-4.05.06-1.46.3-2.24.5-2.77.26-.7.57-1.2 1.1-1.73A4.71 4.71 0 013.18 2.7c.53-.2 1.31-.44 2.77-.5C7 2.16 7.33 2.16 10 2.16zM10 0c-2.72 0-3.06.01-4.12.06-1.54.07-2.59.32-3.51.68A6.78 6.78 0 00.5 2.46 6.78 6.78 0 00.06 5.95 82.7 82.7 0 000 10c0 2.72.01 3.06.06 4.12.07 1.54.32 2.59.68 3.51A6.79 6.79 0 002.46 19.5a6.78 6.78 0 003.5 1.44c1.05.05 1.4.06 4.12.06 2.72 0 3.06-.01 4.12-.06 1.54-.07 2.59-.32 3.51-.68a6.79 6.79 0 001.87-1.23 6.78 6.78 0 001.44-3.5c.05-1.05.06-1.4.06-4.1 0-2.72-.01-3.06-.06-4.12-.07-1.54-.32-2.59-.68-3.51A6.51 6.51 0 0017.5.5 6.78 6.78 0 0014.05.06C13 .01 12.66 0 9.94 0H10zm0 4.86a5.14 5.14 0 100 10.28 5.14 5.14 0 000-10.28zm0 8.48a3.34 3.34 0 110-6.68 3.34 3.34 0 010 6.68zm5.19-7.5a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" fill="currentColor"/>,
  };

  const urls = { linkedin: 'https://linkedin.com/company/bessblock', twitter: 'https://twitter.com/bessblock', facebook: 'https://facebook.com/bessblock', instagram: 'https://instagram.com/bessblock' };
  return (
    <a href={urls[name] || '#'} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label={name}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        {svgs[name]}
      </svg>
    </a>
  );
}

function LogoIcon() {
  return <img src="/bessblocklogo.png" alt="Bessblock" className="footer-logo-img" />;
}

export default function Footer() {
  const [tablet, setTablet] = useState(false);

  useEffect(() => {
    const check = () => setTablet(window.innerWidth <= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-section">
            <Link to="/" className="footer-logo-link">
              <LogoIcon />
              <span className="footer-logo-text">Bessblock</span>
            </Link>
            <p className="footer-description">
              Premium concrete block manufacturing for infrastructure and institutional projects.
            </p>
            <div className="footer-badges">
              <SocialIcon name="linkedin" />
              <SocialIcon name="twitter" />
              <SocialIcon name="facebook" />
              <SocialIcon name="instagram" />
            </div>
          </div>
          <div className="footer-links-section">
            {footerLinks.map((column, i) => (
              <ul key={i} className="footer-link-column">
                <li className="footer-link-title">{column.title}</li>
                {column.links.map((link, j) => (
                  <li key={j} className="footer-link-item">
                    <Link to={link.url} className="footer-link">
                      <span>{link.title}</span>
                      <ChevronRight size={14} className="footer-link-arrow" />
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-grid-area">
        <FlickeringGrid
          text={tablet ? 'BESSBLOCK' : 'PRECISION BLOCK MANUFACTURING'}
          fontSize={tablet ? 70 : 90}
          className="footer-grid-canvas"
          squareSize={2}
          gridGap={tablet ? 2 : 3}
          color="#6B7280"
          maxOpacity={0.3}
          flickerChance={0.1}
        />
      </div>
    </footer>
  );
}
