import { defineField, defineType } from 'sanity'

export const eventType = defineType({
    name: 'event',
    title: 'Events',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Event Title',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'date',
            title: 'Event Date and Time',
            type: 'datetime',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            initialValue: 'CPCM Church'
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'General', value: 'General' },
                    { title: 'Youth', value: 'Youth' },
                    { title: 'Young Adults', value: 'Young Adults' },
                    { title: 'Men\'s Ministry', value: 'Men\'s Ministry' },
                    { title: 'Women\'s Ministry', value: 'Women\'s Ministry' },
                    { title: 'Kids & Family', value: 'Kids & Family' }
                ],
                layout: 'dropdown'
            },
            initialValue: 'General'
        }),
        defineField({
            name: 'image',
            title: 'Event Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'description',
            title: 'Event Description',
            type: 'text'
        }),
        defineField({
            name: 'registrationLink',
            title: 'Registration Link (Optional)',
            type: 'url'
        }),
        defineField({
            name: 'facebookPostUrl',
            title: 'Facebook Post URL (Optional)',
            description: 'Paste the link to a Facebook post to embed it directly on the event card.',
            type: 'url'
        }),
    ],
})
