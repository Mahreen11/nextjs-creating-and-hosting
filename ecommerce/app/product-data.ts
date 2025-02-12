export interface Product {
    id: string;
    imageUrl: string;
    name: string;
    description: string;
    price: number;
}

export interface Review {
    review_id:string;
    product_id:string;
    overall:string;
    comment:string;
}
export interface CartItem {
    pid:string,
    quantity:number,
}
export interface Cart{

        userId:string,
        cartItems: CartItem[];
   
}

export const products: Product[] = [{
    id:'123',
    name:'Hat',
    imageUrl:'hat.jpg',
    description:'Cheer the team in style with our hat',
    price:29,
},{
    id:'234',
    name:'Mug',
    imageUrl:'mug.jpg',
    description:'Enjoy every sip of morning coffee or tea with this remarkable high quality mug',
    price:16,
},
{
    id:'345',
    name:'Apron',
    imageUrl:'apron.jpg',
    description:'Enjoy cooking with your loved ones, carefree of the mess, with our new apron',
    price:26,
},
{
    id:'456',
    name:'Shirt',
    imageUrl:'shirt.jpg',
    description:'Have the best style on your first date',
    price:29,
}]

export const review: Review[] = [
    {
        review_id:'1',
        product_id:'098',
        overall:'excellent',
        comment:'I liked it very much!',
    },
    {
        review_id:'2',
        product_id:'098',
        overall:'poor',
        comment:'Not sure, something off about this product but service was okay.',
    },
    {
        review_id:'3',
        product_id:'987',
        overall:'average',
        comment:'Amazing product, takes too long to deliver',
    },
    {
        review_id:'3',
        product_id:'876',
        overall:'excellent',
        comment:'Highly Recommended',
    }
]