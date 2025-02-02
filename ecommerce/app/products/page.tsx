import ProductsList from "../ProductsList";

export const dynamic = 'force-dynamic';

export default async function ProductsPage(){
    const bodyParser = require("body-parser"); 
    
    const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL +'/api/products',{
        headers:{
            'Content-Type': 'application/json'
          }});
    
    const products = await response.json();
//accept: 'application/json',
//'User-agent': 'learning app',
    const responsenext = await fetch(process.env.NEXT_PUBLIC_SITE_URL +'/api/users/2/cart',{
        headers:{
            'Content-Type':'application/json',
          }
    });

    const cartProducts = await responsenext.json();
    //initialCartProducts={cartProducts}
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">Products</h1>
            <ProductsList products={products} initialCartProducts={cartProducts} />
        </div>
    );
}