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


    /**
* @swagger
* /api/sliderWebsite/load:

*   post:
*     tags:
*       - Slider Website
*     name: Load
*     summary: Load Slider Website 
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
*           "$ref": "#/definitions/sliderLoad"

*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system
*definitions:
*   sliderLoad:
*       type: object
*       properties:
*           _id:
*               type: string
*               example: 5f1c548bf377ad2b40d5b1a5
*/
app.get("/api/sliderWebsite/load", controller.load);
app.post("/api/sliderWebsite/load", controller.load);

  /**
* @swagger
* /api/sliderWebsite/save:
*   post:
*     tags:
*       - Slider Website
*     name: Save
*     summary: Save - Slider Website 
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
*           "$ref": "#/definitions/sliderSave"
*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system
*definitions:
*   sliderSave:
*       type: object
*       properties:
*           _id:
*               type: string
*               example: 5f1c548bf377ad2b40d5b1a5
*           picture: 
*               type: string 
*               example: http://www.image.google.com
*           description:
*               type: string 
*               example: Uang Panas 
*           masterStatusId:
*               type: string
*               example: 5f1c548bf377ad2b40d5b1a5 
*          
*/
app.post("/api/sliderWebsite/save",[authJwt.verifyToken], controller.save);


 /**
* @swagger
* /api/sliderWebsite/delete:
*   post:
*     tags:
*       - Slider Website
*     name: Delet
*     summary: Delete - Slider Website 
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
*           "$ref": "#/definitions/sliderLoad"

*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system

*/

app.post("/api/sliderWebsite/delete",[authJwt.verifyToken], controller.delete);

};