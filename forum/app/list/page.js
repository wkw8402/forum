import { connectDB } from "@/util/database.js"
import Link from "next/link";
// import DetailLink from "./DetailLink";

export default async function List() {

    const client = await connectDB;
    const db = client.db("forum")
    let result = await db.collection('post').find().toArray()

    return (
      <div className="list-bg">
        {
            result.map((a, i)=>
                <div className="list-item" key={i}>
                    <Link href={'/detail/' + result[i]._id}><h4>{a.title}</h4></Link>
                    <Link href={'/edit/' + result[i]._id} className="list-btn">✏️</Link>
                    {/* <DetailLink id={a._id}/> */}
                    <p>12/23</p>
                </div>
            )
        }
      </div>
    )
  } 