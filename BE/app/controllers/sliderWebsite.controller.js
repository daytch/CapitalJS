const config = require("../config/auth.config");
const db = require("../models");
const { json } = require("body-parser");
const { mongoose, sliderWebsite } = require("../models");
// const User = db.user;
// const Role = db.role;
const SliderWebsite = db.sliderWebsite;




exports.save = (req, res)=>{
   if(null !=req.body._id && req.body._id != ""){
       var sliderWebsite = new SliderWebsite();
       sliderWebsite._id = req.body.id;
       sliderWebsite.Picture = req.body.picture;
       sliderWebsite.Description = req.body.description;
       sliderWebsite.MasterStatus = req.body.masterStatus;
       sliderWebsite.Modified = Date.now();
       sliderWebsite.ModifiedBy = req.userId;

        sliderWebsite.findOneAndUpdate({_id: req.body._id}, sliderWebsite, {new :false, userfindAndModify:false},
            (err, sliderWebsite)=>{
                if (err) {
                    return res.status(500).send({message:err, isError:1});
                }
                else{
                    return res.status(200).send({message: "Update Sucess", isError:0});
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
        else{
            
            var sliderWebsite = new SliderWebsite();
            sliderWebsite.Picture = req.body.picture;
            sliderWebsite.Description = req.body.description;
            sliderWebsite.MasterStatus = req.body.masterStatus;
            sliderWebsite.Created = Date.now();
            sliderWebsite.CreatedBy = req.userId;
            sliderWebsite.Modified = null;
            sliderWebsite.ModifiedBy = "";
            sliderWebsite.RowStatus = true;
            sliderWebsite.save((err, sliderWebsite)=>{
                if (err) {
                    return res.status(500).send({message: err, isError:1});
                }
                else{
                    return res.status(200).send({message:"Add Success", isError:0});
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


exports.load = (req, res)=>{
    SliderWebsite.find({RowStatus: true},(err, sliderWebsite)=>{
                if (err) {
                    return res.status(200).send({message: "Error, Data is Not Found", isError:1});
                }
                else  {
                    return res.status(200).send({sliderWebsite, isError:0});
                }
            //    else{
            //     return res.status(200).send({Message: "Data is Not Found"});
            //    }
           });
    // CompanyProfile.find({}, (err, companyProfile)=>{
    //     if (err) {
    //         return res.status(500).send("Opps, Error while load Company Profile");
    //     }
    //     else{
    //         return res.status(200).send(companyProfile);
    //     }
    // });
};


exports.delete = (req,res)=>{

    var sliderWebsite = new SliderWebsite();
    sliderWebsite._id = req.body.id
    sliderWebsite.Modified = Date.now();
    sliderWebsite.ModifiedBy = req.userId;
    sliderWebsite.RowStatus = false;

    // sliderWebsite.findOneAndUpdate({_id: req.body._id}, sliderWebsite, {new :false, userfindAndModify:false},
    //     (err, sliderWebsite)=>{
    //         if (err) {
    //             return res.status(500).send({message:err});
    //         }
    //         else{
    //             return res.status(200).send({message: "Delete Sucess"});
    //         }
    //     });
    SliderWebsite.findByIdAndUpdate( req.body.id,sliderWebsite, {useFindAndModify:false},
        
        (err)=>{
            if (err) {
                return res.status(500).send({message:err, isError:1});
            }
            else{
                return res.status(200).send({message: "Delete Success", isError:0});
            }
        });
    
};
