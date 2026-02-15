  const filmBodyJsonSchema = {
    type: 'object',
    required: ['title','premiereYear','seen' ],
    properties: {
      title: { type: 'string' },
      premiereYear: { type: 'integer' },
      seen: { type: 'boolean' },
    },
  }

  export default filmBodyJsonSchema

