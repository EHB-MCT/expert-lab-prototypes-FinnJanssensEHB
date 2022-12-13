const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const port = 3000;
const DataSize = 100;

// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:50481");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.get("/schoenen", (req, res) => {
  fetchTitles().then((data) => res.json(data));
});

app.listen(port, () => {
  console.log(`Torfs API listening on port ${port}`);
});

const fetchTitles = async () => {
  try {
    const response = await axios.get(
      `https://www.torfs.be/nl/heren/schoenen/?cgid=Heren-Schoenen&start=0&sz=${DataSize}`
    );

    const html = response.data;

    const $ = cheerio.load(html);

    const data = [];

    $("div.product").each((_idx, el) => {
      let brand = $(
        "div.product-tile__content > span > div:first-child > a",
        el
      ).text();
      brand = brand.substring(1, brand.length - 1);

      let type = $(
        "div.product-tile__content > span > div:nth-child(2) > a",
        el
      ).text();
      type = type.substring(1, type.length - 1);

      let price = $("div.product-tile__price span.value", el).text();
      price = price.substring(1, price.length - 1);
      price = price.split(/\r?\n/)[0];

      console.log(price);

      let imageURL =
        $("div.product-tile__image picture img.tile-image", el).attr(
          "data-src"
        ) ||
        $("div.product-tile__image picture img.tile-image", el).attr("src");
      imageURL = imageURL.substring(0, imageURL.length - 7);

      data.push({ brand, type, price, imageURL });
    });

    return data;
  } catch (error) {
    throw error;
  }
};
