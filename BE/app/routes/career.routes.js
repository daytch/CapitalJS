const { authJwt } = require("../middlewares");
const controller = require("../controllers/career.controller");

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
* /api/career:

*   get:
*     tags:
*       - Career
*     name: Get
*     summary: Save Career

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
  app.get("/api/career", [authJwt.verifyToken], controller.getCareer);
 

  /**
* @swagger
* /api/career:
*   post:
*     tags:
*       - Career
*     name: Save
*     summary: Save Career

*     consumes:
*       - application/json
*     parameters:
*       - name: x-access-token
*         in: header
*       - name: request
*         in : body
*         type: object
*         schema:
*           $ref: '#/definitions/Career'
*           type: object
*           properties:
*             title:
*               type: string
*             description:
*               type: string
*             status:
*               type: string
*         required:
*           - title
*           - description
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
*           title:
*               type: string
*               example: Pilot
*           description:
*               type: string
*               example: deskripsi
*           status:
*               type: string
*               example: status
*/
  app.post("/api/career", [authJwt.verifyToken], controller.saveCareer);


   /**
* @swagger
* /api/career/:
*   put:
*     tags:
*       - Career
*     name: Save
*     summary: Save Career
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
*           $ref: '#/definitions/Career'
*           type: object
*           properties:
*             title:
*               type: string
*             description:
*               type: string
*             status:
*               type: string
*     required:
*       - id
*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system
*/
  app.put( "/api/career/:id", [authJwt.verifyToken], controller.updateCareer);

  
  /**
* @swagger
* /api/career/:

*   delete:
*     tags:
*       - Career
*     name: Delete Career
*     summary: Delete Career
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
  app.delete("/api/career/:id", [authJwt.verifyToken], controller.deleteCareer);

};