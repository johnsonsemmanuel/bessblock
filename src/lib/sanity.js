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
