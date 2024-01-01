import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  if (request.method == 'POST'){
    let changed = {title : request.body.title, content : request.body.content}
    console.log(request.body)
    let db = (await connectDB).db('forum')
    let result = await db.collection('post').updateOne({_id : new ObjectId(request.body._id)}, { $set : changed} );
    response.redirect(302, '/list')
  }
}