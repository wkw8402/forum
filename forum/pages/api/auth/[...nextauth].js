import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';
import axios from "axios"

// async function refreshAccessToken(token) {
//     //1. post request to regenerate access token
//     const url = 'https://github.com/login/oauth/access_token'
//     const params = {
//       grant_type: 'refresh_token',
//       refresh_token: token.refreshToken,
//       client_id: 'Iv1.3913217b1a90558f',
//       client_secret: process.env.APP_SECRET,
//     }

//     const res = await axios.post(url, null, { params : params })
//     const refreshedTokens = await res.data
//     if (res.status !== 200) {
//       console.log('error', refreshedTokens)
//     }

//     //2. print refreshed acess token
//     console.log('refreshed access token: ')
//     console.log(refreshedTokens)
//     // access_token=ghu_8afeApnRAkzkBYDmshCKqq6uyKJunA1EScAS
//     // &expires_in=28800
//     // &refresh_token=ghr_IZNb9vbPyu8FnSpnP1fLP0DQPq1EVH2JLB6HMOjgBaeGbZSo3dHJihM46QM5cX1odrOUYe1OhZxc
//     // &refresh_token_expires_in=15811200
//     // &scope=
//     // &token_type=bearer   

//     //3. return new jwt token
//     let data = new URLSearchParams(refreshedTokens);
//     if (data.get('error') == null){
//       return {
//         ...token,
//         accessToken: data.get('access_token'),
//         accessTokenExpires:
//           Math.round(Date.now() / 1000) + Number(data.get('expires_in')),
//         refreshToken: data.get('refresh_token')
//       }
//     } else {
//       return token
//     }
// } 

export const authOptions = {
    // providers: [
    //     GithubProvider({
    //       clientId: 'Iv1.3913217b1a90558f',
    //       clientSecret: process.env.APP_SECRET,
    //     }),
    //   ],
    
    //   //in github, access token lasts 8 hours and refresh token lasts 6 months
    //   jwt : {
    //     maxAge: 60,
    //   },
    //   callbacks: {
    //     // code to execute when jwt is used, what it returns = jwt token
    //     async jwt({ token, account, user }) {
    //       console.log('account', account);
    //       console.log('user', user);
    //       console.log('token', token);
    
    //       // 1. on first login, make a first jwt token
    //       if (account && user) {
    //         return {
    //           accessToken: account.access_token,
    //           refreshToken: account.refresh_token, 
    //           accessTokenExpires: account.expires_at,
    //           user,
    //         }
    //       }
    
    //       // 2. regenerate access token when it is almost expiring
    //       // at 8hours - 10 seconds remaining, regenerate
    //       let timeRemaining = token.accessTokenExpires - Math.round(Date.now() / 1000)
    //       if (timeRemaining < (60 * 60 * 8 - 10) ) {  
    //         console.log('close to expiration')
    //         let newJWT = await refreshAccessToken(token) // 3. ask github for new Access Token
    //         console.log('new JWT : ', newJWT)
    //         return newJWT
    //       } else {
    //         return token
    //       }
    //     },
    
    //     //getServerSession extracts data from token to send to component 
    //     async session({ session, token }) {
    //       session.user = token.user
    //       session.accessToken = token.accessToken
    //       session.accessTokenExpires = token.accessTokenExpires
    //       session.error = token.error
    //       return session
    //     },
    //   },
    //   secret : process.env.secret,
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
export default NextAuth(authOptions) 