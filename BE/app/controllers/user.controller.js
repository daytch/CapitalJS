const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

exports.getUser = (req, res) => {
  if (req.body.id) {
    User.findOne({ id: req.body.id }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      } else {
        res.status(200).send(user);
      }
    });
  } else {
    User.find().exec((err, users) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      } else {
        res.status(200).send(users);
      }
    })
  }
};

exports.saveUser = (req, res) => {
  const user = new User({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    created: new Date(),
    createdby: req.userId,
    modified: new Date(),
    modifiedby: req.userId,
    rowstatus: true,
  });
  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
      res.status(200).send({ message: "User was saved successfully!" });
    }
  });
};

exports.updateUser = (req, res) => {
  const itemId = req.params.id;
  const item = req.body;

  User.update({ id: itemId }, { $set: item }, (err, result) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
      // send back entire updated list, to make sure frontend data is up-to-date
      // User.find().toArray(function (_error, _result) {
      //   if (_error) throw _error;
      //   res.status(200).send(_result);
      // });
      res.status(200).send({ message: "User was updated successfully!" });
    }
  });

};

exports.deleteUser = (req, res) => {
  const itemId = req.params.id;
  const item = {
    modified: new Date(),
    modifiedby: req.userId,
    rowstatus: false
  };

  User.update({ id: itemId }, { $set: item }, (err, result) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
      res.status(200).send({ message: "User was deleted successfully!" });
    }
  });
}
