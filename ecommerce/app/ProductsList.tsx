'use client';

import { Product } from "./product-data";
import Image from 'next/image';
import Link from 'next/link'
import { stringify } from "querystring";
import { useState } from "react";
import { useEffect } from "react";

export default function ProductsList({ products,initialCartProducts = [] }:{ products:Product[], initialCartProducts:Product[]}){
   
    const [cartProducts,setCartProducts] = useState(initialCartProducts)
    const [counts,setCounts] = useState<{[key:string]:number}>({});


    async function fetchCart(){
        try{
            const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL+'/api/users/2/cart/details',{
                method:"GET",
                headers:{
                    'Content-Type':'application/json',
                }
            });
            if (!response.ok) {
                console.error('Error fetching cart data');
                return;
              }
            const data = await response.json();
            const initialCounts = data.reduce((acc: { [key: string]: number }, item: { pid: string; quantity: number })=>{
                acc[item.pid]=item.quantity;
                return acc;
            },{})
            
            setCounts(initialCounts);
        }
        catch(error){
            console.log('Fecth cart error ',error)

        }
    }
    useEffect(() => {
        fetchCart();
        const intervalId = setInterval(fetchCart, 10000);
        return () => clearInterval(intervalId);
      }, []);


    // async function handleInc(productId:string){
    //     setCounts(prevCount  => (
    //         {
    //             ...prevCount,[productId]:(prevCount[productId]||0)+1
    //         }
    //     ));
    // }
    // async function handleDec(productId:string){
    //     setCounts(prevCount  => (
    //         {   
    //             ...prevCount,[productId]:(prevCount[productId]||0)-1     
    //         }
    //     ));
    // }


    async function addToCart(productId: string,quantity:number=1){
        const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL  + '/api/users/2/cart',{
            method:"POST",
            body: JSON.stringify({
                pid: productId,
                quantity
            }),
            headers:{
                'Content-Type':'application/json',
            }
        });
        const updatedCartProducts = await response.json();
        setCartProducts(updatedCartProducts);
        setCounts((prev)=>({
            ...prev,
            [productId]:(prev[productId]||0)+quantity
        }));
        return updatedCartProducts;

    }



    function productIsInCart(productId: string) {
        return cartProducts.some(cp => cp.id === productId);
    }

    async function removeFromCart(productId: string,quantity:number=-1){
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
        const updatedCartProducts = await response.json();
        setCartProducts(updatedCartProducts);
        //it is not decrementing
        setCounts((prev) => {
            const currentCount = prev[productId] || 0;
            if (currentCount > 1) {
                return { ...prev, [productId]: currentCount - 1 };
            } else {
                const newCounts = { ...prev };
                delete newCounts[productId];
                return newCounts;
            }
            
          });
        return updatedCartProducts;

    }

    return (
      
            <div className="container px-6 py-8 mx-auto">
                <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">         
            {products.map(product =>(
                <div key={product.id}>
                <Link href={`/products/${product.id}`}>
                <Image src={'/'+product.imageUrl} className="object-cover w-full rounded-md h-72 xl:h-80" alt="Prodcut Image" width={150} height = {150} />    
                    <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">{product.name}</h4>
                    <p className="text-blue-500">${product.price}</p>  
                </Link>
                    <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700" onClick={async (e)=> {
                            e.preventDefault();
                            addToCart(product.id,1)
                            }
                            }>Add to Cart</button>
                            <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700" onClick={async (e)=> {
                            e.preventDefault();
                            await addToCart(product.id,1)
                            }
                            }>+</button>
                            <span>{counts[product.id]||0}</span>
                            <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700" onClick={async (e)=> {
                            e.preventDefault();
                            await removeFromCart(product.id,1)
                            }
                            }>-</button>
                
                </div>           
            ))}  
            </div>
                
            
        </div>
    )
}