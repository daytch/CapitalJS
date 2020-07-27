const { authJwt } = require("../middlewares");
const controller = require("../controllers/blogCategory.controller");


module.exports = function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });


app.get("/api/blogcategory/load", controller.load);



app.post("/api/blogcategory/save", controller.save);

app.post("/api/blogcategory/delete", controller.delete);

};