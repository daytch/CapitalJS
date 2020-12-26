const mongoose = require('mongoose');

const Order = mongoose.model(
    'Order',
    new mongoose.Schema({
        UserId: String,
        TransaksiID: String,
        Name: String,
        PhoneNumber: Number,
        Time: Date,
        Address: String,
        Total: Number,
        Delivery: String,
        Outlet: String,
        Product: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
                },
                AddOns: Array,
                Weigth: String,
                Note: String
            }
        ],
        Created: Date,
        CreatedBy: String,
        Modified: Date,
        ModifiedBy: String,
        RowStatus : Boolean
    })
);

module.exports = Order;