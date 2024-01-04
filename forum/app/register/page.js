export default function Register() {
    return (
      <div>
          <form method="POST" action="/api/auth/signup">
            <input name="name" type="text" placeholder="name" /> 
            <input name="email" type="text" placeholder="email" />
            <input name="password" type="password" placeholder="password" />
            <button type="submit">id/pw register</button>
          </form>
      </div>
    )
  }