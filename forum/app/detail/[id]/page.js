import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import { notFound } from "next/navigation";

export default async function Detail(props) {
    let db = (await connectDB).db('forum')
    // [id] folder makes props.params.id
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)});

    if (result === null) {
      return notFound()
    }
    // error and not-found can be loaded from parent directory

    return (
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
        <h4>Detail page</h4>
        <h4>{result.title}</h4>
        <p>{result.content}</p>
        <Comment _id={result._id.toString()} />
      </div>
    )
}