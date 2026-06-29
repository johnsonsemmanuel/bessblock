import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'bessblock',
  title: 'Bessblock CMS',
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Bessblock Content')
          .items([
            S.listItem()
              .title('Blog Posts')
              .schemaType('post')
              .child(S.documentTypeList('post').title('Blog Posts')),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
})
