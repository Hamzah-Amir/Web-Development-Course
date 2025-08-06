import { NextResponse } from "next/server";
import fs, { writeFile } from 'fs/promises'

export async function POST(request) {
    let data = await request.json()
    console.log(data)
    return NextResponse.json({success: true, data: "Done!"})
}
 
