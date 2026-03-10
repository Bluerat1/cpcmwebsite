import { type SchemaTypeDefinition } from 'sanity'
import { sermonType } from './sermon'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [sermonType],
}
