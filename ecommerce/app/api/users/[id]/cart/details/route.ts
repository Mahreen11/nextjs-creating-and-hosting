import { NextRequest} from "next/server";
import { connectToDb } from "@/app/api/db";
import { Db } from "mongodb";

type Params={
    id:string;
}

type CartItem={
    pid:string;
    quantity:number;
}

type UserCart = {
    userId:string,
    cartitems:CartItem[];
}
export async function GET(request:NextRequest,{ params }:{ params : Params}){
    try{
        const { db } = await connectToDb();
        const userId = params.id;
        const userCart = await db.collection('carts').findOne({userId});
        if(!userCart){
            return new Response(JSON.stringify([]),{
                status:200,
                headers:{
                    'Content-Type':'application/json'
                }  
            })
        }
        const cartItems = userCart.cartItems;
        return new Response(JSON.stringify(cartItems),{
            status:200,
            headers:{
                'Content-Type':'application/json'
            }
        })
    }
    catch(error){
        console.error("error fetching cart products",error)
        return new Response(JSON.stringify({error:"Internal Server Error"}),{
            status:500,
            headers:{ 'Content-Type':'application/json'}
        });
    }
    
}