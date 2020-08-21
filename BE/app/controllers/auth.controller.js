const config = require("../config/auth.config");
const emailconfig = require("../config/email.config");
const db = require("../models");
const nodemailer = require("nodemailer");
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    isActivated: false,
    rowStatus: true
  });

  user.save((err, user) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            //  res.send({ message: "User was registered successfully!" });
          });
        }
      );
    } else {
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

    }
  });
  SendEmail(user.email);
  res.send({ message: "User was registered successfully!" });
};

async function SendEmail(email) {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: emailconfig.host,
    port: emailconfig.port,
    secure: emailconfig.SSL, // true for 465, false for other ports
    auth: {
      user: emailconfig.user,
      pass: emailconfig.password,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: emailconfig.from, // sender address
    to: email, // list of receivers, allow multiple receivers
    subject: emailconfig.subject, // Subject line
    text: emailconfig.text, // plain text body
    html: emailconfig.content, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({
          message: err,
          isError: 1
        });
        return;
      }

      if (!user) {
        return res.status(200).send({
          message: "User Not found.",
          isError: 1
        });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        roles: authorities,
        accessToken: token
      });
    });
};