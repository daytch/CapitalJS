const mongoose = require('mongoose');

const ProductAddOns = mongoose.model(
    'ProductAddOns',
    new mongoose.Schema({
        Name: String,
        Weigth: Number,
        CapitalPrice: Number,
        SellingPrice: Number,
        Stock: Number,
        MasterStatusID:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'MasterStatus'
        },
        Pictures: [String],
        Created: Date,
        CreatedBy: String,
        Modified: Date,
        ModifiedBy: String,
        RowStatus : Boolean
    })
);

module.exports = ProductAddOns;