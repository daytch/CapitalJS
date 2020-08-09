const { authJwt } = require("../middlewares");
const controller = require("../controllers/blog.controller");
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
* /api/blog/load:

*   post:
*     tags:
*       - Blog
*     name: Load
*     summary: Load Blog 
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
app.get("/api/blog/load",[authJwt.verifyToken], controller.load);
app.post("/api/blog/load",[authJwt.verifyToken], controller.load);

 /**
* @swagger
* /api/blog/save:
*   post:
*     tags:
*       - Blog
*     name: Save
*     summary: Save Blog 
*     description: JSON untuk Edit:<br> {<br>"_id":{value}, <br> "blogCategoryId":{value}, <br> "title":{value},<br> "body":{value}, <br> "masterStatusId":{value}, <br>, "headerBlogLink":{value}<br>} <br><br> JSON untuk Save:<br> {<br> "blogCategoryId":{value}, <br> "title":{value},<br> "body":{value}, <br> "masterStatusId":{value}, <br>, "headerBlogLink":{value}<br>}
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
*           blogCategoryId: 
*               type: string 
*               example: 5f1bb4faf2742315a452ea27
*           title:
*               type: string 
*               example: Uang Panas 
*           body:
*               type: string
*               example: Uang Panas - Body 
*           masterStatusId: 
*               type: string 
*               example: 5f1bcbcefb5dbc26f8655940
*           headerBlogLink:
*               type: string
*               example: http://uang.panas.com/
*/

app.post("/api/blog/save",[authJwt.verifyToken], controller.save);


 /**
* @swagger
* /api/blog/delete:
*   post:
*     tags:
*       - Blog
*     name: Delete
*     summary: Delete Blog 
*     description: Delete Blog
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
app.post("/api/blog/delete",[authJwt.verifyToken], controller.delete);

};