const config = require("../config/auth.config");
const db = require("../models");
const { json } = require("body-parser");
// const { mongoose, sliderWebsite } = require("../models");
// const User = db.user;
// const Role = db.role;
const Blog = db.blog;




exports.save = (req, res) => {
    if (null != req.body.id && req.body.id != "") {
        var blog = new Blog();
        blog._id = req.body.id;
        blog.BlogCategoryID = req.body.blogCategoryId;
        blog.Title = req.body.title;
        blog.Body = req.body.body;
        blog.MasterStatusID = req.body.masterStatusId;
        blog.HeaderBlogLink = req.body.headerBlogLink;
        
        blog.Modified = Date.now();
        blog.ModifiedBy = req.userId;

        Blog.updateOne({ _id: req.body.id }, blog, { new: false, userfindAndModify: false },
            (err, sliderWebsite) => {
                if (err) {
                    return res.status(500).send({ message: err, isError: 1 });
                }
                else {
                    return res.status(200).send({ message: "Update Sucess" ,  isError: 0});
                }
            });
        // const sliderWebsite = new SliderWebsite({
        //             id : req.body.id,
        //             Picture : req.body.picture,
        //             Description: req.body.description,
        //             MasterStatus:push(req.body.masterStatus),
        //             Telphone: req.body.telphone,
        //             WhatsAppLink: req.body.whatsAppLink,
        //             InstagramLink: req.body.instagramLink,
        //             FacebookLink: req.body.facebookLink,
        //             TwitterLink: req.body.twitterLink,
        //             LogoCapitalLink: req.body.logoCapitalLink,
        //             Created: Date.now(),
        //             CreatedBy: req.body.username,
        //             RowStatus: true
        //         });
        //         sliderWebsite.findOneAndUpdate({id:req.body.id}, sliderWebsite, {new :false, useFindAndModify:false},
        //             (err, sliderWebsite)=>{
        //                 if (err) {
        //                     res.status(500).send({Message :err});
        //                     return;
        //                 }
        //                 res.status(200).send({message: "Update Success"});
        //                 return;
        //             });
    }
    else {

        var blog = new Blog();

        blog.BlogCategoryID = req.body.blogCategoryId;
        blog.Title = req.body.title;
        blog.Body = req.body.body;
        blog.MasterStatusID = req.body.masterStatusId;
        blog.HeaderBlogLink = req.body.headerBlogLink;
        blog.Created = Date.now();
        blog.CreatedBy = req.userId;
        blog.Modified = null;
        blog.ModifiedBy = null;
        blog.RowStatus = true;

        blog.save((err, blog) => {
            if (err) {
                return res.status(500).send({ message: err , isError: 1});
            }
            else {
                return res.status(200).send({ message: "Add Success" , isError: 0});
            }
        })
        //    const sliderWebsite = new SliderWebsite({

        //     Profile : req.body.profile,
        //     TagLine: req.body.tagLine,
        //     Email : req.body.email,
        //     Telphone: req.body.telphone,
        //     WhatsAppLink: req.body.whatsAppLink,
        //     InstagramLink: req.body.instagramLink,
        //     FacebookLink: req.body.facebookLink,
        //     TwitterLink: req.body.twitterLink,
        //     LogoCapitalLink: req.body.logoCapitalLink,
        //     Modified: Date.now(),
        //     ModifiedBy: req.body.username,
        //     })
        //     companyProfile.save((err,companyProfile)=>{
        //         if (err) {
        //             res.status(500).send({message:err});
        //             return;
        //         }
        //             res.status(200).send({message: "Add Success", companyProfile});

        //             return;
        //     });
    }


};


exports.load = (req, res) => {
  
    if (req.body.id != null && req.body.id != "") {
        Blog.find({_id:req.body.id, RowStatus:true}, (err, result) => {
            if (err) {
                return res.status(500).send({ message: "Error, Data is Not Found" ,  isError: 1});
            }
            else {
                return res.status(200).send({result, isError: 0});
            }
        });
    }
    else {
        Blog.find({ RowStatus: true }, (err, result) => {
            if (err) {
                return res.status(500).send({ message: "Error, Data is Not Found", isError: 1 });
            }
            else  {
                return res.status(200).send({result, isError: 0});
            }
           
        });
    }
    // CompanyProfile.find({}, (err, companyProfile)=>{
    //     if (err) {
    //         return res.status(500).send("Opps, Error while load Company Profile");
    //     }
    //     else{
    //         return res.status(200).send(companyProfile);
    //     }
    // });
};



exports.delete = (req, res) => {

    // var blog = new Blog();
    // blog._id = req.body.id
    // blog.Modified = Date.now();
    // blog.ModifiedBy = req.userId;
    // blog.RowStatus = false;

    // sliderWebsite.findOneAndUpdate({_id: req.body._id}, sliderWebsite, {new :false, userfindAndModify:false},
    //     (err, sliderWebsite)=>{
    //         if (err) {
    //             return res.status(500).send({message:err});
    //         }
    //         else{
    //             return res.status(200).send({message: "Delete Sucess"});
    //         }
    //     });
    Blog.updateMany({_id: {$in : req.body.id}}, {$set :{Modified: Date.now(), ModifiedBy:req.userId,RowStatus:false}}, { useFindAndModify: false },

        (err) => {
            if (err) {
                return res.status(500).send({ message: err , isError: 1});
            }
            else {
                return res.status(200).send({ message: "Delete Success", isError: 0 });
            }
        });

};
