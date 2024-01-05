import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request) {

    if ( request.nextUrl.pathname.startsWith('/list')) {
        console.log(new Date())
        console.log(reqeust.headers.get('sec-ch-ua-platform'))
        return NextResponse.next()
    }  

    // request.cookies.get('cookie name')  
    // request.cookies.has('cookie name') 
    // request.cookies.delete('cookie name') 
    
    // const response = NextResponse.next()
    // response.cookies.set({
    //   name: 'mode',
    //   value: 'dark',
    //   maxAge: 3600,
    //   httpOnly : true
    // })  
    // return response  //create and send cookie with response

    if (request.nextUrl.pathname.startsWith('/write')) {
        const session = await getToken({ req : request })
        console.log('session', session)
        if (session == null) {
          return NextResponse.redirect(new URL('/api/auth/signin', request.url));
        }
    }
    // console.log(request.nextURL) 
    // console.log(request.cookies) 
    // console.log(request.headers) contains user's browser, language, os info
    // NextResponse.next() pass
    // NextResponse.redirect() redirect
    // NextResponse.rewrite() redirect without changing address bar
}   