const mongoose = require('mongoose');

const Blog = mongoose.model(
    'Blog',
    new mongoose.Schema({
        BlogCategoryID: {
            type : mongoose.Schema.Types.ObjectId,
            ref : "BlogCategory"
        },
        Title: String,
        Body: String,
        MasterStatusID:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'MasterStatus'
        },
        HeaderBlogLink: String,
        Created: Date,
        CreatedBy: String,
        Modified: Date,
        ModifiedBy: String,
        RowStatus : Boolean
    })
);

module.exports = Blog;