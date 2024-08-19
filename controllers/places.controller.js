const {
  getListOfPlacesBySeason,
  addPlacesBySeason,
} = require("../biz/places.biz");

exports.getPlacesList = async (req, res) => {
  try {
    const places = await getListOfPlacesBySeason(req);
    return res.status(200).json({
      success: true,
      result: places,
      message: "List fecthed successfully",
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: "failed to get list",
    });
  }
};

exports.addPlaces = async (req, res) => {
  try {
    const result = await addPlacesBySeason(req);
    return res.status(200).json({
      success: result,
      message: "place added successfully",
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      success: true,
      message: "failed to add place",
    });
  }
};
