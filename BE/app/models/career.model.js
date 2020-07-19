const mongoose = require('mongoose');

const Career = mongoose.model(
    'Career',
    new mongoose.Schema({
        title: String,
        description: String,
        status: String,
        created: { type: Date, default: Date.now },
        createdby: String,
        modified: { type: Date, default: Date.now },
        modifiedby: String,
        rowstatus: Boolean
    })
);

module.exports = Career;