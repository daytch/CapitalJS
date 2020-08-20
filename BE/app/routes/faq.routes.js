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

  /**
* @swagger
* /api/faq:

*   get:
*     tags:
*       - FAQ
*     name: Get
*     summary: Get All FAQs
*     consumes:
*       - application/json
*     parameters:
*       - name: x-access-token
*         in: header
*         schema:
*           type: string
*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system
*/
  app.get("/api/faq", [authJwt.verifyToken], controller.getFaq);

  /**
* @swagger
* /api/faq:
*   post:
*     tags:
*       - FAQ
*     name: Save
*     summary: Save FAQ
*     consumes:
*       - application/json
*     parameters:
*       - name: x-access-token
*         in: header
*       - name: request
*         in : body
*         type: object
*         schema:
*           $ref: '#/definitions/Faq'
*           type: object
*           properties:
*             sequence:
*               type: string
*             question:
*               type: string
*             answer:
*               type: string
*         required:
*           - sequence
*           - question
*           - answer
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
*               example: Question
*           answer:
*               type: string
*               example: Answer
*/
  app.post("/api/faq", [authJwt.verifyToken], controller.saveFaq);

  

   /**
* @swagger
* /api/faq/{id}:
*   put:
*     tags:
*       - FAQ
*     name: Save FAQ
*     summary: Save FAQ
*     consumes:
*       - application/json
*     parameters:
*       - name: x-access-token
*         in: header
*       - name: id
*         in: path
*       - name: request
*         in : body
*         type: object
*         schema:
*           $ref: '#/definitions/Faq'
*           type: object
*           properties:
*             sequence:
*               type: string
*             question:
*               type: string
*             answer:
*               type: string
*         required:
*           -id
*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system
*/
  app.put( "/api/faq/:id", [authJwt.verifyToken], controller.updateFaq);


  /**
* @swagger
* /api/faq/{id}:
*   delete:
*     tags:
*       - FAQ
*     name: Delete FAQ
*     summary: Delete FAQ
*     consumes:
*       - application/json
*     parameters:
*       - name: x-access-token
*         in: header
*       - name: id
*         in: path
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