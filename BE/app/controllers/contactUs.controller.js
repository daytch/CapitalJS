const db = require("../models");
const { contactUs } = require("../models");
const ContactUs = db.contactUs;

exports.load = (req, res) => {

    if (req.body.id != null && req.body.id != "") {
        ContactUs.find({ _id: req.body.id, RowStatus: true }, (err, result) => {
            if (err) {
                return res.status(500).send({ message: "Error, Data is Not Found", isError: 1 });
            }
            else {
                var contactUs = new ContactUs();
                contactUs._id = req.body.id
                contactUs.Status = true;
                contactUs.Modified = Date.now();
                contactUs.ModifiedBy = req.userId;
                ContactUs.findByIdAndUpdate(req.body.id, contactUs,{ useFindAndModify: false},
                    (err)=>{
                        if(err){
                            return res.status(500).send(({ message:err, isError:1}));
                        }
                        else{
                            return res.status(200).send({ result, isError: 0 });
                        }
                    }
                )
              
            }
        });
    }
    else {
        ContactUs.find({ RowStatus: true }, (err, result) => {
            if (err) {
                return res.status(500).send({ message: "Error, Data is Not Found", isError: 1 });
            }
            else {
                return res.status(200).send({ result, isError: 0 });
            }
        });
    }
};


exports.save = (req, res) => {
    var contactUs = new ContactUs({
        Name: req.body.name,
        Email: req.body.email,
        PhoneNumber: req.body.phoneNumber,
        Date: Date.now(),
        Status: false,
        Created: Date.now(),
        CreatedBy: "System",
        RowStatus: true
    })
    contactUs.save((err) => {
        if (err) {
            res.status(500).send({ message: err, isError: 1 });
            return;
        }
        res.status(200).send({ message: "Message was Sended", isError: 0 });

        return;
    });
};

exports.delete = (req, res) => {
    var contactUs = new ContactUs();
    contactUs._id = req.body.id
    contactUs.Modified = Date.now();
    contactUs.ModifiedBy = req.userId;
    contactUs.RowStatus = false;

    ContactUs.findByIdAndUpdate(req.body.id, contactUs, { useFindAndModify: false },

        (err) => {
            if (err) {
                return res.status(500).send({ message: err, isError: 1 });
            }
            else {
                return res.status(200).send({ message: "Delete Success", isError: 0 });
            }
        });


};