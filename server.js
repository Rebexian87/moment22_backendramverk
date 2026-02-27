
import Fastify from 'fastify'
import dbConnector from './our-db-connector.js'
import routes from './routes/routes.js'
import ajvErrors from 'ajv-errors'
import cors from '@fastify/cors'



const fastify = Fastify({
  logger: true,
    //ajv-errorhandler
    ajv: {
    customOptions: {
      allErrors:true,
      coerceTypes:false
    },
    plugins: [(ajv) => ajvErrors(ajv)]
  }
})

//Uses the connection
fastify.register(dbConnector)

//Uses the routes
fastify.register(routes)

await fastify.register(cors, {
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST', 'DELETE']
})

//Handels the errors 
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