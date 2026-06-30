import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID,
  dataset: 'production',
  token: process.env.VITE_SANITY_TOKEN,
  useCdn: false,
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, company, subject, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' })
    }

    const doc = await client.create({
      _type: 'contactSubmission',
      name,
      email,
      company: company || '',
      subject: subject || '',
      message,
      submittedAt: new Date().toISOString(),
      read: false,
    })

    return res.status(200).json({ success: true, id: doc._id })
  } catch (err) {
    console.error('Contact API error:', err)
    return res.status(500).json({ error: 'Failed to save submission' })
  }
}
