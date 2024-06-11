
const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017/Employee';

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB successfully');

        const db=client.db('Employee');
        const collection=db.collection('products');

        const cursor=collection.find({});

        const ackresult= await collection.insertOne({
            _id:8,
            firstName: 'Arneeth',
            lastName: 'Laya',
            gender: 'male',
            email: 'arneeth.laya@abc.com',
            salary: 5000,
            department: { name: 'Developer' }
        })

        await cursor.forEach(record => {
            console.log(record)
        });
        await client.close();
        
    } 
    
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call the function to connect
connectToMongoDB();

