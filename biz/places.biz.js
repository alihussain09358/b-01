const { getModel } = require("../helpers/places.helper");

exports.getListOfPlacesBySeason = async (req) => {
  try {
    const model = getModel(req.query);
    const result = await model.find();
    return result;
  } catch (error) {
    return false;
  }
};

exports.addPlacesBySeason = async (req) => {
  try {
    await getModel(req.body.season).create({
      ...req.body,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
