import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'quoteRequest',
  title: 'Quote Request',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'company', title: 'Company', type: 'string' }),
    defineField({ name: 'product', title: 'Product', type: 'string' }),
    defineField({ name: 'quantity', title: 'Quantity', type: 'string' }),
    defineField({ name: 'projectDetails', title: 'Project Details', type: 'text', rows: 4 }),
    defineField({ name: 'delivery', title: 'Delivery Location', type: 'string' }),
    defineField({ name: 'timeline', title: 'Timeline', type: 'string' }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Responded', value: 'responded' },
          { title: 'Closed', value: 'closed' },
        ],
      },
      initialValue: 'pending',
    }),
    defineField({ name: 'submittedAt', title: 'Submitted At', type: 'datetime' }),
    defineField({ name: 'read', title: 'Read', type: 'boolean', initialValue: false }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'product', media: undefined },
  },
})
