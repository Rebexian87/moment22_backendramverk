
  //Schema for the films with errormessages. 

  const filmBodyJsonSchema = {
    type: 'object',
    required: ['title','premiereYear','seen' ],
    additionalProperties: false,
    properties: {
      title: { type: 'string', minLength: 1},
      premiereYear: { type: 'integer'},
      seen: { type: 'boolean' },
    },
    errorMessage: {
      required: {
      title: 'Dont forget to write a title',
      premiereYear: 'Dont forget to write a year',
      seen: 'Dont forget to write if you have seen it (true or false)',
      }
    ,
    properties: {
      title: 'Title cant be empty and needs to be a string',
      premiereYear: 'Dont forget to write a year, needs to be a number',
      seen: 'Dont forget to write if you have seen it, you need to write true or false',
    }
  }
  }

  export default filmBodyJsonSchema

