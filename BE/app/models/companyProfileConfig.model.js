const mongoose = require('mongoose');

const CompanyProfileConfigModel = mongoose.model(
    'CompanyProfie',
    new mongoose.Schema({
        Profile: String,
        Tagline: String,
        Email: String,
        Telphone: String,
        WhatsAppLink: String,
        InstagramLink: String,
        FacebookLink: String,
        TwitterLink: String,
        LogoCapitalLink: String,
        Created: Date,
        CreatedBy: String,
        Modified: Date,
        ModifiedBy: String,
        RowStatus: Boolean
    })
);

module.exports = CompanyProfileConfigModel;