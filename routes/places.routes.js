const express = require("express");
const {
  getPlacesList,
  addPlaces,
} = require("../controllers/places.controller");

const router = express.Router();

router.get("/place-list", getPlacesList);

router.post("/add-place", addPlaces);

module.exports = router;
