export default async function Write() {
    return (
      <div className="p-20">
        <form action="/api/post/new" method="POST">
          <input name="title" placeholder="title"/>
          <input name="content" placeholder="content"/>
          <button type="submit">submit</button>
        </form>
      </div>
    )
  } 