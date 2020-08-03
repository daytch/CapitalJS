const { authJwt } = require("../middlewares");
const controller = require("../controllers/faq.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/faq", [authJwt.verifyToken], controller.getFaq);

  app.post("/api/faq", [authJwt.verifyToken], controller.saveFaq);

  app.put( "/api/faq/:id", [authJwt.verifyToken], controller.updateFaq);

  app.delete("/api/faq/:id", [authJwt.verifyToken], controller.deleteFaq);
};