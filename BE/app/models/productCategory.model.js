const mongoose = require('mongoose');

const ProductCategory = mongoose.model(
    'ProductCategory',
    new mongoose.Schema({
        Name: String,
        MasterStatusID:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'MasterStatus'
        },
        Created: Date,
        CreatedBy: String,
        Modified: Date,
        ModifiedBy: String,
        RowStatus : Boolean
    })
);

module.exports = ProductCategory;