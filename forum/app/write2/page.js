import { connectDB } from "@/util/database";

export default async function Write2() {
  async function handleSubmit(formData) {
    'use server';
    const db = (await connectDB).db('forum')
    await db.collection('post_test').insertOne({title : formData.get('title')})
  }
 
 
  return (
    <form action={handleSubmit}> 
      <input type="text" name="title" />
      <button type="submit">Submit</button>
    </form>
  );
} 