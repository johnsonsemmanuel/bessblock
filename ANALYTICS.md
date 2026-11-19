# Bessblock analytics

The client manages tracking keys in **Admin → Analytics** (`/admin`, PIN-protected). No code
change or redeploy is needed after saving.

## Where values are stored

Saving writes a single Sanity `siteSettings` document with these fields:

| Field | Purpose |
| --- | --- |
| `googleAnalyticsId` | GA4 Measurement ID, `G-XXXXXXXXXX` |
| `googleTagManagerId` | GTM Container ID, `GTM-XXXXXXX` |
| `googleSearchConsoleVerification` | Verification code for Search Console's HTML-tag method |
| `lookerStudioReportUrl` | Looker Studio embed link |

At least one of GA4 or GTM is required. Invalid IDs are rejected in the admin and ignored on the
site, so a bad value cannot silently enable the wrong tracking.

## How the site reads them

- `GET /api/analytics-settings` returns only those four whitelisted fields. It fails closed with
  empty values if Sanity is unreachable.
- `src/components/Analytics.jsx` fetches that endpoint on load and injects the tags. Saved keys win
  over the `VITE_GA4_ID`, `VITE_GTM_ID` and `VITE_GSC_VERIFICATION` env fallbacks.
- Both GA4 and GTM are **consent-gated**: nothing is injected until the visitor accepts cookies in
  the cookie banner. Accepting later in the same page load starts tracking immediately.
- The Search Console meta tag is not tracking, so it is injected regardless of consent. If Search
  Console offers the *HTML file* method instead, put the file in `public/` rather than pasting it
  into the verification field.

## Reports

The Looker Studio link saved in the admin is embedded below the settings table. Only
`https://lookerstudio.google.com` links are accepted, which prevents arbitrary iframes. Build the
report from the client's own GA4 property and enable embedding under **Share**.

If the GTM container also contains a GA4 tag and a GA4 ID is saved here, pageviews can be counted
twice. Use either the direct GA4 field or a GA4 tag inside the container, not both.

## Known limitations

- The admin PIN is client-side and the `/api/sanity` endpoint it uses is not server-authorised.
  Treat this as an internal tool until real sessions are added.
- The Search Console meta tag is injected by JavaScript. Strict crawlers that do not execute JS
  will not see it; use the HTML-file method for those cases.
