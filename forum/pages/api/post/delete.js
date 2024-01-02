import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  if (request.method == 'DELETE'){
      console.log(request.body)
      let db = (await connectDB).db('forum') 
      let result = await db.collection('post').deleteOne({_id : new ObjectId(request.body)})
      
      response.status(200).json('delete complete')
    // if result is error, response.status(500)
    // otherwise, response.status(200)
  }
} 