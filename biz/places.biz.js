const winterPlaces = require("../models/winter.model");
const { db } = require("../models/winter.model");

exports.getListOfPlacesBySeason = () => {
  try {
  } catch (error) {}
};

exports.addPlacesBySeason = async (req) => {
  try {
    console.log(req.body, req.body.season);
    await this.getModel(req.body.season).create({
      ...req.body,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

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
