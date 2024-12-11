import ProductsList from "../ProductsList";

export const dynamic = 'force-dynamic';

export default async function ProductsPage(){
    const response = await fetch(`https://urban-umbrella-4vxpgvr4wqwhjx6x-3000.app.github.dev/api/products`,{method:"GET"});

    const products = await response.json();

    const responsenext = await fetch(process.env.NEXT_PUBLIC_SITE_URL  + '/api/users/2/cart'
    );

    const cartProducts = await responsenext.json();

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">Products</h1>
            <ProductsList products={products} initialCartProducts={cartProducts}/>
        </div>
    );
}