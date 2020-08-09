

const controller = require("../controllers/uploadImage.Controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
/**
* @swagger
* /api/UploadImage/Save:
*   post:
*     tags:
*       - Upload Image
*     name: Upload
*     summary: Upload Image 
*     description: Upload
*     consumes:
*       - application/json
*     parameters:
*       - name: x-access-token
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
*           file:
*               type: string
*               example: binary image
*/

  app.post("/api/UploadImage/Save",[authJwt.verifyToken], controller.SaveImage);
//   app.get("/api/companyprofile/test", (req, res) => {
//     console.log('server get *');
//     res.send('Server is working. Please post at "/contact" to submit a message.')});

//   app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

//   app.get(
//     "/api/test/mod",
//     [authJwt.verifyToken, authJwt.isModerator],
//     controller.moderatorBoard
//   );

//   app.get(
//     "/api/test/admin",
//     [authJwt.verifyToken, authJwt.isAdmin],
//     controller.adminBoard
//   );
};