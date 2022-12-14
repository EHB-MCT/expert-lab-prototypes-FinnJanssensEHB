const { Client } = require("@googlemaps/google-maps-services-js");
const { format: prettyFormat } = require("pretty-format"); // CommonJS
require("dotenv").config();

const client = new Client({});

const args = {
  params: {
    key: process.env.MAPS_API_KEY,
    location: { lat: 50.847838, lng: 4.350656 },
    radius: 1500,
    keyword: "foto",
  },
};

client.placesNearby(args).then((gcResponse) => {
  const str = gcResponse.data.results;
  console.log(prettyFormat(str));
});
