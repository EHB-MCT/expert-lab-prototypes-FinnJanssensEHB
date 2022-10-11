require("dotenv").config();
const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = process.env.MONGODB_URI;
const client = new MongoClient(url);

// Database Name
const dbName = process.env.MONGODB_DATABASE;

async function findOccurences(skip, limit) {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection(process.env.MONGODB_COLLECTION);

  // define an empty query document
  const query = {};
  // sort in descending (-1) order by length
  const cursor = collection.find(query).limit(limit).skip(skip);
  await cursor.forEach((i) => console.log(i.recordedBy));

  return "done.";
}

findOccurences(0, 15)
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
