import { useState, useEffect } from 'react';
import './Preloader.css';

export default function Preloader({ onFinish }) {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem('bessblock_visited');
    if (visited) {
      setVisible(false);
      onFinish();
      return;
    }

    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setVisible(false);
        localStorage.setItem('bessblock_visited', 'true');
        onFinish();
      }, 500);
    }, 3200);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className={`preloader${fading ? ' preloader-fade' : ''}`}>
      <div className="preloader-content">
        <div className="preloader-block" aria-hidden="true">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 4L72 22V58L40 76L8 58V22L40 4Z" fill="#404088" stroke="#5a5a9e" strokeWidth="1.5" />
            <path d="M40 4L72 22L40 40L8 22L40 4Z" fill="#5a5a9e" />
            <path d="M72 22V58L40 76V40L72 22Z" fill="#2e2e6b" />
            <path d="M8 22V58L40 76V40L8 22Z" fill="#35357a" />
          </svg>
        </div>
        <h1 className="preloader-title">Bessblock</h1>
        <p className="preloader-subtitle">Concrete Products Ltd</p>
      </div>
    </div>
  );
}
