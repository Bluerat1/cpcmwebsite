import { defineField, defineType } from 'sanity'

export const suggestionType = defineType({
  name: 'suggestion',
  title: 'Suggestions & Feedback',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the person leaving feedback (optional)',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Email address (optional)',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (Rule) => Rule.required().error('A message is required.'),
      description: 'The suggestion, feedback, or issue being reported',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Read', value: 'read' },
          { title: 'Addressed', value: 'addressed' },
        ],
        layout: 'radio',
      },
      initialValue: 'new',
    }),
  ],
  preview: {
    select: {
      title: 'message',
      subtitle: 'name',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'No message',
        subtitle: subtitle ? `From: ${subtitle}` : 'Anonymous',
      }
    },
  },
})
