import { useState, useEffect, useRef, useCallback } from 'react';
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
import SearchBar from './SearchBar';
import AnimatedButton from './AnimatedButton';
import productCategories from '../data/products';
import './Navbar.css';

const aboutCards = [
  {
    to: '/about',
    title: 'Who We Are',
    desc: 'Learn about Bessblock\'s heritage, mission, and position as a leading concrete block manufacturer in Ghana.',
  },
  {
    to: '/about/manufacturing',
    title: 'Manufacturing & Quality',
    desc: 'Discover our Besser block-making system, mist-curing process, and rigorous QC standards.',
  },
  {
    to: '/about/leadership',
    title: 'Leadership',
    desc: 'Meet the experienced team driving Bessblock\'s vision and operational excellence.',
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
  return (
    <div className="nm-dropdown-products">
      {productCategories.map(cat => (
        <div key={cat.id} className="nav-cat-card">
          <div className="nav-cat-body">
            <NavigationMenuLink asChild>
              <Link to={cat.path} className="nav-cat-title">{cat.name}</Link>
            </NavigationMenuLink>
            <p className="nav-cat-desc">{cat.description}</p>
          </div>
          <div className="nav-cat-subs">
            {cat.subcategories.map(sub => (
              <NavigationMenuLink key={sub.id} asChild>
                <Link to={sub.path} className="nav-cat-sub">{sub.name}</Link>
              </NavigationMenuLink>
            ))}
            <NavigationMenuLink asChild>
              <Link to={cat.path} className="nav-cat-sub nav-cat-all">View All &rarr;</Link>
            </NavigationMenuLink>
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

function isActive(pathname, to) {
  if (to === '/') return pathname === '/';
  return pathname.startsWith(to);
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);

  const location = useLocation();

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  const toggleMobile = useCallback(() => {
    setMobileOpen(prev => !prev);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const recalcNavHeight = useCallback(() => {
    if (navRef.current) {
      const h = navRef.current.offsetHeight;
      navRef.current.style.setProperty('--navbar-height', `${h}px`);
    }
  }, []);

  useEffect(() => {
    recalcNavHeight();
    window.addEventListener('resize', recalcNavHeight);
    return () => window.removeEventListener('resize', recalcNavHeight);
  }, [recalcNavHeight]);

  useEffect(() => {
    if (scrolled) recalcNavHeight();
  }, [scrolled, recalcNavHeight]);

  useEffect(() => {
    closeMobile();
  }, [location, closeMobile]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      document.querySelector('.navbar-menu .nm-trigger')?.focus();
    } else {
      document.body.style.overflow = '';
      hamburgerRef.current?.focus();
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMobile();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen, closeMobile]);

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo">
          <img src="/bessblocklogo.png" alt="Bessblock" className="navbar-logo-img" />
        </Link>

        <button
          ref={hamburgerRef}
          className={`navbar-hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={toggleMobile}
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          <span /><span /><span />
        </button>

        <div
          className={`navbar-menu ${mobileOpen ? 'navbar-menu-open' : ''}`}
          onClick={mobileOpen ? (e) => { if (e.target === e.currentTarget) closeMobile(); } : undefined}
        >
          <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/" className={`nm-trigger${isActive(location.pathname, '/') ? ' active' : ''}`}>Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive(location.pathname, '/about') ? 'active' : ''}>About Bessblock</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <AboutContent />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive(location.pathname, '/products') ? 'active' : ''}>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ProductsContent />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/projects" className={`nm-trigger${isActive(location.pathname, '/projects') ? ' active' : ''}`}>Projects Gallery</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive(location.pathname, '/insights') || isActive(location.pathname, '/faqs') ? 'active' : ''}>Insights & FAQs</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <InsightsContent />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/contact" className={`nm-trigger${isActive(location.pathname, '/contact') ? ' active' : ''}`}>Contact</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="nm-item-search">
                  <SearchBar />
                </NavigationMenuItem>

                <NavigationMenuItem className="nm-item-theme">
                  <ThemeToggle />
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <AnimatedButton to="/request-quote" variant="primary" size="sm">Request a Quote</AnimatedButton>
                </NavigationMenuItem>
              </NavigationMenuList>

              <NavigationMenuIndicator />
            </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}
