const config = require("../config/auth.config");
const db = require("../models");
const ProductCategory = db.productCategory;


var IsTrue = true;
exports.load = (req, res)=>{

    if (req.body.id != null && req.body.id != "") {
        ProductCategory.find({_id:req.body.id, RowStatus:true}, (err, result) => {
            if (err) {
                return res.status(500).send({ message: "Error, Data is Not Found" ,  isError: 1});
            }
            else {
                return res.status(200).send({result, isError: 0});
            }
           
        });
    }
    else {
        ProductCategory.find({ RowStatus: true }, (err, result) => {
            if (err) {
                return res.status(500).send({ message: "Error, Data is Not Found", isError: 1 });
            }
            else {
                return res.status(200).send({result, isError: 0});
            }
           
        });
    }
};

exports.save = (req, res)=>{
    if (null !=req.body.id && req.body.id != "") {
        ProductCategory.find({
            _id: {$ne : req.body.id}, Name: req.body.name, RowStatus:true
        }, function(err, result){
            if (err) {
                return res.status(500).send({message: err,  isError: 1})
            }
            else if (result.length !=0) {
                return res.status(500).send({message: "Name Duplicated Exist in Current Data",  isError: 1});
           
            }
            else{
                var productCategory = new ProductCategory({
                    _id : req.body.id,
                    Name : req.body.name,
                    MasterStatusID: req.body.masterStatusId,
                    Modified: Date.now(),
                    ModifiedBy: req.userId,
                    RowStatus: true
                });
                ProductCategory.findOneAndUpdate({_id:req.body.id}, productCategory, {new :false, useFindAndModify:false},
                    (err, blogCategory)=>{
                        if (err) {
                            res.status(500).send({message :err, isError :1});
                            return;
                        }
                        res.status(200).send({message: "Update Success", isError:0});
                        return;
                    });
            }
        })
    
    }
   else{
    ProductCategory.find({
         Name: req.body.name, RowStatus:true
    }, function(err, result){
        if (err) {
            return res.status(500).send({message : err,  isError: 1})
        }
        else if (result.length !=0) {
            return res.status(500).send({message: "Name Duplicated Exist in Current Data",  isError: 1});
       
        }
        else{
            var productCategory = new ProductCategory({
            
                Name : req.body.name,
                MasterStatusID: req.body.masterStatusId,
                Created: Date.now(),
                CreatedBy: req.userId,
                RowStatus: true       
                })
                productCategory.save((err,productCategory)=>{
                    if (err) {
                        res.status(500).send({message:err,  isError: 1});
                        return;
                    }
                        res.status(200).send({message: "Add Success", isError: 0});
                        
                        return;
                });
        }
    })
   }

};

exports.delete = (req, res)=>{
    var productCategory = new ProductCategory();
    productCategory._id = req.body.id
    productCategory.Modified = Date.now();
    productCategory.ModifiedBy = req.userId;
    productCategory.RowStatus = false;

    ProductCategory.findByIdAndUpdate( req.body.id,productCategory, {useFindAndModify:false},
        
        (err)=>{
            if (err) {
                return res.status(500).send({message:err,  isError: 1});
            }
            else{
                return res.status(200).send({message: "Delete Success",  isError: 0});
            }
        });


};

