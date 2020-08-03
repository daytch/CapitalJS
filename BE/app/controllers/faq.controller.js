const config = require("../config/auth.config");
const db = require("../models");
const Faq = db.faq;

exports.getFaq = (req, res) => {
  if (req.body.id) {
    Faq.findOne({ _id: req.body.id, rowstatus: true }).exec((err, faq) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      } else {
        res.status(200).send(faq);
      }
    });
  } else {
    Faq.find({ rowstatus: true }).exec((err, faqs) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      } else {
        res.status(200).send(faqs);
      }
    })
  }
};

exports.saveFaq = (req, res) => {
  const faq = new Faq({
    sequence: req.body.sequence,
    question: req.body.question,
    answer: req.body.answer,
    created: new Date(),
    createdby: req.userId,
    modified: new Date(),
    modifiedby: req.userId,
    rowstatus: true,
  });
  faq.save((err, faq) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
      res.status(200).send({ message: "Faq was saved successfully!" });
    }
  });
};

exports.updateFaq = (req, res) => {
  const itemId = req.params.id;
  req.body.modified = new Date();
  req.body.modifiedby = req.userId;
  const item = req.body;
  
  Faq.updateOne({ _id: itemId }, { $set: item }, (err, result) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
      res.status(200).send({ message: "Faq was updated successfully!" });
    }
  });

};

exports.deleteFaq = (req, res) => {
  const itemId = req.params.id;
  const item = {
    modified: new Date(),
    modifiedby: req.userId,
    rowstatus: false
  };

  Faq.update({ _id: itemId }, { $set: item }, (err, result) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
      res.status(200).send({ message: "FAQ was deleted successfully!" });
    }
  });
}
