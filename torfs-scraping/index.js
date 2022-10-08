const axios = require("axios");
const cheerio = require("cheerio");

const fetchTitles = async () => {
  try {
    const response = await axios.get("https://www.torfs.be/nl/heren/schoenen/");

    const html = response.data;

    const $ = cheerio.load(html);

    const data = [];

    $("div.product").each((_idx, el) => {
      const brand = $(
        "div.product-tile__content > span > div:first-child > a",
        el
      ).text();
      const type = $(
        "div.product-tile__content > span > div:nth-child(2) > a",
        el
      ).text();
      data.push({ brand, type });
    });

    return data;
  } catch (error) {
    throw error;
  }
};

fetchTitles().then((data) => console.log(data));
