const express = require("express");
const router = express.Router();
const placesRoute = require("./places.routes");

const routes = [
  {
    path: "/places",
    route: placesRoute,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
