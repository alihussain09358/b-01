const winterPlaces = require("../models/winter.model");

exports.getModel = (season) => {
  let model;
  switch (season) {
    case "winter":
      model = winterPlaces;
      break;
    default:
      break;
  }
  return model;
};
