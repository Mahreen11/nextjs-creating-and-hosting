# nextjs-creating-and-hosting
#E-Commerce Web App
##Overview

This is a basic E-Commerce web application built with Next.js, Tailwind CSS, and MongoDB. It allows users to browse products, view detailed product information, add/remove products from the cart, and view product reviews.
Link - https://nextjs-creating-and-hosting-apor.vercel.app/products

##Features

Product Listing Page: Fetches and displays products from MongoDB.

Product Details Page: Displays detailed product information based on product_id.

**Cart Functionality:**

Add products to the cart using POST.

Remove products from the cart using DELETE.

**Product Reviews:**

Fetched via GET (currently manually added to the database).

Backend implementation for submitting reviews is in progress.

##Technologies Used

-**Frontend**: Next.js, Tailwind CSS

-**Backend**: Node.js, MongoDB (Cloud)

-**Database**: MongoDB Atlas Cloud (connected via userID and password)

-**Development Environment**: GitHub Codespaces, VS Code

##Installation & Setup

1.Clone the repository:

git clone https://github.com/yourusername/ecommerce-nextjs.git
cd ecommerce-nextjs

2.Install dependencies:

npm install

3.Create a .env.local file and configure MongoDB credentials:

MONGODB_URI=your_mongodb_connection_string

4.Run the development server:

npm run dev

The app will be available at http://localhost:3000

##API Endpoints

-Fetch Products: GET /api/products

-Fetch Product Details: GET /api/products/:id

-Add to Cart: POST /api/cart

-Remove from Cart: DELETE /api/cart/:id

-Fetch Reviews: GET /api/reviews/:productId

-(Upcoming) Submit Review: POST /api/reviews

##Future Enhancements

-Implement user authentication for personalized cart and reviews.

-Improve UI/UX design.

-Optimize database queries for better performance.

-Complete the backend for submitting product reviews.

##Contributing

Feel free to fork this repository, create a new branch, and submit a pull request for improvements or bug fixes.
