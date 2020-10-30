const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();

var IsProd = process.env.PROD || false;
console.log(IsProd);
// var corsOptions = (IsProd) ? {
//   origin: ["http://5.189.134.84:8081", "http://5.189.134.84:3000"]
// } : {
//     origin: ["http://localhost:8081", "http://localhost:3000"]
//   };
var allowedOrigins = (IsProd) ?
  ["http://5.189.134.84:8080", "http://5.189.134.84:8081", "http://5.189.134.84:3000", "http://localhost:3000","http://5.189.134.84:6971"]
  :
  ["http://localhost:8081", "http://localhost:3000"]
  ;


console.log(allowedOrigins);
if (dbConfig.swagger) {
  const swaggerDefinition = {
    info: {
      title: 'CapitalJS API',
      description: 'CapitalJS API Information',
      contact: {
        name: 'Uang Panas Developer'
      },
      servers: ["localhost:8080"]
    },
    host: 'localhost:8080',
    basePath: '/',
    securityDefinitions: {
      ApiKeyAuth: {
        type: 'apiKey',
        name: 'X-API-Key',
        scheme: 'x-access-token',
        in: 'header'
      }
    }
  }

  const options = {
    swaggerDefinition,
    apis: ["./app/routes/**.js"]
  }

  const swaggerSpec = swaggerJSDoc(options);
  app.get('/swagger.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

// app.use(cors(corsOptions));
app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      var msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true, limit: "2mb" }));

app.use('/images', express.static('images'))

const db = require("./app/models");
const Role = db.role;
const User = db.user;
var bcrypt = require("bcryptjs");

db.mongoose
  .connect(dbConfig.CONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    console.log("IsProd = " + IsProd);
    if (!IsProd) {
      initial();
    }
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
require("./app/routes/career.routes")(app);
require("./app/routes/productCategory.routes")(app);
require("./app/routes/product.routes")(app)
require("./app/routes/productAddOns.routes")(app)


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

  User.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      const user = new User({
        username: "udin",
        email: "udin@yopmail.com",
        password: bcrypt.hashSync("123", 8),
        isActivated: true,
        rowStatus: true
      });

      user.save((err, user) => {
        if (err) {
          console.log(err);
          res.status(500).send({ message: err });
          return;
        }

        Role.findOne({ name: "user" }, (err, role) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          user.roles = [role._id];
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            //  res.send({ message: "User was registered successfully!" });
          });
        });
      });
    }
  });
}