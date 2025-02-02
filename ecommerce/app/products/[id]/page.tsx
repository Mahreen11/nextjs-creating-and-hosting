import NotFoundPage from "@/app/not-found";
import ReviewList from "@/app/ReviewList";
import Link from 'next/link';
import { review } from "@/app/product-data";

export const dynamic = 'force-dynamic';

export default async function ProductDetailPage({params}:{params:{id:string}}){
    const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL  + '/api/products/'+params.id);
    const product = await response.json();

    if(!product){
        return <NotFoundPage/> 
    }
    const filteredReviews = review.filter((review) => review.product_id === params.id);
    return (
        
        <div className="container mx-auto p-8 flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-4 md:mb-0 md:mr-8">
                <img src={'/'+product.imageUrl} alt="Product Image" 
                className="w-full h-auto rounded-lg shadow-md" />
            </div>
            <div className="md:w-1/2">
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-2xl text-gray-600 mb-6">${product.price}</p>
                <h3 className="text-2xl font-semibold mb-2">Description</h3>
                <p className="text-gray-700">{product.description}</p>
            </div>
           <div className="absolute bottom-0">
                <Link href= {params.id + "/review"}>
                    <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Review Product</button>
                </Link>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow mt-4 mb-4 absolute bottom-9">
                <h2 className="text-lg font-semibold mb-2">Comments</h2>
                        <ReviewList reviews={filteredReviews}/>  
            </div>
        </div>
        
    );
   
}