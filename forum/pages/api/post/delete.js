import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  if (request.method == 'DELETE'){
    try {
      let db = (await connectDB).db('forum') 
      let result = await db.collection('post').deleteOne({_id : new ObjectId(request.body)})
      .then((r)=>{
        if(r.status == 200) {
          return r.json()
        } else {
          //code to execute if server sends error code
        }
      })
      .then((result)=>{ 
        //code to execute if successful
      }).catch((error)=>{
        //code to execute if failed due to network problem
        console.log(error)
      })
    } 
    catch (error) {
      response.status(500)
    }
    // if result is error, response.status(500)
    // otherwise, response.status(200)
  }
} 