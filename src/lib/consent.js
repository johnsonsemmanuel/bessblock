const COOKIE_NAME = 'bessblock-cookies';
const YEAR = 365 * 24 * 60 * 60;
const CONSENT_EVENT = 'bessblock:consentchange';

function isLocal(hostname) {
  return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1';
}

function domainAttr() {
  const host = window.location.hostname;
  if (isLocal(host)) return '';
  const parts = host.split('.');
  if (parts.length >= 3 && /^(www|staging|dev|test|admin)$/i.test(parts[0])) {
    return `;domain=.${parts.slice(1).join('.')}`;
  }
  if (parts.length >= 2) {
    return `;domain=.${parts.slice(-2).join('.')}`;
  }
  return '';
}

function setCookie(value) {
  const d = domainAttr();
  document.cookie = `${COOKIE_NAME}=${value};path=/${d};max-age=${YEAR};SameSite=Lax`;
}

function getCookie() {
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]*)`));
  return match ? match[1] : null;
}

function removeCookie() {
  const d = domainAttr();
  document.cookie = `${COOKIE_NAME}=;path=/${d};max-age=0;SameSite=Lax`;
}

export function getConsent() {
  return getCookie();
}

export function onConsentChange(callback) {
  window.addEventListener(CONSENT_EVENT, callback);
  return () => window.removeEventListener(CONSENT_EVENT, callback);
}

function notify() {
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function acceptConsent() {
  setCookie('accepted');
  notify();
}

export function declineConsent() {
  setCookie('declined');
  notify();
}

export function clearConsent() {
  removeCookie();
  notify();
}
