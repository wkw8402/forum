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
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '30px' }}>
        <h1 style={{ fontSize: '2em' }}>Welcome to the Forum Project</h1>
        <p>Discover our Next.js and MongoDB stack.</p>
      </section>

      {/* Features Overview */}
      <section style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Key Features</h2>
        <ol style={{ listStyleType: 'decimal', padding: '0', margin: '0 auto', textAlign: 'left', display: 'inline-block', maxWidth: '600px' }}>
          <li style={{ padding: '5px 0', color: 'grey', fontSize: '0.9em' }}>List View Features (DB Data Display)</li>
          <li style={{ padding: '5px 0', color: 'grey', fontSize: '0.9em' }}>Detail Page (Dynamic Route)</li>
          <li style={{ padding: '5px 0', color: 'grey', fontSize: '0.9em' }}>Post Writing Features (Server Functionality)</li>
          <li style={{ padding: '5px 0', color: 'grey', fontSize: '0.9em' }}>Edit Functionality</li>
          <li style={{ padding: '5px 0', color: 'grey', fontSize: '0.9em' }}>Delete Functionality (Ajax and Error Handling and Query String / URL Parameter)</li>
          <li style={{ padding: '5px 0', color: 'grey', fontSize: '0.9em' }}>Static Rendering, Dynamic Rendering, Cache</li>
          <li style={{ padding: '5px 0', color: 'grey', fontSize: '0.9em' }}>User Features: Social Login with Auth.js, OAuth, Session Method, JWT (refresh)</li>
          <li style={{ padding: '5px 0', color: 'grey', fontSize: '0.9em' }}>Comment Features (Handling Input Data and useEffect)</li>
          <li style={{ padding: '5px 0', color: 'grey', fontSize: '0.9em' }}>Handling Loading, Error, and Not-Found Scenarios</li>
          <li style={{ padding: '5px 0', color: 'grey', fontSize: '0.9em' }}>Dark Mode (Cookies / localStorage)</li>
          <li style={{ padding: '5px 0', color: 'grey', fontSize: '0.9em' }}>Intercepting Server Functions with Middleware</li>
          <li style={{ padding: '5px 0', color: 'grey', fontSize: '0.9em' }}>Server Actions in Next.js</li>
        </ol>
      </section>

      {/* Demo or Screenshots */}
      <section style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Project Demo</h2>
        <video 
          src="/demo.mov" 
          alt="Project Demo Video" 
          style={{ maxWidth: '60%', height: 'auto' }} 
          controls
        >
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#333', color: 'white' }}>
        <div>Contact me at <a href="mailto:dnruddhks1223@gmail.com" style={{ color: 'white' }}>dnruddhks1223@gmail.com</a></div>
        <div>View the project on <a href="https://github.com/wkw8402/forum" style={{ color: 'white' }}>GitHub</a>.</div>
      </footer>
    </div>
  )
}


