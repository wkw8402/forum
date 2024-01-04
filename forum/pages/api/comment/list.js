import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(request, response) {
    const db = (await connectDB).db('forum')
    let result = await db.collection('comment')
    .find({ parent : new ObjectId(request.query.id) }).toArray()
    response.status(200).json(result)
}