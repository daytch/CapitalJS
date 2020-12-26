
const { authJwt } = require("../middlewares");
const controller = require("../controllers/masterStatus.controller");


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
* /api/masterstatus/sliderconfig:
*   get:
*     tags:
*       - Master Status
*     name: Slider Config
*     summary: Load Slider Config 
*     description: Load Slider Config  
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
  // app.get('/api/addmaster',controller.addMasterStatus)
  app.get("/api/masterstatus/sliderconfig",controller.SliderConfig);
  /**
* @swagger
* /api/masterstatus/blogconfig:
*   get:
*     tags:
*       - Master Status
*     name: Blog Config
*     summary: Load Blog Config 
*     description: Load Blog Config  
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

  app.get("/api/masterstatus/blogconfig",[authJwt.verifyToken], controller.BlogConfig);

   /**
* @swagger
* /api/masterstatus/branchconfig:
*   get:
*     tags:
*       - Master Status
*     name: Branch Config
*     summary: Load Branch Config 
*     description: Load Branch Config  
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

  app.get("/api/masterstatus/branchconfig", controller.BranchConfig);

   /**
* @swagger
* /api/masterstatus/productconfig:
*   get:
*     tags:
*       - Master Status
*     name: Product Config
*     summary: Load Product Config 
*     description: Load Product Config  
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

app.get("/api/masterstatus/productconfig", controller.ProductConfig);

   /**
* @swagger
* /api/masterstatus/productcategoryconfig:
*   get:
*     tags:
*       - Master Status
*     name: Product Category Config
*     summary: Load Product Category Config 
*     description: Load Product Category Config  
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

app.get("/api/masterstatus/productcategoryconfig", controller.ProductCategoryConfig);

  // app.post("/api/masterStatus/SaveConfig", controller.SaveConfig);

  
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