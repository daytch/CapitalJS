const { authJwt } = require("../middlewares");
const controller = require("../controllers/applicant.controller");

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
* /api/applicant:

*   get:
*     tags:
*       - Applicant
*     name: Get
*     summary: Save Applicant

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
  app.get("/api/applicant", [authJwt.verifyToken], controller.getApplicant);
 

  /**
* @swagger
* /api/applicant:
*   post:
*     tags:
*       - Applicant
*     name: Save
*     summary: Save Applicant

*     consumes:
*       - application/json
*     parameters:
*       - name: x-access-token
*         in: header
*       - name: request
*         in : body
*         type: object
*         schema:
*           $ref: '#/definitions/Applicant'
*           type: object
*           properties:
*             Name:
*               type: string
*             Telp:
*               type: string
*             MasterStatusID:
*               type: string
*             CareerID:
*               type: string
*             Source:
*               type: string
*             CV:
*               type: string
*         required:
*           - Name
*           - Telp
*           - MasterStatusID
*           - CareerID
*           - Source
*           - CV
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
*           Name:
*               type: string
*               example: Name
*           Telp:
*               type: string
*               example: Telp
*           MasterStatusID:
*               type: string
*               example: MasterStatusID
*           CareerID:
*               type: string
*               example: CareerID
*           Source:
*               type: string
*               example: Source
*           CV:
*               type: string
*               example: CV
*/
  app.post("/api/applicant", [authJwt.verifyToken], controller.saveApplicant);


   /**
* @swagger
* /api/applicant/:
*   put:
*     tags:
*       - Applicant
*     name: Save
*     summary: Save Applicant
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
*           $ref: '#/definitions/Applicant'
*           type: object
*           properties:
*             Name:
*               type: string
*             Telp:
*               type: string
*             MasterStatusID:
*               type: string
*             CareerID:
*               type: string
*             Source:
*               type: string
*             CV:
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
  app.put( "/api/applicant/:id", [authJwt.verifyToken], controller.updateApplicant);

  
  /**
* @swagger
* /api/applicant/:

*   delete:
*     tags:
*       - Applicant
*     name: Delete Applicant
*     summary: Delete Applicant
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
  app.delete("/api/applicant/:id", [authJwt.verifyToken], controller.deleteApplicant);

};