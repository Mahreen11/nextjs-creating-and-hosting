'use client';

import { useState } from 'react';
import { Product } from '../product-data';
import Link from "next/link";

export default function ShoppingCartList({ initialCartProducts }: { initialCartProducts: Product[] }){

    const [cartProducts,setCartProducts] = useState(initialCartProducts);

    async function removeFromCart(productId: string){
        const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL  + '/api/users/2/cart',{
            method:"DELETE",
            body: JSON.stringify({
                productId,
            }),
            headers:{
                'Content-Type':'application/json',
            }
        });
        const updatedCartProducts = await response.json();
        setCartProducts(updatedCartProducts);

    }



    return (
    <div className="container mx-auto p-8">
    <h1 className="text-4xl font-bold mb-4 mt-4 w-full flex">Shopping Cart</h1>
    <ul className="space-y-4">
    {cartProducts.map(product => (
        <li key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
            <Link href={`/products/${product.id}`}>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
               <div className="flex justify-end">
               <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={ (e)=> {
                            e.preventDefault();
                            removeFromCart(product.id);
                            }
                        }>Remove from Cart
                </button>
               </div>
            </Link>

        </li>
    ))}</ul>
    <Link href={`/checkout`}>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Proceed to Checkout
            </button>
                </Link>
    </div>)

}