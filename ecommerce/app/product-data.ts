export interface Product {
    id: string;
    imageUrl: string;
    name: string;
    description: string;
    price: number;
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