const config = require("../config/auth.config");
const db = require("../models");
const { json } = require("body-parser");
const dateFormat = require('dateformat');
const fs = require("fs");
const configDirectory = require("../config/staticDirectory.config");
// const User = db.user;
// const Role = db.role;


// var path = require('path');
// var folderDir = path.dirname(require.main.filename)+"\\images";
var folderDir = configDirectory.ImageFolder;


exports.SaveImage = (req, res)=>{
     
    if (fs.existsSync(folderDir)) {
        
         return SaveImage(req.body.file, res);
    }
    else{
        fs.mkdirSync(folderDir);
        
         return SaveImage(req.body.file,res);
    }
    if (req.file) {
        console.log(req.body.file);
        
    }
    // return res.status(200).send(folderDir);
    // return res.status(200).send(req.body.file);
};


function SaveImage(image, res){
    var base64Data = "";
    var fileType = "";
    if (image.includes(":image/png")) {
        base64Data = image.replace(/^data:image\/png;base64,/, "")
        fileType = ".png";
    }
    else if (image.includes(":image/jpg")) {
        base64Data = image.replace(/^data:image\/jpg;base64,/, "")
        fileType = ".jpg";
    }
    else{
        base64Data = image.replace(/^data:image\/jpeg;base64,/, "")
        fileType = ".jpeg";
    }
    
    var filePath = "";
    var currentDate = dateFormat(new Date, "yyyy-mm-dd");
    while (true) {
        filePath = "./images/"+currentDate+Math.random(9999)+fileType;
        if (!fs.existsSync(filePath)) {
            break;
        }
    }
    // var buf = new Buffer(base64Data, 'base64');
    fs.writeFile( filePath, base64Data, {encoding: 'base64'}, function(err) {
        console.log('File created');
    });
    // require("fs").writeFile("filePath.jpg", base64Data, 'base64', function(err) {
    //     console.log(err);
    //     return res.status(500).send({Message: "Something error while save image"})
    //   });

      return res.status(200).send({fileDirectory : filePath});
}