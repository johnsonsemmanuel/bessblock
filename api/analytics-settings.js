/* global process */
import { createClient } from '@sanity/client'

const projectId = process.env.VITE_SANITY_PROJECT_ID

const client = projectId
  ? createClient({
      projectId,
      dataset: 'production',
      apiVersion: '2024-01-01',
      useCdn: false,
      token: process.env.VITE_SANITY_TOKEN || undefined,
    })
  : null

const EMPTY = {
  googleAnalyticsId: '',
  googleTagManagerId: '',
  googleSearchConsoleVerification: '',
  lookerStudioReportUrl: '',
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=60, stale-while-revalidate=300')

  if (!client) return res.json(EMPTY)

  try {
    const doc = await client.fetch(
      '*[_type == "siteSettings"][0]{ googleAnalyticsId, googleTagManagerId, googleSearchConsoleVerification, lookerStudioReportUrl }'
    )
    if (!doc) return res.json(EMPTY)
    return res.json({
      googleAnalyticsId: doc.googleAnalyticsId || '',
      googleTagManagerId: doc.googleTagManagerId || '',
      googleSearchConsoleVerification: doc.googleSearchConsoleVerification || '',
      lookerStudioReportUrl: doc.lookerStudioReportUrl || '',
    })
  } catch (error) {
    console.error('analytics-settings read failed:', error)
    return res.json(EMPTY)
  }
}
