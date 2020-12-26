const mongoose = require('mongoose');

const ProductAddOns = mongoose.model(
    'ProductAddOns',
    new mongoose.Schema({
        Name: String,
        Weigth: Number,
        CapitalPrice: Number,
        SellingPrice: Number,
        Stock: Number,
        Pictures: String,
        Created: Date,
        CreatedBy: String,
        Modified: Date,
        ModifiedBy: String,
        RowStatus : Boolean
    })
);

module.exports = ProductAddOns;