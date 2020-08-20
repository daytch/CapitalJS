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



    /**
* @swagger
* /api/blogcategory/load:

*   post:
*     tags:
*       - Blog Category
*     name: Load
*     summary: Load Blog Category
*     description:  ketika isinya {} atau object kosong maka akan load semua,<br> untuk load salah satu gunakan {"_id" &#58; value}
*     consumes:
*       - application/json
*     parameters:
*       - name: x-access-token
*         in: header
*       - name: request
*         in : body
*         type: object


*         schema:
*           "$ref": "#/definitions/blogCategoryLoad"

*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system
*definitions:
*   blogCategoryLoad:
*       type: object
*       properties:
*           _id:
*               type: string
*               example: 5f1c548bf377ad2b40d5b1a5
*/
app.get("/api/blogcategory/load",[authJwt.verifyToken], controller.load);
app.post("/api/blogcategory/load", controller.load);

   /**
* @swagger
* /api/blogcategory/save:

*   post:
*     tags:
*       - Blog Category
*     name: Save
*     summary: Save Blog Category
*     description: hilangkan "_id" untuk save record baru 
*     consumes:
*       - application/json
*     parameters:
*       - name: x-access-token
*         in: header
*       - name: request
*         in : body
*         type: object


*         schema:
*           "$ref": "#/definitions/blogCategorySave"

*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system
*definitions:
*   blogCategorySave:
*       type: object
*       properties:
*           _id:
*               type: string
*               example: 5f1c548bf377ad2b40d5b1a5
*           name:
*               type: string 
*           description:
*               type: string
*               example: blog untuk kategory makanan manis
*/

app.post("/api/blogcategory/save",[authJwt.verifyToken], controller.save);


   /**
* @swagger
* /api/blogcategory/delete:

*   post:
*     tags:
*       - Blog Category
*     name: Delete
*     summary: Delete Blog Category
*     description: Delete
*     consumes:
*       - application/json
*     parameters:
*       - name: x-access-token
*         in: header
*       - name: request
*         in : body
*         type: object


*         schema:
*           "$ref": "#/definitions/blogCategoryLoad"

*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system

*/
app.post("/api/blogcategory/delete",[authJwt.verifyToken], controller.delete);

};