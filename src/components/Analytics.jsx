import { useEffect } from 'react';

const GA4_ID = import.meta.env.VITE_GA4_ID;

export default function Analytics() {
  useEffect(() => {
    if (!GA4_ID || GA4_ID === 'G-PLACEHOLDER') return;

    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;

    const script2 = document.createElement('script');
    script2.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA4_ID}');
    `;

    document.head.appendChild(script1);
    document.head.appendChild(script2);

    return () => {
      script1.remove();
      script2.remove();
    };
  }, []);

  return null;
}
