import { NextResponse } from 'next/server'

export async function middleware(request) {

    if ( request.nextUrl.pathname.startsWith('/list')) {
        console.log(new Date())
        console.log(reqeust.headers.get('sec-ch-ua-platform'))
        return NextResponse.next()
    }

    
  
    // console.log(request.nextURL) 
    // console.log(request.cookies) 
    // console.log(request.headers) contains user's browser, language, os info
    // NextResponse.next() pass
    // NextResponse.redirect() redirect
    // NextResponse.rewrite() redirect without changing address bar

} 