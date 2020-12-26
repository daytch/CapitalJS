const config = require("../config/auth.config");
const db = require("../models");
const ProductAddOns = db.productAddOns;


var IsTrue = true;
exports.load = (req, res) => {

    if (req.body.id != null && req.body.id != "") {
        ProductAddOns.find({ _id: req.body.id, RowStatus: true }, (err, result) => {
            if (err) {
                return res.status(500).send({ message: "Error, Data is Not Found", isError: 1 });
            }
            else {
                return res.status(200).send({ result, isError: 0 });
            }

        });
    }
    else {
        ProductAddOns.find({ RowStatus: true }, (err, result) => {
            if (err) {
                return res.status(500).send({ message: "Error, Data is Not Found", isError: 1 });
            }
            else {
                return res.status(200).send({ result, isError: 0 });
            }

        });
    }
};

exports.save = (req, res) => {
    console.log(req.body)
    if (null != req.body.id && req.body.id != "") {
        ProductAddOns.find({
            _id: { $ne: req.body.id }, Name: req.body.name, RowStatus: true
        }, function (err, result) {
            if (err) {
                return res.status(500).send({ message: err, isError: 1 })
            }
            else if (result.length != 0) {
                return res.status(500).send({ message: "Name Duplicated Exist in Current Data", isError: 1 });

            }
            else {
                var addOns = new ProductAddOns({
                    _id: req.body.id,
                    Name : req.body.name,
                    Weigth: req.body.weigth,
                    CapitalPrice: req.body.capitalPrice,
                    SellingPrice: req.body.sellingPrice,
                    Stock: req.body.stock,
                    MasterStatusID: req.body.masterStatusId,
                    Pictures: req.body.pictures,
                    Modified: Date.now(),
                    ModifiedBy: req.userId,
                    RowStatus: true
                });
                ProductAddOns.findOneAndUpdate({ _id: req.body.id }, addOns, { new: false, useFindAndModify: false },
                    (err, blogCategory) => {
                        if (err) {
                            res.status(500).send({ message: err, isError: 1 });
                            return;
                        }
                        res.status(200).send({ message: "Update Success", isError: 0 });
                        return;
                    });
            }
        })

    }
    else {
        ProductAddOns.find({
            Name: req.body.name, RowStatus: true
        }, function (err, result) {
            if (err) {
                return res.status(500).send({ message: err, isError: 1 })
            }
            else if (result.length != 0) {
                return res.status(500).send({ message: "Name Duplicated Exist in Current Data", isError: 1 });

            }
            else {
                var addOns = new ProductAddOns({
                    Name : req.body.name,
                    Weigth: req.body.weigth,
                    CapitalPrice: req.body.capitalPrice,
                    SellingPrice: req.body.sellingPrice,
                    Stock: req.body.stock,
                    MasterStatusID: req.body.masterStatusId,
                    Pictures: req.body.pictures,
                    Created: Date.now(),
                    CreatedBy: req.userId,
                    RowStatus: true
                })
                addOns.save((err) => {
                    if (err) {
                        res.status(500).send({ message: err, isError: 1 });
                        return;
                    }
                    res.status(200).send({ message: "Add Success", isError: 0 });

                    return;
                });
            }
        })
    }

};

exports.delete = (req, res) => {
    var addOns = new ProductAddOns();
    addOns._id = req.body.id
    addOns.Modified = Date.now();
    addOns.ModifiedBy = req.userId;
    addOns.RowStatus = false;

    ProductAddOns.findByIdAndUpdate(req.body.id, addOns, { useFindAndModify: false },

        (err) => {
            if (err) {
                return res.status(500).send({ message: err, isError: 1 });
            }
            else {
                return res.status(200).send({ message: "Delete Success", isError: 0 });
            }
        });


};

