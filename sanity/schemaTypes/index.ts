import { type SchemaTypeDefinition } from 'sanity'
import { sermonType } from './sermon'
import { eventType } from './event'
import { suggestionType } from './suggestion'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [sermonType, eventType, suggestionType],
}
