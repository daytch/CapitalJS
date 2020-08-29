const mongoose = require('mongoose');

const Product = mongoose.model(
    'Product',
    new mongoose.Schema({
        Name: String,
        CategoryID:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ProductCategory'
        },
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

module.exports = Product;