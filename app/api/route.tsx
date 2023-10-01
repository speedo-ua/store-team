import { NextResponse } from "next/server";
import Goods from "./data/goods.json"
import mysql, { ConnectionOptions, RowDataPacket } from 'mysql2/promise';


export async function GET (req: Request, res: Response) {

    const getData = async () =>{

        const access: ConnectionOptions = {
            user: 'root',
            database: 'store-team',
        }; 
        const conn = await mysql.createConnection(access);
    
        const [result] = await conn.query<RowDataPacket[]>('SELECT * FROM `product`;');

        await conn.end()

        return result
    };

    const arr = await getData();

    return Response.json(arr);
}


// export async function GET (req: Request) {
    
//     return Response.json(Goods)
// }
