const config = require("../config/auth.config");
const db = require("../models");
const MasterStatus = db.masterStatus;

// exports.addMasterStatus = (req,res) => {
//     MasterStatus.insertMany([
//         {ConfigStatus:"SliderConfig",Status:"Show",RowStatus:true},
//         {ConfigStatus:"SliderConfig",Status:"Hide",RowStatus:true},
//         {ConfigStatus:"BlogConfig",Status:"Show",RowStatus:true},
//         {ConfigStatus:"BlogConfig",Status:"Hide",RowStatus:true},
//         {ConfigStatus:"BranchConfig",Status:"Open",RowStatus:true},
//         {ConfigStatus:"BranchConfig",Status:"Closed",RowStatus:true},
//         {ConfigStatus:"ProductConfig",Status:"Show",RowStatus:true},
//         {ConfigStatus:"ProductConfig",Status:"Hide",RowStatus:true},
//         {ConfigStatus:"ProductCategoryConfig",Status:"Hide",RowStatus:true},
//         {ConfigStatus:"ProductCategoryConfig",Status:"Show",RowStatus:true}
//     ],(err,s)=>{
//         if(err){
//             return res.json(err)
//         }else{
//             return res.json(s)
//         }
//     })
// }

exports.SliderConfig = (req, res) => {
    MasterStatus.find({ RowStatus: true, ConfigStatus: "SliderConfig" }, (err, masterStatus) => {
        if (err) {
            return res.status(500).send({ message: "Error, Data is Not Found", isError: 1 });
        }
        else {
            return res.status(200).send({ masterStatus, isError: 0 });
        }
    });
};

exports.BlogConfig = (req, res) => {
    MasterStatus.find({ RowStatus: true, ConfigStatus: "BlogConfig" }, (err, masterStatus) => {
        if (err) {
            return res.status(500).send({ message: "Error, Data is Not Found", isError: 1 });
        }
        else {
            return res.status(200).send({ masterStatus, isError: 0 });
        }
    });
};

exports.BranchConfig = (req, res) => {
    MasterStatus.find({ RowStatus: true, ConfigStatus: "BranchConfig" }, (err, masterStatus) => {
        if (err) {
            return res.status(500).send({ message: "Error, Data is Not Found", isError: 1 });
        }
        else {
            return res.status(200).send({ masterStatus, isError: 0 });
        }
    });
}


exports.ProductConfig = (req, res) => {
    MasterStatus.find({ RowStatus: true, ConfigStatus: "ProductConfig" }, (err, masterStatus) => {
        if (err) {
            return res.status(500).send({ message: "Error, Data is Not Found", isError: 1 });
        }
        else {
            return res.status(200).send({ masterStatus, isError: 0 });
        }

    });
}

exports.ProductCategoryConfig = (req, res) => {
    MasterStatus.find({ RowStatus: true, ConfigStatus: "ProductCategoryConfig" }, (err, masterStatus) => {
        if (err) {
            return res.status(500).send({ message: "Error, Data is Not Found", isError: 1 });
        }
        else {
            return res.status(200).send({ masterStatus, isError: 0 });
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

