// Import the framework and instantiate it
import Fastify from 'fastify'
import dbConnector from './our-db-connector.js'
import testroute from './routes/testroute.js'
import routes from './routes/routes.js'
import { ObjectId } from '@fastify/mongodb'
import ajvErrors from 'ajv-errors'


const fastify = Fastify({
  logger: true,

   ajv: {
    customOptions: {
      allErrors:true,
      coerceTypes:false
    },
    plugins: [(ajv) => ajvErrors(ajv)]
  }
})

// Declare a route
// fastify.get('/', async function handler (request, reply) {
//   return { hello: 'world' }
// })
fastify.register(dbConnector)
// fastify.register(testroute)
fastify.register(routes)

// const app = Fastify ({
//   ajv: {
//     customOptions: {
//       allErrors:true
//     },
//     plugins: [ajvErrors]
//   }
// })

fastify.setErrorHandler((error, request, reply) => {
  if(error.validation) {
    return reply.code(400).send(
      {error: error.validation[0].message}
    )
  }
  reply.code(500).send ({error:'server error'})
})


// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}