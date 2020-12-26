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
*           "$ref": "#/definitions/branchLoad"

*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system
*definitions:
*   branchLoad:
*       type: object
*       properties:
*           id:
*               type: string
*               example: 5f1c548bf377ad2b40d5b1a5
*/
app.get("/api/branch/load", controller.load);
app.post("/api/branch/load", controller.load);

app.post('/api/branch/isdeliver',controller.loadDeliver)

   /**
* @swagger
* /api/branch/save:

*   post:
*     tags:
*       - Branch
*     name: Save
*     summary: Save Branch
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
*           "$ref": "#/definitions/branch"

*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system
*definitions:
*   branch:
*       type: object
*       properties:
*           id:
*               type: string
*               example: 5f1c548bf377ad2b40d5b1a5
*           name: 
*               type: string
*               example: branch a
*           telephone:
*               type: string
*               example: 081123321180
*           address:
*               type: string
*               example: Sunter Agung
*           maps:
*               type: string
*               example: https://www.google.com/
*           isDeliver:
*                type: string
*                example: 1
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
*           "$ref": "#/definitions/branchLoad"

*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system
*definitions:
*   branchDelete:
*       type: object
*       properties:
*           id:
*               type: array
*               items:
*                   type: string
*               example: [5f1c548bf377ad2b40d5b1a5,5f1c548bf377ad2b40d5b1a5,5f1c548bf377ad2b40d5b1a5]
*/
app.post("/api/branch/delete",[authJwt.verifyToken], controller.delete);

};