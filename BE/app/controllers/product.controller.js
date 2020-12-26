const config = require("../config/auth.config");
const db = require("../models");
const Product = db.product;


var IsTrue = true;
exports.load = (req, res) => {

    if (req.body.id != null && req.body.id != "") {
        Product.find({ _id: req.body.id, RowStatus: true }).populate('AddOns').exec((err, result) => {
            if (err) {
                return res.status(500).send({ message: "Error, Data is Not Found", isError: 1 });
            }
            else {
                return res.status(200).send({ result, isError: 0 });
            }

        });
    }
    else {
        Product.find({ RowStatus: true }).populate('AddOns').exec((err, result) => {
            if (err) {
                return res.status(500).send({ message: "Error, Data is Not Found", isError: 1 });
            }
            else {
                return res.status(200).send({ result, isError: 0 });
            }

        });
    }
};

exports.byname = (req,res) =>{
    Product.find({ Name: { $regex: '.*' + req.body.name + '.*' ,$options: 'i'}, RowStatus: true }).populate('AddOns').exec((err, result) => {
            if (err) {
                return res.status(500).send({ message: "Error, Data is Not Found", isError: 1 });
            }
            else {
                return res.status(200).send({ result, isError: 0 });
            }

        });
}

exports.save = (req, res) => {
    if (null != req.body.id && req.body.id != "") {
        Product.find({
            _id: { $ne: req.body.id }, Name: req.body.name, RowStatus: true
        }, function (err, result) {
            if (err) {
                return res.status(500).send({ message: err, isError: 1 })
            }
            else if (result.length != 0) {
                return res.status(500).send({ message: "Name Duplicated Exist in Current Data", isError: 1, body: req.body });

            }
            else {
                var product = new Product({
                    _id: req.body.id,
                    Name: req.body.name,
                    CategoryID: req.body.categoryId,
                    AddOns: req.body.addOns,
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
                Product.findOneAndUpdate({ _id: req.body.id }, product, { new: false, useFindAndModify: false },
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
        Product.find({
            Name: req.body.name, RowStatus: true
        }, function (err, result) {
            if (err) {
                return res.status(500).send({ message: err, isError: 1 })
            }
            else if (result.length != 0) {
                return res.status(500).send({ message: "Name Duplicated Exist in Current Data", isError: 1 });

            }
            else {
                var product = new Product({
                    Name: req.body.name,
                    CategoryID: req.body.categoryId,
                    AddOns: req.body.addOns,
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
                product.save((err) => {
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
    var product = new Product();
    product._id = req.body.id
    product.Modified = Date.now();
    product.ModifiedBy = req.userId;
    product.RowStatus = false;

    Product.findByIdAndUpdate(req.body.id, product, { useFindAndModify: false },

        (err) => {
            if (err) {
                return res.status(500).send({ message: err, isError: 1 });
            }
            else {
                return res.status(200).send({ message: "Delete Success", isError: 0 });
            }
        });


};

