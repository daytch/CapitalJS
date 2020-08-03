const { authJwt } = require("../middlewares");
const controller = require("../controllers/blog.controller");


module.exports = function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });


app.get("/api/blog/load",[authJwt.verifyToken], controller.load);



app.post("/api/blog/save",[authJwt.verifyToken], controller.save);

app.post("/api/blog/delete",[authJwt.verifyToken], controller.delete);

};