const mongoose = require('mongoose');

const Faq = mongoose.model(
    'Faq',
    new mongoose.Schema({
        sequence: String,
        question: String,
        answer: String,
        created: { type: Date, default: Date.now },
        createdby: String,
        modified: { type: Date, default: Date.now },
        modifiedby: String,
        rowstatus: Boolean
    })
);

module.exports = Faq;