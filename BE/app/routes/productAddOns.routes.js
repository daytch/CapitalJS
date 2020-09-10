const { authJwt } = require("../middlewares");
const controller = require("../controllers/productAddOns.Controller");


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
* /api/productAddOns/load:

*   post:
*     tags:
*       - Product AddOns
*     name: Load
*     summary: Load ProductAddOns
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
*           "$ref": "#/definitions/productLoad"

*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system
*definitions:
*   productLoad:
*       type: object
*       properties:
*           id:
*               type: string
*               example: 5f1c548bf377ad2b40d5b1a5
*/
app.post("/api/productAddOns/load",[authJwt.verifyToken], controller.load);

   /**
* @swagger
* /api/productAddOns/save:

*   post:
*     tags:
*       - Product AddOns
*     name: Save
*     summary: Save Product
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
*           "$ref": "#/definitions/productAddOnsSave"

*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system
*definitions:
*   productAddOnsSave:
*       type: object
*       properties:
*           id:
*               type: string
*               example: 5f1c548bf377ad2b40d5b1a5
*           name:
*               type: string 
*               example: 
*           weigth:
*               type: number
*               example: 20
*           capitalPrice: 
*                type: number
*                example: 10000
*           sellingPrice:
*                type: number
*                example: 12000
*           stock: 
*                type: number
*                example: 2
*           masterStatusId:
*                type: string
*                example: 5f1c548bf377ad2b40d5b1a5
*           pictures:
*                type: array
*                items: 
*                   type: string
*                example: ["https://www.google.com.","https://www.bing.com."]
*/

app.post("/api/productAddOns/save",[authJwt.verifyToken], controller.save);


/**
* @swagger
* /api/productAddOns/delete:

*   post:
*     tags:
*       - Product AddOns
*     name: Delete
*     summary: Delete Product
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
*           "$ref": "#/definitions/productLoad"

*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system

*/
app.post("/api/productAddOns/delete",[authJwt.verifyToken], controller.delete);

};