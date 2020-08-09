const { authJwt } = require("../middlewares");
const controller = require("../controllers/faq.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/faq", [authJwt.verifyToken], controller.getFaq);

 
/**
* @swagger
* /api/faq:

*   post:
*     tags:
*       - FAQ
*     name: Save
*     summary: Save FAQ
*     description:  Save FAQ
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
*           sequence:
*               type: string
*               example: 1
*           question:
*               type: string 
*               example: question
*           answer:
*               type: string 
*               example: answer
*/
  app.post("/api/faq", [authJwt.verifyToken], controller.saveFaq);

   


/**
* @swagger
* /api/faq/:

*   put:
*     tags:
*       - FAQ
*     name: Update
*     summary: Update FAQ
*     description:  Update FAQ
*     consumes:
*       - application/json
*     parameters:
*       - name: x-access-token
*         in: header
*       - name: id
*         in: query
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
*           sequence:
*               type: string
*               example: 1
*           question:
*               type: string 
*               example: question
*           answer:
*               type: string 
*               example: answer
*/
  app.put( "/api/faq/:id", [authJwt.verifyToken], controller.updateFaq);


   /**
* @swagger
* /api/delete/:

*   delete:
*     tags:
*       - FAQ
*     name: Delete
*     summary: Delete FAQ 
*     description:  Delete
*     consumes:
*       - application/json
*     parameters:
*       - name: x-access-token
*         in: header
*       - name: id
*         in: query


*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system

*/
  app.delete("/api/faq/:id", [authJwt.verifyToken], controller.deleteFaq);
};