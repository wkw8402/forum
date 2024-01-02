import { connectDB } from "@/util/database.js"
import Link from "next/link";
import ListItem from "./ListItem"

export const dynamic = 'force-dynamic'

export default async function List() {

    const client = await connectDB;
    const db = client.db("forum")
    let result = await db.collection('post').find().toArray()

    return (
      <div className="list-bg">
        <ListItem result={result}/>
      </div>
    )
  }  