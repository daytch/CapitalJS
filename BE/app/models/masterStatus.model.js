const mongoose = require('mongoose');

const MasterStatus = mongoose.model(
    'MasterStatus',
    new mongoose.Schema({
        ConfigStatus: String,
        Status: String,
        Created: Date,
        CreatedBy: String,
        Modified: Date,
        ModifiedBy: String,
        RowStatus : Boolean
    })
);

module.exports = MasterStatus;