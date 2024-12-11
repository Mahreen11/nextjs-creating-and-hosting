import ShoppingCartList from "./ShoppingCartList";

export const dynamic = 'force-dynamic';

export default async function CartPage(){
    //display another list in user cart
   const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL  + '/api/users/2/cart');
   const cartProducts = await response.json();

   return (
    <ShoppingCartList initialCartProducts={cartProducts}/>
   )
}