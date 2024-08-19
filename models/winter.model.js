const mongoose = require("mongoose");

const placeSchema = require("./place.model");

const winterPlaces = mongoose.model("winterPlace", placeSchema, "winterPlaces");

module.exports = winterPlaces;
