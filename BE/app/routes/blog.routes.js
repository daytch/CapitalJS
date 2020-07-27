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


app.get("/api/blog/load", controller.load);



app.post("/api/blog/save", controller.save);

app.post("/api/blog/delete", controller.delete);

};