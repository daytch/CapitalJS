require('dotenv').config();

var path = require('path');
var folderDir = path.dirname(require.main.filename)+"\\images";

module.exports = {
    // CONSTRING: process.env.CONSTRING
    ImageFolder: folderDir
};