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
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-8 mx-auto">
                <div className="lg:flex lg:-mx-2">  
              
                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                       
            {products.map(product =>(
                
                <Link key={product.id} href={`/products/${product.id}`}>
                <Image src={'/'+product.imageUrl} className="object-cover w-full rounded-md h-72 xl:h-80" alt="Prodcut Image" width={150} height = {150} />    
                    <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">{product.name}</h4>
                    <p className="text-blue-500">${product.price}</p>
                    {
                        <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700" onClick={ (e)=> {
                            e.preventDefault();
                            addToCart(product.id)
                            }
                            }>Add to Cart</button>
                    }
                    
                </Link>          
            ))} 
            
            </div>
                
            </div>
        </div>
    </section>
    )
}