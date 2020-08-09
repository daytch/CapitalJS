const config = require("../config/auth.config");
const db = require("../models");
const BlogCategory = db.blogCategory;


var IsTrue = true;
exports.load = (req, res)=>{

    if (req.body._id != null && req.body._id != "") {
        BlogCategory.findById(req.body._id, (err, result) => {
            if (err) {
                return res.status(500).send({ message: "Error, Data is Not Found" ,  isError: 1});
            }
            else {
                return res.status(200).send({result, isError: 0});
            }
           
        });
    }
    else {
        BlogCategory.find({ RowStatus: true }, (err, result) => {
            if (err) {
                return res.status(500).send({ message: "Error, Data is Not Found", isError: 1 });
            }
            else {
                return res.status(200).send({result, isError: 0,req : JSON.stringify(req.originalUrl)});
            }
           
        });
    }
    // BlogCategory.find({RowStatus: true},(err, blogCategory)=>{
    //             if (err) {
    //                 return res.status(500).send({message: "Error, Data is Not Found", isError: 1});
    //             }
    //             else {
    //                 return res.status(200).send({blogCategory,  isError: 0});
    //             }
    //         //    else{
    //         //     return res.status(500).send({Message: "Data is Not Found"});
    //         //    }
    //        });
};

exports.save = (req, res)=>{
    if (null !=req.body._id && req.body._id != "") {
        BlogCategory.find({
            _id: {$ne : req.body._id}, Name: req.body.name, RowStatus:true
        }, function(err, result){
            if (err) {
                return res.status(500).send({message: err,  isError: 1})
            }
            else if (result.length !=0) {
                return res.status(500).send({message: "Name Duplicated Exist in Current Data",  isError: 1});
           
            }
            else{
                var blogCategory = new BlogCategory({
                    _id : req.body._id,
                    Name : req.body.name,
                    Description: req.body.description,
                    Modified: Date.now(),
                    ModifiedBy: req.userId,
                    RowStatus: true
                });
                BlogCategory.findOneAndUpdate({_id:req.body._id}, blogCategory, {new :false, useFindAndModify:false},
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
    BlogCategory.find({
         Name: req.body.name, RowStatus:true
    }, function(err, result){
        if (err) {
            return res.status(500).send({message : err,  isError: 1})
        }
        else if (result.length !=0) {
            return res.status(500).send({message: "Name Duplicated Exist in Current Data",  isError: 1});
       
        }
        else{
            var blogCategory = new BlogCategory({
            
                Name : req.body.name,
                        Description: req.body.description,
                        Created: Date.now(),
                        CreatedBy: req.userId,
                        RowStatus: true
                })
                blogCategory.save((err,blogCategory)=>{
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
    // if(callback)
    // {
    //     return res.status(200).send({message: "Name Already Exist in Current Data"});
    // }
    
    // if(null !=req.body._id && req.body._id != ""){
       
    //     var blogCategory = new BlogCategory({
    //                 _id : req.body._id,
    //                 Name : req.body.name,
    //                 Description: req.body.description,
    //                 Modified: Date.now(),
    //                 ModifiedBy: req.body.username,
    //                 RowStatus: true
    //             });
    //             BlogCategory.findOneAndUpdate({_id:req.body._id}, blogCategory, {new :false, useFindAndModify:false},
    //                 (err, blogCategory)=>{
    //                     if (err) {
    //                         res.status(500).send({Message :err});
    //                         return;
    //                     }
    //                     res.status(200).send({message: "Update Success"});
    //                     return;
    //                 });
    // }
    // else{
        
    //        var blogCategory = new BlogCategory({
            
    //         Name : req.body.name,
    //                 Description: req.body.description,
    //                 Created: Date.now(),
    //                 CreatedBy: req.body.username,
    //                 RowStatus: true
    //         })
    //         blogCategory.save((err,blogCategory)=>{
    //             if (err) {
    //                 res.status(500).send({message:err});
    //                 return;
    //             }
    //                 res.status(200).send({message: "Add Success", blogCategory});
                    
    //                 return;
    //         });
    // }
};

exports.delete = (req, res)=>{
    var blogCategory = new BlogCategory();
    blogCategory._id = req.body.id
    blogCategory.Modified = Date.now();
    blogCategory.ModifiedBy = req.userId;
    blogCategory.RowStatus = false;

    // sliderWebsite.findOneAndUpdate({_id: req.body._id}, sliderWebsite, {new :false, userfindAndModify:false},
    //     (err, sliderWebsite)=>{
    //         if (err) {
    //             return res.status(500).send({message:err});
    //         }
    //         else{
    //             return res.status(200).send({message: "Delete Sucess"});
    //         }
    //     });
    BlogCategory.findByIdAndUpdate( req.body.id,blogCategory, {useFindAndModify:false},
        
        (err)=>{
            if (err) {
                return res.status(500).send({message:err,  isError: 1});
            }
            else{
                return res.status(200).send({message: "Delete Success",  isError: 0});
            }
        });

    // BlogCategory.findOneAndUpdate({_id:req.body.id},blogCategory, {useFindAndModify:true},
        
    //     (err)=>{
    //         if (err) {
    //             return res.status(500).send({message:err});
    //         }
    //         else{
    //             return res.status(200).send({message: "Delete Success"});
    //         }
    //     });
};

