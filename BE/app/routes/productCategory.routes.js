const { authJwt } = require("../middlewares");
const controller = require("../controllers/productCategory.controller");


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
* /api/productCategory/load:

*   post:
*     tags:
*       - Product Category
*     name: Load
*     summary: Load Product Category
*     description:  ketika isinya {} atau object kosong maka akan load semua,<br> untuk load salah satu gunakan {"id" &#58; value}
*     consumes:
*       - application/json
*     parameters:
*       - name: x-access-token
*         in: header
*       - name: request
*         in : body
*         type: object


*         schema:
*           "$ref": "#/definitions/productCategoryLoad"

*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system
*definitions:
*   productCategoryLoad:
*       type: object
*       properties:
*           id:
*               type: string
*               example: 5f1c548bf377ad2b40d5b1a5
*/
app.post("/api/productCategory/load",[authJwt.verifyToken], controller.load);

   /**
* @swagger
* /api/productCategory/save:

*   post:
*     tags:
*       - Product Category
*     name: Save
*     summary: Save Product Category
*     description: hilangkan "id" untuk save record baru 
*     consumes:
*       - application/json
*     parameters:
*       - name: x-access-token
*         in: header
*       - name: request
*         in : body
*         type: object


*         schema:
*           "$ref": "#/definitions/productCategorySave"

*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system
*definitions:
*   productCategorySave:
*       type: object
*       properties:
*           id:
*               type: string
*               example: 5f1c548bf377ad2b40d5b1a5
*           name:
*               type: string 
*           masterStatusId:
*               type: string
*               example: 5f1c548bf37ead2240d5b1a5
*/

app.post("/api/productCategory/save",[authJwt.verifyToken], controller.save);


   /**
* @swagger
* /api/productCategory/delete:

*   post:
*     tags:
*       - Product Category
*     name: Delete
*     summary: Delete Product Category
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
*           "$ref": "#/definitions/productCategoryLoad"

*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system

*/
app.post("/api/productcategory/delete",[authJwt.verifyToken], controller.delete);

};