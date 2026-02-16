//Controllers that the routes in file routes.js uses

 
import { ObjectId } from '@fastify/mongodb'
    
    //method to get all Films (GET)
    export const getAllFilms = async (request, reply) => { 
      const collection = request.server.mongo.db.collection('films')
      const result = await collection.find().toArray()
      if (result.length === 0) {
        throw new Error('No documents found')
      }
      return result }

    //method to create a film (POST)  
    export const createFilm =  async (request, reply) => {
    // we can use the `request.body` object to get the data sent by the client

    const collection = request.server.mongo.db.collection('films')
    const result = await collection.insertOne({ title: request.body.title , premiereYear: request.body.premiereYear , seen: request.body.seen, createdAt: new Date()  
 
    })
    return result
  }

    //method to delete a film (delete)  
    export const deleteFilm =   async function (request, reply) {
    const films=request.server.mongo.db.collection('films')
    const id = new ObjectId(request.params.id)
    

    try {
      
      const film = await films.deleteOne({_id: id})

      return film }catch (error){
        return "felelele" + error 

      }
    
    }

    //method to update a film (PUT)  
    export const updateFilm = async function (request, reply) {
        const films=request.server.mongo.db.collection('films')
        const id = new ObjectId(request.params.id)
        const {title, premiereYear, seen} = request.body 
    
        try {
          const film = await films.updateOne({_id: id}, {$set: {title, premiereYear, seen}})

          return film }catch (error){
          return "gick inte att uppdatera" + error 

      }
    
    }

