const config = require("../config/auth.config");
const db = require("../models");
const { json } = require("body-parser");
const { mongoose, companyProfile } = require("../models");
// const User = db.user;
// const Role = db.role;
const CompanyProfile = db.companyProfile;




exports.SaveConfig = (req, res)=>{
    // var testingID = mongoose.Types.ObjectId(req.body._id);
//    CompanyProfile.findById(req.body._id,(err, companyProfile)=>{
//         if (err) {
//             return res.status(200).send({Message: "Error, Data is Not Found"});
//         }
//         else if (companyProfile != null) {
//             return res.status(200).send(companyProfile);
//         }
//        else{
//         return res.status(200).send({Message: "Data is Not Found"});
//        }
//    });
   if(null !=req.body._id && req.body._id != ""){
       
            const companyProfile = new CompanyProfile({
                        _id : req.body._id,
                        Profile : req.body.profile,
                        TagLine: req.body.tagLine,
                        Email : req.body.email,
                        Telphone: req.body.telphone,
                        WhatsAppLink: req.body.whatsAppLink,
                        InstagramLink: req.body.instagramLink,
                        FacebookLink: req.body.facebookLink,
                        TwitterLink: req.body.twitterLink,
                        LogoCapitalLink: req.body.logoCapitalLink,
                        Created: Date.now(),
                        CreatedBy: req.body.username,
                        RowStatus: true
                    });
                    CompanyProfile.findOneAndUpdate({_id:req.body._id}, companyProfile, {new :true, useFindAndModify:false},
                        (err, companyProfile)=>{
                            if (err) {
                                res.status(500).send({Message :err});
                                return;
                            }
                            res.status(200).send({message: "Update Success"});
                            return;
                        });
        }
        else{
            
               const companyProfile = new CompanyProfile({
                
                Profile : req.body.profile,
                TagLine: req.body.tagLine,
                Email : req.body.email,
                Telphone: req.body.telphone,
                WhatsAppLink: req.body.whatsAppLink,
                InstagramLink: req.body.instagramLink,
                FacebookLink: req.body.facebookLink,
                TwitterLink: req.body.twitterLink,
                LogoCapitalLink: req.body.logoCapitalLink,
                Modified: Date.now(),
                ModifiedBy: req.body.username,
                })
                companyProfile.save((err,companyProfile)=>{
                    if (err) {
                        res.status(500).send({message:err});
                        return;
                    }
                        res.status(200).send({message: "Add Success", companyProfile});
                        
                        return;
                });
        }
    
    
};


exports.LoadConfig = (req, res)=>{
    CompanyProfile.findOne({RowStatus: true},(err, companyProfile)=>{
                if (err) {
                    return res.status(200).send({Message: "Error, Data is Not Found"});
                }
                else if (companyProfile != null) {
                    return res.status(200).send(companyProfile);
                }
               else{
                return res.status(200).send({Message: "Data is Not Found"});
               }
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

