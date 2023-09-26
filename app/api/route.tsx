import { NextResponse } from "next/server";
import Goods from "./data/goods.json"


export async function GET (request: Request) {

    const data = await request.body;
    console.log(data)
    return NextResponse.json(Goods)
}
