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


  app.get("/api/career", [authJwt.verifyToken], controller.getCareer);
 

  /**
* @swagger
* /api/career:

*   post:
*     tags:
*       - Career
*     name: Save
*     summary: Save Career 
*     description:  save
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
*     description:  save
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

  app.put( "/api/career/:id", [authJwt.verifyToken], controller.updateCareer);

  /**
* @swagger
* /api/career/:

*   delete:
*     tags:
*       - Career
*     name: Save
*     summary: Save Career 
*     description:  save
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

  app.delete("/api/career/:id", [authJwt.verifyToken], controller.deleteCareer);
};