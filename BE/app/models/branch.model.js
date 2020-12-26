const mongoose = require('mongoose');

const Branch = mongoose.model(
    'Branch',
    new mongoose.Schema({
        Name: String,
        Telephone: String,
        Address: String,
        Maps: String,
        MasterStatusID:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'MasterStatus'
        },
        Picture:String,
        isDelivery: String,
        Created: Date,
        CreatedBy: String,
        Modified: Date,
        ModifiedBy: String,
        RowStatus : Boolean
    })
);

module.exports = Branch;