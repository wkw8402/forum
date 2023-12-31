import { connectDB } from "@/util/database.js"
import { MongoClient } from "mongodb"

export default async function Home() {

  const client = await connectDB;
  const db = client.db("forum")
  let result = await db.collection('post').find().toArray()
  console.log(result)

  return (
    <div>hi</div>
  )
}
