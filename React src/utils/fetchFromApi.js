/*
let baseUrl = "https://fakestoreapi.com";

async function fetchFromApi(path) {
  const res = await fetch(`${baseUrl}/${path}`);
  const data = await res.json();
  return data;
}

export default fetchFromApi;


let baseUrl = "mongodb://localhost:27017/KPFashion";

async function fetchFromApi(path) {
  const res = await fetch(`${baseUrl}.${path}`);
  console.log(res);
  const data = await res.json();
  return data;
}

export default fetchFromApi;
*/
/*
import { connectToDatabase } from "./ConnectMongo.js";

async function fetchFromApi(collectionName, query = {}) {
  const db = await connectToDatabase();
  const collection = db.collection(collectionName);
  const data = await collection.find(query).toArray();
  console.log(data);
  return data;
}

export default fetchFromApi;
*/

async function fetchFromApi(path) {
  const res = await fetch(`http://localhost:5000/${path}`);
  const data = await res.json();
  return data;
}
export default fetchFromApi;
