const midtransClient = require('midtrans-client');

exports.load = (req, res) => {
// Create Snap API instance
let snap = new midtransClient.Snap({

        isProduction : false,
        serverKey : process.env.MIDTRANS_SERVER_KEY,
        clientKey : process.env.MIDRANS_CLIENT_KEY
    });
 
let parameter = {
    "transaction_details": {
        "order_id": Date.now(),
        "gross_amount": req.body.total
    }, 
    "credit_card":{
        "secure" : true
    },
    "customer_details": {
        "name": req.body.name,
        "phone": req.body.phone
    }
};
 
 
snap.createTransaction(parameter)
    .then((transaction)=>{
        return res.send({data: transaction})
    })
};


