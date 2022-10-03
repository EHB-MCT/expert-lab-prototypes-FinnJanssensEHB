const { Client } = require("@googlemaps/google-maps-services-js");
const { format: prettyFormat } = require("pretty-format"); // CommonJS

const client = new Client({});

// const args = {
//   params: {
//     key: "AIzaSyDLEXwI0TVQdP4HNGan2JKBhWcXSyN-vus",
//     address: "Perth 4WD & Commercial Centre",
//   },
// };

const args = {
  params: {
    key: "AIzaSyDLEXwI0TVQdP4HNGan2JKBhWcXSyN-vus",
    location: { lat: 50.847838, lng: 4.350656 },
    radius: 1500,
    keyword: "foto",
  },
};

client.placesNearby(args).then((gcResponse) => {
  const str = gcResponse.data.results;
  console.log(prettyFormat(str));
});