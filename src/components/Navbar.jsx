import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
} from './NavigationMenu';
import ThemeToggle from './ThemeToggle';
import productCategories from '../data/products';
import './Navbar.css';

const aboutCards = [
  {
    to: '/about',
    title: 'Who We Are',
    desc: 'Learn about BCPL\'s heritage, mission, and position as East Africa\'s leading concrete block manufacturer.',
  },
  {
    to: '/about/manufacturing',
    title: 'Manufacturing & Quality',
    desc: 'Discover our Besser block-making system, mist-curing process, and rigorous QC standards.',
  },
  {
    to: '/about/leadership',
    title: 'Leadership',
    desc: 'Meet the experienced team driving BCPL\'s vision and operational excellence.',
  },
];

function AboutContent() {
  return (
    <div className="nm-dropdown-about">
      {aboutCards.map((card, i) => (
        <NavigationMenuLink key={i} asChild>
          <Link to={card.to} className="nav-about-card">
            <span className="nav-about-title">{card.title}</span>
            <p className="nav-about-desc">{card.desc}</p>
          </Link>
        </NavigationMenuLink>
      ))}
    </div>
  );
}

function ProductsContent() {
  const catImages = {
    'paving-blocks': '/images/products/interlocking-paving-1.jpg',
    'walling': '/images/products/hollow-blocks-1.jpg',
    'paving-slabs': '/images/products/interlocking-paving-2.jpg',
    'step-risers': '/images/products/rectangular-paving-1.jpg',
    'kerbs-edging': '/images/products/retaining-wall-1.jpg',
  };

  return (
    <div className="nm-dropdown-products">
      {productCategories.map(cat => (
        <div key={cat.id} className="nav-cat-card" style={{ '--cat-gradient': cat.imageGradient }}>
          <div
            className="nav-cat-image"
            style={{ backgroundImage: `url(${catImages[cat.id]})` }}
          >
            <div className="nav-cat-blur" />
          </div>
          <div className="nav-cat-body">
            <NavigationMenuLink asChild>
              <Link to={cat.path} className="nav-cat-title">{cat.name}</Link>
            </NavigationMenuLink>
            <p className="nav-cat-desc">{cat.description}</p>
          </div>
          <div className="nav-cat-subs">
            {cat.subcategories.slice(0, 4).map(sub => (
              <NavigationMenuLink key={sub.id} asChild>
                <Link to={sub.path} className="nav-cat-sub">{sub.name}</Link>
              </NavigationMenuLink>
            ))}
            {cat.subcategories.length > 4 && (
              <NavigationMenuLink asChild>
                <Link to={cat.path} className="nav-cat-sub nav-cat-all">View All &rarr;</Link>
              </NavigationMenuLink>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

const insightCards = [
  {
    to: '/insights',
    title: 'Insights',
    desc: 'Read articles, industry news, and technical deep-dives from the Bessblock team.',
  },
  {
    to: '/faqs',
    title: 'FAQs',
    desc: 'Find answers to common questions about our products, ordering, and technical specifications.',
  },
];

function InsightsContent() {
  return (
    <div className="nm-dropdown-insights">
      {insightCards.map((card, i) => (
        <NavigationMenuLink key={i} asChild>
          <Link to={card.to} className="nav-insight-card">
            <span className="nav-insight-title">{card.title}</span>
            <p className="nav-insight-desc">{card.desc}</p>
          </Link>
        </NavigationMenuLink>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Set --navbar-height for fixed-position dropdown to span full width
  useEffect(() => {
    if (navRef.current) {
      const h = navRef.current.offsetHeight;
      navRef.current.style.setProperty('--navbar-height', `${h}px`);
    }
  }, [scrolled]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo">
          <img src="/bessblocklogo.png" alt="Bessblock" className="navbar-logo-img" />
        </Link>

        <button
          className={`navbar-hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>

        <div className={`navbar-menu ${mobileOpen ? 'navbar-menu-open' : ''}`}>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/" className="nm-trigger">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>About BCPL</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <AboutContent />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ProductsContent />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/projects" className="nm-trigger">Projects Gallery</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Insights & FAQs</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <InsightsContent />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/contact" className="nm-trigger nav-cta-link">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>

            <NavigationMenuIndicator />
          </NavigationMenu>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
