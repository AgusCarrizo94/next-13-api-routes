import { NextResponse } from "next/server";

export async function POST(req) {
    const data = await req.json()
    console.log('data: ', data)

    const { name, email, message } = data

    return NextResponse.json({name, email, message})
}