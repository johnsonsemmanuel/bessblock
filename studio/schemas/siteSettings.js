export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'googleAnalyticsId',
      type: 'string',
      title: 'GA4 Measurement ID',
      description: 'GA4 stream ID, e.g. G-XXXXXXXXXX',
      placeholder: 'G-XXXXXXXXXX',
    },
    {
      name: 'googleTagManagerId',
      type: 'string',
      title: 'GTM Container ID',
      description: 'Tag Manager container ID, e.g. GTM-XXXXXXX',
      placeholder: 'GTM-XXXXXXX',
    },
    {
      name: 'googleSearchConsoleVerification',
      type: 'string',
      title: 'Google Search Console Verification Code',
      description: 'Verification code for the HTML tag method',
    },
    {
      name: 'lookerStudioReportUrl',
      type: 'url',
      title: 'Looker Studio Report Link',
      description: 'https://lookerstudio.google.com/... embed link',
    },
  ],
}
