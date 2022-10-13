// middleware.ts
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { parseCookies } from "nookies";
import axios from 'axios'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    console.log(request.cookies.get('user'))
    if (request.cookies.get('user') === undefined) {
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_HOST_URL}/login`)
    }

    var res = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/checkToken`, {
        headers: {
            'content-type': 'text/json',
            'Authorization': `Bearer ${JSON.parse(parseCookies().user).access_token}`,
        }
    })
        .then(function (response) {
            return NextResponse.next()
        }).catch(function (error) {
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_HOST_URL}/login`)
        })

    return NextResponse.next()

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/food', '/hotel', '/transaction'],
}