const config = require("../config/auth.config");
const db = require("../models");
const MasterStatus = db.masterStatus;



exports.SliderConfig = (req, res)=>{
    MasterStatus.find({RowStatus: true, ConfigStatus: "SliderConfig"},(err, masterStatus)=>{
                if (err) {
                    return res.status(200).send({Message: "Error, Data is Not Found"});
                }
                else if (masterStatus != null) {
                    return res.status(200).send(masterStatus);
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


exports.BlogConfig = (req, res)=>{
    MasterStatus.find({RowStatus: true, ConfigStatus: "BlogConfig"},(err, masterStatus)=>{
                if (err) {
                    return res.status(200).send({Message: "Error, Data is Not Found"});
                }
                else if (masterStatus != null) {
                    return res.status(200).send(masterStatus);
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

exports.BranchConfig = (req, res) =>{
    MasterStatus.find({RowStatus: true, ConfigStatus: "BranchConfig"},(err, masterStatus)=>{
        if (err) {
            return res.status(200).send({Message: "Error, Data is Not Found"});
        }
        else if (masterStatus != null) {
            return res.status(200).send(masterStatus);
        }
       else{
        return res.status(200).send({Message: "Data is Not Found"});
       }
   });
}

// exports.SaveConfig = (req, res)=>{
//     const masterStatus = new MasterStatus({
//         ConfigStatus : "SliderConfig",
//         Status: "Show",
//         RowStatus: true
//     });

//     masterStatus.save((err,masterStatus)=>{
//         if (err) {
//             res.status(500).send({message:err});
//             return;
//         }
//             res.status(200).send({message: "Add Success", masterStatus});
            
//             return;
//     });
// }

