const mongoose = require('mongoose');

const ContactUs = mongoose.model(
    'ContactUs',
    new mongoose.Schema({
        Name: String,
        Email: String,
        PhoneNumber: String,
        Date: Date,
        Status: Boolean,
        Created: Date,
        CreatedBy: String,
        Modified: Date,
        ModifiedBy: String,
        RowStatus: Boolean
    })
);

module.exports = ContactUs;