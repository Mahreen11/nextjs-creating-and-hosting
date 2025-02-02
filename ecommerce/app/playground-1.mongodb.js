/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('ecommerce-nextjs');

// db.getCollection('carts').insertMany([
//     { userId: '1' , cartIds:['123','234'] },
//     { userId: '2' , cartIds:['345','456'] },
//     ]);
// db.getCollection('carts').insertMany([
//     { userId: '2', cartIds: ['098', '987'] }
// ]);
// console.log(db.getCollection('carts').find({}))
// Insert a few documents into the sales collection.
// db.getCollection('products').insertMany([
// {
//     id:'123',
//     name:'Mug',
//     imageUrl:'mug.jpg',
//     description:'a nisi maximus netus montes ex. Ad mattis erat praesent id semper natoque donec phasellus vehicula. Tempus consectetur mus curae aliquet mi faucibus porttitor vitae. Ex eleifend nec platea; suscipit class lobortis. Tortor ut diam eu class sapien ullamcorper.',
//     price:26,
// },
// {
//     id:'234',
//     name:'Apron',
//     imageUrl:'apron.jpg',
//     description:'Ante gravida in nostra gravida nisi maximus netus montes ex. Ad mattis erat praesent id semper natoque donec phasellus vehicula. Tempus consectetur mus curae aliquet mi faucibus porttitor vitae. Ex eleifend nec platea; suscipit class lobortis. ',
//     price:29,
// },
// {
//     id:'345',
//     name:'Shirt',
//     imageUrl:'shirt.jpg',
//     description:'Faucibus facilisi nunc dolor dis vestibulum. Justo eget vehicula ultrices inceptos aptent purus. Vivamus hac turpis luctus ad molestie ad sed at cursus.',
//     price:29,
// }]);
//console.log(db.getCollection('products').find({}))
//db.getCollection('products').deleteMany({});

// db.getCollection('products').deleteMany({});
// db.getCollection('testing').insertMany([ { userId: '1' , cartIds:['123','234'] },
//  { userId: '2' , cartIds:['098','987'] },]);


//db.carts.find({}).pretty();
//db.carts.deleteMany({ "userId": "2" }); 


// db.carts.find();

//db.getCollection('carts').find({}).pretty();

// db.carts.updateOne(
//     { userId: '2' }, // Filter: Find the document with userId '2'
//     { $push: { cartIds: { $each: ['098', '987'] } } } // Append '123' and '456' to cartIds array
//   );
  
// db.getCollection('review').insertMany([
//     {
//         review_id:'1',
//         product_id:'123',
//         overall:'excellent',
//         comment:'I liked it very much!',
//     },
//     {
//         review_id:'2',
//         product_id:'123',
//         overall:'poor',
//         comment:'Not sure, something off about this product but service was okay.',
//     },
//     {
//         review_id:'3',
//         product_id:'234',
//         overall:'average',
//         comment:'Amazing product, takes too long to deliver',
//     },
//     {
//         review_id:'3',
//         product_id:'098',
//         overall:'excellent',
//         comment:'Highly Recommended',
//     }
// ]) ;