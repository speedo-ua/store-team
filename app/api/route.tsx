<<<<<<< HEAD
import { NextResponse } from "next/server";
import Goods from "./data/goods.json"


export async function GET (request: Request) {

    const data = await request.body;
    console.log(data)
    return NextResponse.json(Goods)
}
=======
import { NextRequest, NextResponse } from "next/server";

const GET = async (req: NextRequest) =>{
    
    const res = await req.json()
    console.log (res)
}
>>>>>>> 032df230c8a76fb68b5ba60a403f3d7bb05a97de
