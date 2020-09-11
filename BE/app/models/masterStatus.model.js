const mongoose = require('mongoose');

const MasterStatus = mongoose.model(
    'MasterStatus',
    new mongoose.Schema({
        ConfigStatus: String,
        Status: String,
        Created: { type: Date, default: Date.now },
        CreatedBy: String,
        Modified: { type: Date, default: Date.now },
        ModifiedBy: String,
        RowStatus: Boolean
    })
);

module.exports = MasterStatus;