import { connectDB } from "@/util/database";

export default async function handler(request, response){
    if (request.method == 'POST') {
        console.log(request.body)
        if (request.body.title == '') {
            return response.status(500).json('write title')
        } 
        try {
            const db = (await connectDB).db("forum")
            let result = await db.collection('post').insertOne(request.body)
            return response.redirect(302, '/list')
        } catch (error) {
            return response.status(500).json('error')
        }
    }
  }