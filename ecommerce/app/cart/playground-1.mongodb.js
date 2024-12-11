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

// console.log(db.getCollection('carts').find({}))
// Insert a few documents into the sales collection.
db.getCollection('products').insertMany([
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
}]);
// {
//     id:'123',
//     name:'Hat',
//     imageUrl:'hat.jpg',
//     description:'Cheer the team in style with our hat',
//     price:29,
// },{
//     id:'234',
//     name:'Mug',
//     imageUrl:'mug.jpg',
//     description:'Enjoy every sip of morning coffee or tea with this remarkable high quality mug',
//     price:16,
// },
//console.log(db.getCollection('products').find({}))