async function testroute (fastify, options) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world2' }
  })
}

//ESM
export default testroute;