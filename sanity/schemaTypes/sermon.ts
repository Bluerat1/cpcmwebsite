import { defineField, defineType } from 'sanity'

export const sermonType = defineType({
    name: 'sermon',
    title: 'Sermons',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Sermon Title',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'speaker',
            title: 'Speaker Name',
            type: 'string',
            initialValue: 'Pastor John Doe' // Change this to your actual Pastor's name!
        }),
        defineField({
            name: 'date',
            title: 'Date Preached',
            type: 'date'
        }),
        defineField({
            name: 'videoUrl',
            title: 'YouTube or Vimeo URL',
            type: 'url'
        }),
        defineField({
            name: 'summary',
            title: 'Sermon Summary',
            type: 'text'
        }),
    ],
})