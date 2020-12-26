// const config = require("../config/auth.config");
const db = require("../models");
const Model = db.order;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const midtransClient = require('midtrans-client');

let apiClient = new midtransClient.Snap({
        isProduction : false,
        serverKey : process.env.MIDTRANS_SERVER_KEY,
        clientKey : process.env.MIDRANS_CLIENT_KEY
    });



exports.save = (req, res) => {
    console.log(req.body)
const order = new Model({
        UserId: req.body.user_id,
        Name: req.body.name,
        TransaksiID: req.body.transaksiID,
        PhoneNumber: req.body.phoneNumber,
        Product: req.body.product,
        Delivery: req.body.delivery,
        Address: req.body.address,
        Total: req.body.total,
        Outlet: req.body.outlet,
        Time: req.body.time
    })

 order.save((err,s)=>{
        if(err){
            return res.send({message: err, isError: 1})
        }else{
            return res.send({message: 'Order berhasil dibuat', isError: 0})
        }
    })
};

exports.load = async (req,res) => {
    Model.find().populate('Product.product').lean().exec(async function (err, authors) {
   authors = await Promise.all(authors.map( async function(author) {
    let a = await apiClient.transaction.status(author.TransaksiID)
       author.Status = a.transaction_status
       author.payment_type = a.payment_type
       return author;
   }));
   res.json(authors);
});
}

exports.byid = async (req,res) => {
    Model.find({UserId: req.body.id}).populate('Product.product').lean().exec(async function (err, authors) {
   authors = await Promise.all(authors.map( async function(author) {
    let a = await apiClient.transaction.status(author.TransaksiID)
       author.Status = a.transaction_status
       author.payment_type = a.payment_type
       return author;
   }));
   res.json(authors);
});
}




