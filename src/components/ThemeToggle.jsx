import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <Sun size={18} className="theme-toggle-icon theme-toggle-sun" />
      <Moon size={18} className="theme-toggle-icon theme-toggle-moon" />
    </button>
  );
}
