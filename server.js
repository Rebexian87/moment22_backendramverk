// Import the framework and instantiate it
import Fastify from 'fastify'
import dbConnector from './our-db-connector.js'
import testroute from './routes/testroute.js'
import routes from './routes/testroute.js'


const fastify = Fastify({
  logger: true
})

// Declare a route
// fastify.get('/', async function handler (request, reply) {
//   return { hello: 'world' }
// })
fastify.register(dbConnector)

fastify.register(routes)


// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}