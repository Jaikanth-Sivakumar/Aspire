const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017/';

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
async function connectToMongoDB() {
    try {
        await client.connect();

        const db = client.db('Employee');

        const collection = db.collection('products');

        

        await collection.updateMany(
            { _id: '8' }, 
            { $set: { firstName: 'Jaikanth', salary: 6000 } } 
        );

        const cursor = collection.find({});

        await cursor.forEach(record => {
            console.log(record);   
        });
        await client.close();  
    }
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToMongoDB();