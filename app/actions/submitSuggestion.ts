'use server'

import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '@/sanity/env'

const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_WRITE_TOKEN,
})

export async function submitSuggestion(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!message || message.trim() === '') {
    return { error: 'Message is required' }
  }

  if (!process.env.NEXT_PUBLIC_SANITY_WRITE_TOKEN) {
    console.error('Missing NEXT_PUBLIC_SANITY_WRITE_TOKEN')
    return { error: 'Server configuration error. Please contact administrator.' }
  }

  try {
    await writeClient.create({
      _type: 'suggestion',
      name: name?.trim() || 'Anonymous',
      email: email?.trim() || '',
      message: message.trim(),
      status: 'new',
    })
    return { success: true }
  } catch (error: any) {
    console.error('Error submitting suggestion:', error)
    return { error: `Error from Sanity: ${error?.message || String(error)}` }
  }
}
