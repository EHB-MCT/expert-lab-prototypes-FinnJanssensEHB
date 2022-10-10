const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const port = 3000;
const DataSize = 10;

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
