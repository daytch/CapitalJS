
const { authJwt } = require("../middlewares");
const controller = require("../controllers/companyProfile.controller");


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
* /api/companyprofile/save:

*   post:
*     tags:
*       - Company Profile
*     name: Save
*     summary: Save Company Profile 
*     description:  update existing company profile
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
*           profile:
*               type: string 
*               example: profile 
*           tagLine:
*               type: string 
*               example: just do it 
*           email:
*               type: string 
*               example: test@gmail.com 
*           telphone:
*               type: string
*               example: 021590000
*           whatsAppLink:
*               type: string
*               example: htttp://www.web.whatsapp.com/
*           instagramLink: 
*               type: string
*               example: https://www.instagram.com/
*           facebookLink:
*               type: string
*               example: https://wwww.facebook.com/uangPanas
*           twitterLink:
*               type: string
*               example: https://www.twitter.com/
*           logoCapitalLink:
*               type: string
*               example: https://www.image.google.com/
*/
  app.post("/api/companyprofile/save", [authJwt.verifyToken],controller.SaveConfig);

 /**
* @swagger
* /api/companyprofile/loadconfig:

*   get:
*     tags:
*       - Company Profile
*     name: Load
*     summary: Load Company Profile 
*     description:  Load Company Profile 
*     consumes:
*       - application/json
*     parameters:
*       - name: x-access-token
*         in: header


*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       500:
*         description: something error on system

*/

  app.get("/api/companyprofile/loadconfig", [authJwt.verifyToken], controller.LoadConfig);
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