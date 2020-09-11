const config = require("../config/auth.config");
const db = require("../models");
const MasterStatus = db.masterStatus;



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

