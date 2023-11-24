import { NextResponse } from "next/server";

export async function GET(req, res) {
    const { searchParams } = new URL(req.url)

    // const name = searchParams.get('name')

    const obj = Object.fromEntries(searchParams.entries())

    // console.log(typeof searchParams,"/", obj)

    return NextResponse.json(obj)
}