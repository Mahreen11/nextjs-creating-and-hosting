'use client';

import { useState } from 'react';
import { Product } from '../product-data';
import Link from "next/link";

export default function ShoppingCartList({ initialCartProducts }: { initialCartProducts: Product[] }){

    const [cartProducts] = useState(initialCartProducts);


    return (
    <>
    <h1 className="text-4xl font-bold mb-4 mt-4 w-full flex">Shopping Cart</h1>
    {cartProducts.map(product => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
            <Link key={product.id} href={"/products/" + product.id}>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
            </Link>
        </div>
    ))}
    </>)

}