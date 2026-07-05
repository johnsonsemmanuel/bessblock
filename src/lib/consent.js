const COOKIE_NAME = 'bessblock-cookies';
const YEAR = 365 * 24 * 60 * 60;

function rootDomain() {
  const parts = window.location.hostname.split('.');
  if (parts.length >= 3 && /^(www|staging|dev|test|admin)$/i.test(parts[0])) {
    return '.' + parts.slice(1).join('.');
  }
  if (parts.length >= 2) {
    return '.' + parts.slice(-2).join('.');
  }
  return window.location.hostname;
}

function setCookie(value) {
  const domain = rootDomain();
  document.cookie = `${COOKIE_NAME}=${value};path=/;domain=${domain};max-age=${YEAR};SameSite=Lax`;
}

function getCookie() {
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]*)`));
  return match ? match[1] : null;
}

function removeCookie() {
  const domain = rootDomain();
  document.cookie = `${COOKIE_NAME}=;path=/;domain=${domain};max-age=0;SameSite=Lax`;
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
