
//Import the schema
import filmBodyJsonSchema from '../models/film.model.js'

//imports from film.controller.js with the functions to get, post, put and delete films
import { getAllFilms } from '../controllers/film.controller.js'
import { createFilm } from '../controllers/film.controller.js'
import { deleteFilm } from '../controllers/film.controller.js'
import { updateFilm } from '../controllers/film.controller.js'
import { getOneFilm } from '../controllers/film.controller.js'


//Routes
async function routes (fastify, options) {
  const collection = fastify.mongo.db.collection('films')

  //Route to get the films
  fastify.get('/', async (request, reply) => {
    return { hello: 'world202' }
  })

  fastify.get('/films', getAllFilms)

  fastify.get('/film/:id', getOneFilm)


  const schema = {
    body: filmBodyJsonSchema,
  }

  //Route to create a film
  fastify.post('/film',  { schema }, createFilm)

  //Route to delete a film
  fastify.delete('/film/:id', deleteFilm)

  //Route to update a film
  fastify.put('/film/:id', { schema },updateFilm)

}



//ESM
export default routes;