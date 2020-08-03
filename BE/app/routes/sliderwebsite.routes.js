const { authJwt } = require("../middlewares");
const controller = require("../controllers/sliderWebsite.controller");


module.exports = function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });


app.get("/api/sliderWebsite/load",[authJwt.verifyToken], controller.load);



app.post("/api/sliderWebsite/save",[authJwt.verifyToken], controller.save);

app.post("/api/sliderWebsite/delete",[authJwt.verifyToken], controller.delete);

};