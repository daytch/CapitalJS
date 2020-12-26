const { authJwt } = require("../middlewares");
const controller = require("../controllers/order.controller");


module.exports = function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

   app.post("/api/order/save", controller.save)

   app.get("/api/order/load", controller.load)

   app.post("/api/order/byid",controller.byid)


};