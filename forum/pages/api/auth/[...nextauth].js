import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '4655f274f358a9c4cea2',
      clientSecret: process.env.GITHUB_SECRET,
    }),

    CredentialsProvider({
        //1. code to auto-genearte login page form
        name: "credentials",
          credentials: {
            email: { label: "email", type: "text" },
            password: { label: "password", type: "password" },
        },
  
        //2. code to execute on login request
        // compare id, pw with db
        // on success, return user, otherwise return null
        async authorize(credentials) {
          let db = (await connectDB).db('forum');
          let user = await db.collection('user_cred').findOne({email : credentials.email})
          if (!user) {
            console.log('email not registered');
            return null
          }
          const pwcheck = await bcrypt.compare(credentials.password, user.password);
          if (!pwcheck) {
            console.log('wrong password');
            return null
          }
          return user
        }
      })
  ],
//3. jwt instead of session
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60 //30 days
  },


  callbacks: {
    //4. code to generate jwt
    // user is from db and token.user = jwt
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {};
        token.user.name = user.name
        token.user.email = user.email
      }
      return token;
    },
    //5. code for user session
    session: async ({ session, token }) => {
      session.user = token.user;  
      return session;
    },
  },

  secret : process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 