const { authJwt } = require("../middlewares");
const controller = require("../controllers/career.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/career", [authJwt.verifyToken], controller.getCareer);

  app.post("/api/career", [authJwt.verifyToken], controller.saveCareer);

  app.put( "/api/career/:id", [authJwt.verifyToken], controller.updateCareer);

  app.delete("/api/career/:id", [authJwt.verifyToken], controller.deleteCareer);
};