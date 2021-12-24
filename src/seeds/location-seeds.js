const { Location } = require("../models");

const locationData = [
  {
    location_name: "Birmingham Warehouse",
  },
  {
    location_name: "Manchester Warehouse",
  },
  {
    location_name: "London Warehouse",
  },
  {
    location_name: "Glasgow Warehouse",
  },
  {
    location_name: "Bristol Warehouse",
  },
  {
    location_name: "Liverpool Warehouse",
  },
  {
    location_name: "Southampton Warehouse",
  },
];

const seedLocation = () => Location.bulkCreate(locationData);

module.exports = seedLocation;
