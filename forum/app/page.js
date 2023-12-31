import { connectDB } from "@/util/database.js"

export default async function Home() {

  const client = await connectDB;
  const db = client.db("forum")
  let result = await db.collection('post').find().toArray()

  return (
    <div>hi</div>
  )
}
