const mongoose = require("mongoose");

const placeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  temperatureRange: {
    minTemp: {
      type: Number, // In degrees Celsius
      required: true,
    },
    maxTemp: {
      type: Number, // In degrees Celsius
      required: true,
    },
  },
  popularActivities: {
    type: [String], // Array of popular activities (e.g., skiing, snowboarding, etc.)
    required: true,
  },
  bestTimeToVisit: {
    type: String, // E.g., "December to February"
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  imageUrl: {
    type: [String], // URL to an image of the place
    trim: true,
  },
  location: {
    name: String,
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true,
    },
  },
  city: {
    type: String,
  },
  pincode: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const place = mongoose.model("place", placeSchema);

module.exports = place;
module.exports = placeSchema;
