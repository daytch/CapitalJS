const { authJwt } = require("../middlewares");
const controller = require("../controllers/contactUs.controller");
const swaggerJsDOC = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

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
* /api/contactus/load:

*   post:
*     tags:
*       - ContactUs
*     name: Load
*     summary: Load ContactUs 
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
*           "$ref": "#/definitions/contactusload"

*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system
*definitions:
*   contactusload:
*       type: object
*       properties:
*           id:
*               type: string
*               example: 5f1c548bf377ad2b40d5b1a5
*/
// app.get("/api/blog/load", controller.load);
// app.post("/api/contactus/load",[authJwt.verifyToken], controller.load);
app.post("/api/contactus/load", controller.load);

 /**
* @swagger
* /api/contactus/save:
*   post:
*     tags:
*       - ContactUs
*     name: Save
*     summary: Save ContactUs 
*     description: Save ContactUs
*     consumes:
*       - application/json
*     parameters:
*       - name: request
*         in : body
*         type: object
*         schema:
*           "$ref": "#/definitions/contactusSave"
*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system
*definitions:
*   contactusSave:
*       type: object
*       properties:
*           name: 
*               type: string 
*               example: 5f1bb4faf2742315a452ea27
*           email:
*               type: string 
*               example: UangPanas@panas.com
*           phoneNumber:
*               type: string
*               example: 081342113221 
*/

app.post("/api/contactus/save", controller.save);


 /**
* @swagger
* /api/contactus/delete:
*   post:
*     tags:
*       - ContactUs
*     name: Delete
*     summary: Delete ContactUs 
*     description: Delete ContactUs
*     consumes:
*       - application/json
*     parameters:
*       - name: x-access-token
*         in: header
*       - name: request
*         in : body
*         type: object
*         schema:
*           "$ref": "#/definitions/contactusDelete"
*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system
*definitions:
*   contactusDelete:
*       type: object
*       properties:
*           id:
*               type: string
*               example: 5f1c548bf377ad2b40d5b1a5
*/
// app.post("/api/contactus/delete",[authJwt.verifyToken], controller.delete);
app.post("/api/contactus/delete", controller.delete);

};