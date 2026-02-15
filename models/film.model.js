  

  
  const filmBodyJsonSchema = {
    type: 'object',
    required: ['title','premiereYear','seen' ],
    properties: {
      title: { type: 'string', minLength: 1},
      premiereYear: { type: 'integer' },
      seen: { type: 'boolean' },
    },
  }

  export default filmBodyJsonSchema

