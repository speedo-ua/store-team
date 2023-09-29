import Goods from "./data/goods.json"


export async function GET (request: Request) {
    
    return Response.json(Goods)
}
