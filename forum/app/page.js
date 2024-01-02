import { connectDB } from "@/util/database.js"

export const revalidate = 20;

export default async function Home() {

  const client = await connectDB;
  const db = client.db("forum")
  let result = await db.collection('post').find().toArray()

  // await fetch('/URL', {cache: 'force-cache'})
  // await fetch('/URL', {cache: 'no-store'})
  // await fetch('/URL', {next: {revalidate : 60}})

  return (
    <div>hi</div>
  )
}
