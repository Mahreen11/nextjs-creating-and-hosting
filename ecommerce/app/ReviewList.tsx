import { Review } from "./product-data";
import { Product } from "./product-data";

export default function ReviewList( {reviews}: {reviews:Review[]} ){
    return(
        <div>
            {
                reviews.map(review => (
                    <div key={review.review_id}>
                        <h3 className="text-lg color-red-300">{review.overall}</h3>
                        <div className="border border-gray-300 p-2 rounded-lg mb-2">
                            <h2>{review.comment}</h2>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}