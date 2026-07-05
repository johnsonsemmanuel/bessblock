const COOKIE_NAME = 'bessblock-cookies';
const YEAR = 365 * 24 * 60 * 60;

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

export function acceptConsent() {
  setCookie('accepted');
}

export function declineConsent() {
  setCookie('declined');
}

export function clearConsent() {
  removeCookie();
}
