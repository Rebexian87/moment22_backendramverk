// Import the framework and instantiate it
import Fastify from 'fastify'
import testroute from './routes/testroute.js'
const fastify = Fastify({
  logger: true
})

// Declare a route
// fastify.get('/', async function handler (request, reply) {
//   return { hello: 'world' }
// })

fastify.register(testroute)


// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}