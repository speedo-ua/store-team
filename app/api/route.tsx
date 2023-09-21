import { NextRequest, NextResponse } from "next/server";

const GET = async (req: NextRequest) =>{
    
    const res = await req.json()
    console.log (res)
}