import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/KPFashion";
const client = new MongoClient(uri, {
  useNewUrlParser: true,  // Keep this if you need to use the new URL string parser
  // useUnifiedTopology is no longer needed
});

client.connect(err => {
  if (err) {
    console.error('Failed to connect to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');
  // Perform operations
});

