const { authJwt } = require("../middlewares");
const controller = require("../controllers/branch.controller");


module.exports = function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });


app.get("/api/branch/load",[authJwt.verifyToken], controller.load);



app.post("/api/branch/save",[authJwt.verifyToken], controller.save);

app.post("/api/branch/delete",[authJwt.verifyToken], controller.delete);

};