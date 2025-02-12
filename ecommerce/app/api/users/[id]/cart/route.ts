import { NextRequest } from 'next/server';
import { connectToDb } from '../../../db';
import { Db } from 'mongodb';
import { products } from '@/app/product-data';
import { stringify } from 'querystring';
import { pid } from 'process';

type shoppingcart = Record<string,string[]>
// const carts:shoppingcart = {
//     '1':['098','987'],
//     '2':['123','234'],
//     '3':['345']
// }
type Params ={
    id:string;
}

type CartItem = {
    pid:string,
    quantity:number,
}
type UserCart = {
     userId:string,
     cartItems: CartItem[];

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
        const cartIds = cartItems.map((item: CartItem)=> item.pid)

        const cartProducts = await db.collection('products').find({id:{$in:cartIds}}).toArray();

        return new Response(JSON.stringify(cartProducts),{
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

export async function POST(request:NextRequest,{ params }:{ params : Params}){
    try{
        const { db } = await connectToDb();
        const userId = params.id;

        const body:CartItem = await request.json();
        const productId = body.pid;
        //getting the products in cart
        
        const userCart = await db.collection('carts').findOne({userId});
        if(!userCart){
            return new Response(JSON.stringify([]),{
                status:200,
                headers:{
                    'Content-Type':'application/json'
                }  
            })
        }
        const existingCartItem = userCart.cartItems.find((item:CartItem)=> item.pid === productId);
        let updatedCart;

       if(existingCartItem){
            const updateResult = await db.collection('carts').updateOne(
                {userId,"cartItems.pid":productId},
                {$inc:{"cartItems.$.quantity":1}}
            )
          
            return new Response(JSON.stringify({ message: "Quantity incremented", updateResult }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
              });

       }
       else{
        const updateResult = await db.collection('carts').updateOne(
            { userId },
            { $push: { cartItems: { pid: productId, quantity: 1 } } }
          );
     
          return new Response(JSON.stringify({ message: "Item added to cart", updateResult }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
          });

       }


    }catch(error){
        console.error("Internal Server Error", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
             status: 500,
             headers: { 'Content-Type': 'application/json' }
    });
    }
 
}

export async function DELETE(request:NextRequest,{ params }:{ params : Params}){
    try{
        const { db } = await connectToDb();
        const userId = params.id;

        const body:CartItem = await request.json();
        const productId = body.pid;
        //getting the products in cart
        
        const userCart = await db.collection('carts').findOne({userId});
        if(!userCart){
            return new Response(JSON.stringify([]),{
                status:200,
                headers:{
                    'Content-Type':'application/json'
                }  
            })
        }
        const existingCartItem = userCart.cartItems.find((item:CartItem)=> item.pid === productId);
        //for the case to remove item completely


       if(existingCartItem){
        if(existingCartItem.quantity>1){
            const updateResult = await db.collection('carts').updateOne(
                {userId,"cartItems.pid":productId},
                {$inc:{"cartItems.$.quantity":-1}}
            )
            return new Response(JSON.stringify({ message: "Quantity decremented", updateResult }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
              });

        }
           
       else{
        const updateResult = await db.collection('carts').updateOne(
            { userId },
            { $pull: { cartItems: { pid: productId } } },
          );
          return new Response(JSON.stringify({ message: "Item removed", updateResult }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
          });

       }
    }

    }catch(error){
        console.error("Internal Server Error", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
             status: 500,
             headers: { 'Content-Type': 'application/json' }
    });
    }
}

   

// export async function DELETE(request:NextRequest,{ params }:{ params : Params}){

//     const { db } = await connectToDb();


//     const userId = params.id;
//     const body: CartBody = await request.json();
//     const productId = body.productId;

//     const updatedCart = await db.collection('carts').findOneAndUpdate(
//         {userId},
//         { $pull: {cartIds:productId }},
//         { returnDocument:'after' },
    
//     );
//     if(!updatedCart){
//         return new Response(JSON.stringify([]),{
//             status:202,
//             headers:{
//                 'Content-Type':'application/json'
//             }
//         })
//     }

//     const cartProducts = await db.collection('products').find({ id: {$in:updatedCart.cartIds}}).toArray();
//     return new Response(JSON.stringify(cartProducts),{
//         status:202,
//         headers:{
//             'Content-Type':'application/json'
//         }
//     })
//  }

