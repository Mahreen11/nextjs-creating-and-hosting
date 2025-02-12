import { NextRequest } from 'next/server';
import { NextApiResponse } from 'next';
import { Product,CartItem} from '../../../../../product-data';
import { connectToDb } from '@/app/api/db';

type Params={
    id:string,
}
type CombinedCartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
  };
  
export async function GET(request:NextRequest,{ params }:{ params : Params})
{
   
    try{
            const { db } = await connectToDb();
            const userId = params.id;
            const userCart = await db.collection('carts').findOne({userId});
            if (!userCart) {
                return new Response(JSON.stringify({message:"Cart Not Found"}),{status:404})
            }
            const cartItems: CartItem[] = userCart.cartItems;
            const productIds = cartItems.map((item) => item.pid);
            const products = await db.collection('products').find({ id: { $in: productIds } }).toArray();
            const combined: CombinedCartItem[] = products.map((product)=>{
                const cartItem = cartItems.find((item)=>item.pid===product.id);
                return {
                    id:product.id,
                    name:product.name,
                    price:product.price,
                    quantity:cartItem? cartItem.quantity:0
                };

            });
            return new Response(JSON.stringify(combined),{
                status:200
            });
        } catch (error) {
            console.error('Error fetching combined cart data:', error);
            return new Response(JSON.stringify({message:"Cart Not Found"}),{status:404})
        }
  
}