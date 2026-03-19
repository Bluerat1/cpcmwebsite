import { type SchemaTypeDefinition } from 'sanity'
import { sermonType } from './sermon'
import { eventType } from './event'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [sermonType, eventType],
}
