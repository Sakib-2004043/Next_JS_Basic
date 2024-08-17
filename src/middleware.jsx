import { NextResponse } from "next/server"

const loggedIn = false;

export function middleware(request){
  // console.log("This is middleware.")

  // if(!loggedIn && request.nextUrl.pathname !== '/'){
    return NextResponse.redirect(new URL('/', request.url))
  // }
}

// It Will allow to go contact and its sub-path
export const config = {
  matcher : ["/about"]
}