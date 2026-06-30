import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, X, Package, FileText, Rows3, ArrowRight } from 'lucide-react';
import { performSearch, initSearch } from '../lib/search';
import './SearchBar.css';

const typeMeta = {
  category: { icon: Rows3, label: 'Category' },
  product: { icon: Package, label: 'Product' },
  blog: { icon: FileText, label: 'Article' },
};

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    initSearch().then(() => {
      if (query) {
        const r = performSearch(query);
        setResults(r);
      }
    });
  }, []);

  useEffect(() => {
    if (open) {
      setOpen(false); // eslint-disable-line react-hooks/set-state-in-effect
      setQuery('');
      setResults([]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    const handle = (e) => {
      if (e.key === '/' && !open) {
        e.preventDefault();
        setOpen(true);
        setTimeout(() => inputRef.current?.focus(), 50);
      }
      if (e.key === 'Escape' && open) {
        setOpen(false);
        setQuery('');
        setResults([]);
      }
    };
    document.addEventListener('keydown', handle);
    return () => document.removeEventListener('keydown', handle);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handle = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(i => Math.min(i + 1, results.length - 1));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(i => Math.max(i - 1, 0));
      }
      if (e.key === 'Enter' && selectedIndex >= 0 && results[selectedIndex]) {
        window.location.href = results[selectedIndex].path;
      }
    };
    document.addEventListener('keydown', handle);
    return () => document.removeEventListener('keydown', handle);
  }, [open, results, selectedIndex]);

  useEffect(() => {
    const handle = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  const handleInput = (value) => {
    setQuery(value);
    const r = value.trim() ? performSearch(value) : [];
    setResults(r);
    setSelectedIndex(-1);
  };

  return (
    <div className={`search-bar-wrap ${open ? 'search-bar-open' : ''}`} ref={wrapperRef}>
      <button
        className="search-bar-toggle"
        onClick={() => { setOpen(true); setTimeout(() => inputRef.current?.focus(), 50); }}
        aria-label="Search products and articles"
        title="Search (press /)"
      >
        <Search size={16} />
      </button>

      {open && (
        <div className="search-bar-dropdown">
          <div className="search-bar-input-wrap">
            <Search size={16} className="search-bar-input-icon" />
            <input
              ref={inputRef}
              type="text"
              className="search-bar-input"
              placeholder="Search products, articles..."
              value={query}
              onChange={e => handleInput(e.target.value)}
              aria-label="Search"
              autoComplete="off"
            />
            <button
              className="search-bar-clear"
              onClick={() => { setOpen(false); setQuery(''); setResults([]); }}
              aria-label="Close search"
            >
              <X size={16} />
            </button>
          </div>

          {results.length > 0 && (
            <div className="search-bar-results" role="listbox">
              {results.map((item, i) => {
                const meta = typeMeta[item.type];
                const Icon = meta.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`search-bar-item ${i === selectedIndex ? 'search-bar-item-focused' : ''}`}
                    role="option"
                    aria-selected={i === selectedIndex}
                    onMouseEnter={() => setSelectedIndex(i)}
                  >
                    <span className="search-bar-item-icon" style={{ '--item-color': item.type === 'category' ? '#404088' : item.type === 'product' ? '#ffda45' : '#6b7280' }}>
                      <Icon size={16} />
                    </span>
                    <span className="search-bar-item-body">
                      <span className="search-bar-item-title">{item.title}</span>
                      <span className="search-bar-item-desc">{item.description.slice(0, 80)}</span>
                    </span>
                    <span className="search-bar-item-type">{meta.label}</span>
                    <ArrowRight size={14} className="search-bar-item-arrow" />
                  </Link>
                );
              })}
            </div>
          )}

          {query.trim() && results.length === 0 && (
            <div className="search-bar-empty">
              No results found for &ldquo;{query}&rdquo;
            </div>
          )}

          {query.trim() && results.length > 0 && (
            <Link to={`/search?q=${encodeURIComponent(query)}`} className="search-bar-view-all" onClick={() => { setOpen(false); setQuery(''); setResults([]); }}>
              <span>View all results</span>
              <ArrowRight size={14} />
            </Link>
          )}

          <div className="search-bar-hint">
            Press <kbd>Esc</kbd> to close &middot; <kbd>&uarr;</kbd> <kbd>&darr;</kbd> to navigate
          </div>
        </div>
      )}
    </div>
  );
}
