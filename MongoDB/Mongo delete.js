const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/';

const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        await client.connect();

        const db = client.db('Employee');

        const collection = db.collection('products');

        // await collection.deleteOne({price:{$gt:500}});

        await collection.deleteMany({ _id: 8 });

        const cursor = collection.find({});

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