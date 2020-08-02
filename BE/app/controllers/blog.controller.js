const config = require("../config/auth.config");
const db = require("../models");
const { json } = require("body-parser");
// const { mongoose, sliderWebsite } = require("../models");
// const User = db.user;
// const Role = db.role;
const Blog = db.blog;




exports.save = (req, res) => {
    if (null != req.body._id && req.body._id != "") {
        var blog = new Blog();
        blog._id = req.body._id;
        blog.BlogCategoryID = req.body.blogCategoryId;
        blog.Title = req.body.title;
        blog.Body = req.body.body;
        blog.MasterStatusID = req.body.masterStatusId;
        blog.HeaderBlogLink = req.body.headerBlogLink;

        blog.Modified = Date.now();
        blog.ModifiedBy = req.body.username;

        Blog.findOneAndUpdate({ _id: req.body._id }, blog, { new: false, userfindAndModify: false },
            (err, sliderWebsite) => {
                if (err) {
                    return res.status(500).send({ message: err });
                }
                else {
                    return res.status(200).send({ message: "Update Sucess" });
                }
            });
        // const sliderWebsite = new SliderWebsite({
        //             _id : req.body._id,
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
        //         sliderWebsite.findOneAndUpdate({_id:req.body._id}, sliderWebsite, {new :false, useFindAndModify:false},
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

        blog.BlogCategoryID = req.body.BlogCategoryID;
        blog.Title = req.body.title;
        blog.Body = req.body.body;
        blog.MasterStatusID = req.body.masterStatus;
        blog.HeaderBlogLink = req.body.headerBlogLink;
        blog.Created = Date.now();
        blog.CreatedBy = req.body.username;
        blog.Modified = null;
        blog.ModifiedBy = null;
        blog.RowStatus = true;

        blog.save((err, blog) => {
            if (err) {
                return res.status(500).send({ message: err });
            }
            else {
                return res.status(200).send({ message: "Add Success" });
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
    if (req.body._id != null && req.body._id != "") {
        Blog.findById(req.body._id, (err, result) => {
            if (err) {
                return res.status(200).send({ Message: "Error, Data is Not Found" });
            }
            else if (result != null) {
                return res.status(200).send(result);
            }
            else {
                return res.status(200).send({ Message: "Data is Not Found" });
            }
        });
    }
    else {
        Blog.find({ RowStatus: true }, (err, result) => {
            if (err) {
                return res.status(200).send({ Message: "Error, Data is Not Found" });
            }
            else if (result.length > 0) {
                return res.status(200).send(result);
            }
            else {
                return res.status(200).send({ Message: "Data is Not Found" });
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

    var blog = new Blog();
    blog._id = req.body.id
    blog.Modified = Date.now();
    blog.ModifiedBy = "";
    blog.RowStatus = false;

    // sliderWebsite.findOneAndUpdate({_id: req.body._id}, sliderWebsite, {new :false, userfindAndModify:false},
    //     (err, sliderWebsite)=>{
    //         if (err) {
    //             return res.status(500).send({message:err});
    //         }
    //         else{
    //             return res.status(200).send({message: "Delete Sucess"});
    //         }
    //     });
    Blog.findByIdAndUpdate(req.body.id, blog, { useFindAndModify: false },

        (err) => {
            if (err) {
                return res.status(500).send({ message: err });
            }
            else {
                return res.status(200).send({ message: "Delete Success" });
            }
        });

};
