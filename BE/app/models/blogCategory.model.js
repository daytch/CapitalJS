const mongoose = require('mongoose');

const BlogCategory = mongoose.model(
    'BlogCategory',
    new mongoose.Schema({
        Name: String,
        Description: String,
        Created: Date,
        CreatedBy: String,
        Modified: Date,
        ModifiedBy: String,
        RowStatus : Boolean
    })
);

module.exports = BlogCategory;