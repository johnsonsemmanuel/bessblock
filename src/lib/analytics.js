export const GA_ID_PATTERN = /^G-[A-Z0-9]{8,}$/
export const GTM_ID_PATTERN = /^GTM-[A-Z0-9]{4,}$/
export const PLACEHOLDER_GA_ID = 'G-PLACEHOLDER'

function clean(value) {
  return typeof value === 'string' ? value.trim() : ''
}

export function normalizeReportUrl(raw) {
  const value = clean(raw)
  if (!value) return ''
  try {
    const url = new URL(value)
    if (url.protocol !== 'https:') return ''
    if (url.hostname !== 'lookerstudio.google.com') return ''
    return url.toString()
  } catch {
    return ''
  }
}

// saved values win, but an empty saved value still allows the env fallback
function pick(saved, fallback) {
  const value = clean(saved)
  return value || fallback
}

function resolve(raw) {
  const ga = clean(raw.googleAnalyticsId)
  const gtm = clean(raw.googleTagManagerId)
  return {
    googleAnalyticsId: GA_ID_PATTERN.test(ga) ? ga : '',
    googleTagManagerId: GTM_ID_PATTERN.test(gtm) ? gtm : '',
    googleSearchConsoleVerification: clean(raw.googleSearchConsoleVerification),
    lookerStudioReportUrl: normalizeReportUrl(raw.lookerStudioReportUrl),
  }
}

export async function fetchAnalyticsSettings() {
  const envDefault = {
    googleAnalyticsId: clean(import.meta.env.VITE_GA4_ID) === PLACEHOLDER_GA_ID
      ? ''
      : clean(import.meta.env.VITE_GA4_ID),
    googleTagManagerId: clean(import.meta.env.VITE_GTM_ID),
    googleSearchConsoleVerification: clean(import.meta.env.VITE_GSC_VERIFICATION),
    lookerStudioReportUrl: '',
  }

  try {
    const res = await fetch('/api/analytics-settings', { headers: { Accept: 'application/json' } })
    if (!res.ok) return resolve(envDefault)
    const saved = await res.json()
    return resolve({
      googleAnalyticsId: pick(saved.googleAnalyticsId, envDefault.googleAnalyticsId),
      googleTagManagerId: pick(saved.googleTagManagerId, envDefault.googleTagManagerId),
      googleSearchConsoleVerification: pick(
        saved.googleSearchConsoleVerification,
        envDefault.googleSearchConsoleVerification
      ),
      lookerStudioReportUrl: pick(saved.lookerStudioReportUrl, envDefault.lookerStudioReportUrl),
    })
  } catch {
    return resolve(envDefault)
  }
}
