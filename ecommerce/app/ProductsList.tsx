'use client';

import { Product } from "./product-data";
import Image from 'next/image';
import Link from 'next/link'
import { useState } from "react";


export default function ProductsList({ products,initialCartProducts = [] }:{ products:Product[], initialCartProducts:Product[]}){
    const [cartProducts,setCartProducts] = useState(initialCartProducts)

    async function addToCart(productId: string){
        const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL  + '/api/users/2/cart',{
            method:"POST",
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


    function productIsInCart(productId: string) {
        return cartProducts.some(cp => cp.id === productId);
    }

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
        <div>
            {products.map(product =>(
                
                <Link key={product.id} href={`/products/${product.id}`}>
                <Image src={'/'+product.imageUrl} alt="Prodcut Image" width={150} height = {150} />    
                    <h2>{product.name}</h2>
                    <p>${product.price}</p>
                    {
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={ (e)=> {
                            e.preventDefault();
                            addToCart(product.id)
                            }
                            }>Add to Cart</button>
                    }
                    
                </Link>          
            ))}
        </div>
    )
}