// const config = require("../config/auth.config");
const db = require("../models");
const Career = db.career;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.getCareer = (req, res) => {
  if (req.body.id) {
    Career.findOne({ _id: req.body.id, rowstatus: true }).exec((err, career) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      } else {
        res.status(200).send(career);
      }
    });
  } else {
    Career.find({ rowstatus: true }).exec((err, careers) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      } else {
        res.status(200).send(careers);
      }
    })
  }
};

exports.saveCareer = (req, res) => {
  console.log('carer ' + req.body.title)
  const career = new Career({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    created: new Date(),
    createdby: req.userId,
    modified: new Date(),
    modifiedby: req.userId,
    rowstatus: true,
  });
  career.save((err, career) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
      res.status(200).send({ message: "Career was saved successfully!" });
    }
  });
};

exports.updateCareer = (req, res) => {
  const itemId = req.params.id;
  req.body.modified = new Date();
  req.body.modifiedby = req.userId;
  const item = req.body;

  Career.updateOne({ _id: itemId }, { $set: item }, (err, result) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
      // send back entire updated list, to make sure frontend data is up-to-date
      // Career.find().toArray(function (_error, _result) {
      //   if (_error) throw _error;
      //   res.status(200).send(_result);
      // });
      res.status(200).send({ message: "Career was updated successfully!" });
    }
  });

};

exports.deleteCareer = (req, res) => {
  const itemId = req.params.id;
  const item = {
    modified: new Date(),
    modifiedby: req.userId,
    rowstatus: false
  };

  Career.update({ _id: itemId }, { $set: item }, (err, result) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
      res.status(200).send({ message: "Career was deleted successfully!" });
    }
  });
}
