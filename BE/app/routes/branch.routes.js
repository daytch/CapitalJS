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

    /**
* @swagger
* /api/branch/load:

*   post:
*     tags:
*       - Branch
*     name: Load
*     summary: Load Branch
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
*           "$ref": "#/definitions/inBody"

*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system
*definitions:
*   inBody:
*       type: object
*       properties:
*           _id:
*               type: string
*               example: 5f1c548bf377ad2b40d5b1a5
*/
app.get("/api/branch/load",[authJwt.verifyToken], controller.load);
app.post("/api/branch/load",[authJwt.verifyToken], controller.load);

   /**
* @swagger
* /api/branch/save:

*   post:
*     tags:
*       - Branch
*     name: Save
*     summary: Save Branch
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
*           "$ref": "#/definitions/inBody"

*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system
*definitions:
*   inBody:
*       type: object
*       properties:
*           _id:
*               type: string
*               example: 5f1c548bf377ad2b40d5b1a5
*           telephone:
*               type: string
*               example: 081123321180
*           address:
*               type: string
*               example: Sunter Agung
*           maps:
*               type: string
*               example: https://www.google.com/
*           masterStatusId:
*               type: string
*               example: 5f1c548bf377ad2b40d5b1a5
*           picture:
*               type: string
*               example: https://www.google.com/
*/
app.post("/api/branch/save",[authJwt.verifyToken], controller.save);

    /**
* @swagger
* /api/branch/delete:

*   post:
*     tags:
*       - Branch
*     name: Load
*     summary: Delete Branch
*     description:  Delete Branch
*     consumes:
*       - application/json
*     parameters:
*       - name: x-access-token
*         in: header
*       - name: request
*         in : body
*         type: object


*         schema:
*           "$ref": "#/definitions/inBody"

*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system
*definitions:
*   inBody:
*       type: object
*       properties:
*           _id:
*               type: string
*               example: 5f1c548bf377ad2b40d5b1a5
*/
app.post("/api/branch/delete",[authJwt.verifyToken], controller.delete);

};