import { NextResponse } from "next/server";
import Goods from "./data/goods.json"


export async function GET (request: Request) {

<<<<<<< HEAD
    const data = await request;
    
    return NextResponse.json(Goods);
=======
    const data = await request.body;

    return NextResponse.json(Goods)
>>>>>>> b328d0e0e442dce33c60201af97522fbc16550a0
}
