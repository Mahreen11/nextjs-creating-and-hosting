import ShoppingCartList from "./ShoppingCartList";

export const dynamic = 'force-dynamic';

export default async function CartPage(){
    //display another list in user cart
   console.log('Site URL:', process.env.NEXT_PUBLIC_SITE_URL);
   const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL +'/api/users/2/cart/combined',
    {cache:'no-cache',
      headers:{
      'Content-Type': 'application/json',
      //'User-agent': 'learning app',
    }}
  );
   const cartProducts = await response.json();

   return (
    <ShoppingCartList initialCartProducts={cartProducts}/>
   )
}