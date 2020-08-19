const mongoose = require('mongoose');

const Applicant = mongoose.model(
    'Applicant',
    new mongoose.Schema({
        Name: String,
        Telp: String,
        MasterStatusID:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'MasterStatus'
        },
        CareerID:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Career'
        },
        Source: String,
        CV: String,
        Created: { type: Date, default: Date.now },
        Createdby: String,
        Modified: { type: Date, default: Date.now },
        Modifiedby: String,
        RowStatus: Boolean
    })
);

module.exports = Applicant;