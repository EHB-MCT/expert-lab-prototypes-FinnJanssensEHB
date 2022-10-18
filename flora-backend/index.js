require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 7000;
app.use(cors());

const { MongoClient } = require("mongodb");

const url = process.env.MONGODB_URI;
const client = new MongoClient(url);

const dbName = process.env.MONGODB_DATABASE;

async function findOccurences(skip, limit, q, sort_by, order_by) {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection(process.env.MONGODB_COLLECTION);
  // const search = [
  //   {
  //     $search: {
  //       autocomplete: {
  //         path: "family",
  //         query: q,
  //       },
  //     },
  //   },
  // ];

  let order_by_mdb = -1;
  if (order_by == "desc") {
    order_by_mdb = -1;
  } else if (order_by == "asc") {
    order_by_mdb = 1;
  }

  const sort = JSON.parse(`{ "${sort_by}": ${order_by_mdb} }`);
  console.log(sort);
  const cursor = collection
    .find({})
    // .aggregate(search)
    .sort(sort)
    .limit(limit)
    .skip(skip);
  const results = await cursor.toArray();
  const count = await collection.countDocuments();
  // console.log("results 1", results);
  return { count, results };
}

app.get("/occurences", async (req, res) => {
  const page = parseInt(req.query.page) || 0;
  const pageSize = parseInt(req.query.pageSize) || 10;
  const query = req.query.q || "";
  const sort_by = req.query.sort_by || "eventDate";
  const order_by = req.query.order_by || "desc";
  await findOccurences(page, pageSize, query, sort_by, order_by)
    .then((data) =>
      res.json({
        page: page,
        pageSize: pageSize,
        count: data.count,
        results: data.results,
      })
    )
    .catch(console.error)
    .finally(() => client.close());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
