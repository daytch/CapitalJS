const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.companyProfile = require("./companyProfileConfig.model");
db.masterStatus = require("./masterStatus.model");
db.sliderWebsite = require("./sliderWebsite.Model");
db.blogCategory = require("./blogCategory.model");
db.blog = require('./blog.model');
db.branch = require('./branch.model');
db.faq = require('./faq.model');
db.applicant = require('./applicant.model');
db.career = require('./career.model');
db.productCategory = require('./productCategory.model');
db.product = require('./product.model');
db.productAddOns = require('./productAddOns.model');
db.contactUs = require('./contactUs.model');

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;