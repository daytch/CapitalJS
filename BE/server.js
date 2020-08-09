const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");
const swaggerJsDOC = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};





app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;

db.mongoose
  .connect(dbConfig.CONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to daytch application." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/companyProfile.routes")(app);
require("./app/routes/uploadImage.routes")(app);
require("./app/routes/masterStatus.routes")(app);
require("./app/routes/sliderwebsite.routes")(app);
require("./app/routes/blogCategory.routes")(app);
require("./app/routes/blog.routes")(app);
require("./app/routes/branch.routes")(app);
require("./app/routes/faq.routes")(app);




// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}


if (dbConfig.swagger) {
  // Extended : https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
      info: { 
          title: 'CapitalJS API',
          description: 'CapitalJS API Information',
          contact: {
              name: 'Uang Panas Developer'
          },
       servers: ["localhost:8080"]
      },
      host: 'localhost:8080',
      
  },
  apis: ["./app/routes//*.routes.js"]
}

const swaggerDocs = swaggerJsDOC(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}


