const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017/';

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
async function connectToMongoDB() {
    try {
        await client.connect();

        const db = client.db('task');

        const collection = db.collection('products');

        const cursor = collection.find({});//spcl mem to store the records
        
        // const askResults = await collection.insertOne({
        //     id: '005',
        //     title: 'Inserted one',
        //     price: 850,
        //     quantity: 2,
        //     total: 850,
        //     discountPercentage: 10.58,
        //     discountPrice: 299
        // });

        // const result = await collection.insertMany([
        //     { id: '006', title: 'Inserted two', price: 950, quantity: 3, total: 950, discountPercentage: 15.00, discountPrice: 399 },
        //     { id: '007', title: 'Inserted three', price: 1050, quantity: 4, total: 1050, discountPercentage: 20.00, discountPrice: 499 }
        // ]);
        // console.log("The new data ", askResults.insertedId);

        // await collection.deleteOne({price:{$gt:500}});

        // await collection.deleteMany({ id: '006' });

        await collection.updateMany(
            { id: '005' }, 
            { $set: { title: 'Premium Sunglasses', price: 900 } } 
        );

        await cursor.forEach(record => {
            console.log(record);   
        });
        await client.close();  
    }
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call the function to connect
connectToMongoDB();