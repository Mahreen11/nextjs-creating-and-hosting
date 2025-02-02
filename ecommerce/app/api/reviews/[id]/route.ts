import { Review } from "@/app/product-data";
import { review } from "@/app/product-data";
import { connectToDb } from "../../db";
import { Db } from 'mongodb';
import { NextRequest } from "next/server";

type Params ={
    id:string;
}

export async function GET(request:NextRequest, {params}:{params:Params}){
    const { db } = await connectToDb();

    const productId = params.id;
    const productReviews = await db.collection('review').findOne(r => r.product_id=== productId );

    if(!productReviews){
        return new Response(JSON.stringify("Product Not Found!"),{
            status:404,
            headers:{
                'Content-Type':'application/json',
            }
        });
    }
    return new Response(JSON.stringify(productReviews),{
        status:200,
        headers:{
            'Content-Type':'application/json',
        }
    })
}



