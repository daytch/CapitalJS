const mongoose = require('mongoose');

const SliderWebsite = mongoose.model(
    'SliderWebsite',
    new mongoose.Schema({
       Picture: String,
       Description: String,
       MasterStatus:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'MasterStatus'
        },
        Created: Date,
        CreatedBy : String,
        Modified: Date,
        ModifiedBy: String,
        RowStatus: Boolean
    })
);

module.exports = SliderWebsite;