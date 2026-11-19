import { useEffect, useState } from 'react';
import { getConsent, onConsentChange } from '../lib/consent';
import { fetchAnalyticsSettings } from '../lib/analytics';

const GSC_ID = 'bessblock-gsc-verification';
const TRACKING_IDS = [
  'bessblock-ga4-init',
  'bessblock-ga4-loader',
  'bessblock-gtm-init',
  'bessblock-gtm-loader',
];

function ensureScript(id, create) {
  if (document.getElementById(id)) return;
  const script = create();
  script.id = id;
  document.head.appendChild(script);
}

function removeTracking() {
  TRACKING_IDS.forEach((id) => document.getElementById(id)?.remove());
}

export default function Analytics() {
  const [settings, setSettings] = useState(null);
  const [consent, setConsent] = useState(() => getConsent());

  useEffect(() => {
    let active = true;
    fetchAnalyticsSettings().then((value) => {
      if (active) setSettings(value);
    });
    const off = onConsentChange(() => setConsent(getConsent()));
    return () => {
      active = false;
      off();
    };
  }, []);

  useEffect(() => () => {
    removeTracking();
    document.getElementById(GSC_ID)?.remove();
  }, []);

  useEffect(() => {
    if (!settings) return;
    const code = settings.googleSearchConsoleVerification;
    const existing = document.getElementById(GSC_ID);
    if (!code) {
      existing?.remove();
      return;
    }
    if (existing) {
      if (existing.content !== code) existing.content = code;
      return;
    }
    const meta = document.createElement('meta');
    meta.id = GSC_ID;
    meta.name = 'google-site-verification';
    meta.content = code;
    document.head.appendChild(meta);
  }, [settings]);

  useEffect(() => {
    if (!settings) return;
    const gaId = settings.googleAnalyticsId;
    const gtmId = settings.googleTagManagerId;

    if (consent !== 'accepted' || (!gaId && !gtmId)) {
      removeTracking();
      return;
    }

    if (gaId) {
      ensureScript('bessblock-ga4-init', () => {
        const script = document.createElement('script');
        script.textContent = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `;
        return script;
      });
      ensureScript('bessblock-ga4-loader', () => {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
        return script;
      });
    } else {
      document.getElementById('bessblock-ga4-init')?.remove();
      document.getElementById('bessblock-ga4-loader')?.remove();
    }

    if (gtmId) {
      ensureScript('bessblock-gtm-init', () => {
        const script = document.createElement('script');
        script.textContent = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        `;
        return script;
      });
      ensureScript('bessblock-gtm-loader', () => {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
        return script;
      });
    } else {
      document.getElementById('bessblock-gtm-init')?.remove();
      document.getElementById('bessblock-gtm-loader')?.remove();
    }
  }, [consent, settings]);

  return null;
}
