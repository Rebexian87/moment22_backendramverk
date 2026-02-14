// async function testroute (fastify, options) {
//   fastify.get('/', async (request, reply) => {
//     return { hello: 'world2' }
//   })
// }
import { ObjectId } from '@fastify/mongodb'


/**
 * A plugin that provide encapsulated routes
 * @param {FastifyInstance} fastify encapsulated fastify instance
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */
async function routes (fastify, options) {
  const collection = fastify.mongo.db.collection('films')

  fastify.get('/', async (request, reply) => {
    return { hello: 'world202' }
  })

  fastify.get('/films', async (request, reply) => {
    const result = await collection.find().toArray()
    if (result.length === 0) {
      throw new Error('No documents found')
    }
    return result
  })

  fastify.get('/films/:film', async (request, reply) => {
    const result = await collection.findOne({ film: request.params.title })
    if (!result) {
      throw new Error('Invalid value')
    }
    return result
  })

  const filmBodyJsonSchema = {
    type: 'object',
    required: ['title','premiereYear','seen' ],
    properties: {
      title: { type: 'string' },
      premiereYear: { type: 'integer' },
      seen: { type: 'boolean' },
    },
  }

  const schema = {
    body: filmBodyJsonSchema,
  }

  fastify.post('/films', { schema }, async (request, reply) => {
    // we can use the `request.body` object to get the data sent by the client
    const result = await collection.insertOne({ title: request.body.title, premiereYear: request.body.premiereYear, seen: request.body.seen, createdAt: new Date()  })
    return result
  })

  fastify.delete('/film/:id', async function (request, reply) {
    const films=fastify.mongo.db.collection('films')
    const id = new ObjectId(request.params.id)
    
    try {
      
      const film = await films.deleteOne({_id: id})

      return film }catch (error){
        return "felelele" + error 

      }
    
    }
  )

    fastify.put('/film/:id', async function (request, reply) {
    const films=fastify.mongo.db.collection('films')
    const id = new ObjectId(request.params.id)
    const {title, premiereYear, seen} = request.body 
    
    try {
      
      const film = await films.updateOne({_id: id}, {$set: {title, premiereYear, seen}})

      return film }catch (error){
        return "gick inte att uppdatera" + error 

      }
    
    }
  )









}



//ESM
export default routes;