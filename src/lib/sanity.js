import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const hasConfig = projectId && projectId !== 'YOUR_SANITY_PROJECT_ID'

export const sanityClient = hasConfig
  ? createClient({
      projectId,
      dataset: 'production',
      apiVersion: '2024-01-01',
      useCdn: true,
    })
  : null

export const urlFor = sanityClient
  ? (source) => imageUrlBuilder(sanityClient).image(source)
  : () => ''

const API = '/api/sanity'

async function call(action, payload = {}) {
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action, ...payload }),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.error || `Request failed: ${res.status}`)
  }
  return res.json()
}

export const sanityApi = {
  fetch: (query, params) => call('query', { query, params }),
  create: (doc) => call('create', { doc }),
  patch: (id, set) => call('patch', { id, set }),
  delete: (id) => call('delete', { id }),
  uploadImage: async (file) => {
    const base64 = await new Promise((resolve) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result.split(',')[1])
      reader.readAsDataURL(file)
    })
    return call('upload', { fileType: 'image', fileName: file.name, base64 })
  },
}
