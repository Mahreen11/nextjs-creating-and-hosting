'use client';

import { useState } from 'react';
import { Product,CartItem } from '../product-data';
import Link from "next/link";
type CombinedCartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};
interface ShoppingCartListProps{
    initialCartProducts:Product[];
    initialCartList:CartItem[];
}
export default function ShoppingCartList({initialCartProducts}:{initialCartProducts:CombinedCartItem[]}){

    const [cartProducts,setCartProducts] = useState(initialCartProducts);

    async function removeFromCart(productId: string,quantity:number){
        const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL  + '/api/users/2/cart',{
            method:"DELETE",
            body: JSON.stringify({
                pid: productId,
                quantity
            }),
            headers:{
                'Content-Type':'application/json',
            }
        });
        const getResponse = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/users/2/cart/combined',{
            method:"GET",
            headers:{
                'Content-Type':'application/json',
            }
        });
        const updatedCartProducts = await getResponse.json();
        setCartProducts(updatedCartProducts);

    }


    
    return (
    <div className="container mx-auto p-8">
    <h1 className="text-4xl font-bold mb-4 mt-4 w-full flex">Shopping Cart</h1>
    <ul className="space-y-4">
        {cartProducts.map((product) => {
          // Find the cart item for the current product based on matching product.id with cartItem.pid
          
          return (
            <li key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
              <Link href={`/products/${product.id}`}>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <p>{product.quantity}</p>
                <p>Total:${product.price * product.quantity}</p>
                </Link>
                <div className="flex justify-end">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={(e) => {
                      // e.preventDefault();
                      removeFromCart(product.id, -1);
                    }}
                  >
                    Remove from Cart
                  </button>
                </div>
              
            </li>
          );
        })}
      </ul>
    <Link href={`/checkout`}>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Proceed to Checkout
            </button>
                </Link>
    </div>)

}