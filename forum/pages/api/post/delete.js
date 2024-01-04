import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  if (request.method == 'DELETE'){
    console.log(request.body)
    let session = await getServerSession(request, response, authOptions)

    const db = (await connectDB).db('forum')
    let item = await db.collection('post').findOne({ _id : new ObjectId(request.body) })

    if (item.author == session.user.email) {
      let result = await db.collection('post').deleteOne({ _id : new ObjectId(request.body) })
      return response.status(200).json('delete complete')
    } else {
      return response.status(500).json('author and user mismatch')
    }

  }
    // if result is error, response.status(500)
    // otherwise, response.status(200)
} 