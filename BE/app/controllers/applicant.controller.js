// const config = require("../config/auth.config");
const db = require("../models");
const Applicant = db.applicant;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.getApplicant = (req, res) => {
  if (req.body.id) {
    Applicant.findOne({ _id: req.body.id, rowstatus: true }).exec((err, applicant) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      } else {
        res.status(200).send(applicant);
      }
    });
  } else {
    Applicant.find({ rowstatus: true }).exec((err, careers) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      } else {
        res.status(200).send(careers);
      }
    })
  }
};

exports.saveApplicant = (req, res) => {
  const applicant = new Applicant({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    created: new Date(),
    createdby: req.userId,
    modified: new Date(),
    modifiedby: req.userId,
    rowstatus: true,
  });
  applicant.save((err, applicant) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
      res.status(200).send({ message: "Applicant was saved successfully!" });
    }
  });
};

exports.updateApplicant = (req, res) => {
  const itemId = req.params.id;
  req.body.modified = new Date();
  req.body.modifiedby = req.userId;
  const item = req.body;
  
  Applicant.updateOne({ _id: itemId }, { $set: item }, (err, result) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
      // send back entire updated list, to make sure frontend data is up-to-date
      // Applicant.find().toArray(function (_error, _result) {
      //   if (_error) throw _error;
      //   res.status(200).send(_result);
      // });
      res.status(200).send({ message: "Applicant was updated successfully!" });
    }
  });

};

exports.deleteApplicant = (req, res) => {
  const itemId = req.params.id;
  const item = {
    modified: new Date(),
    modifiedby: req.userId,
    rowstatus: false
  };

  Applicant.update({ _id: itemId }, { $set: item }, (err, result) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
      res.status(200).send({ message: "Applicant was deleted successfully!" });
    }
  });
}
