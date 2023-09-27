import { NextResponse } from "next/server";
import Goods from "./data/goods.json"


export async function GET (request: Request) {

    const data = await request;
    
    return NextResponse.json(Goods);
}
