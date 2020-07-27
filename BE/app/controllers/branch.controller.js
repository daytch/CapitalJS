const config = require("../config/auth.config");
const db = require("../models");
const { json } = require("body-parser");
const Branch = db.branch;




exports.save = (req, res)=>{
   if(null !=req.body._id && req.body._id != ""){
       var branch = new Branch();
       branch._id = req.body._id;
       branch.Telephone = req.body.telephone;
       branch.Address = req.body.address;
       branch.Maps = req.body.maps;
       branch.MasterStatusID = req.body.masterStatusId;
       branch.Picture = req.body.picture;
       
       branch.Modified = Date.now();
       branch.ModifiedBy = req.body.username;

       Branch.findOneAndUpdate({_id: req.body._id}, branch, {new :false, userfindAndModify:false},
            (err, sliderWebsite)=>{
                if (err) {
                    return res.status(500).send({message:err});
                }
                else{
                    return res.status(200).send({message: "Update Sucess"});
                }
            });
     
        }
        else{
            
            var branch = new Branch();
       
            branch.Telephone = req.body.telephone;
            branch.Address = req.body.address;
            branch.Maps = req.body.maps;
            branch.MasterStatusID = req.body.masterStatusId;
            branch.Picture = req.body.picture;
            
            branch.Created = Date.now();
            branch.CreatedBy = req.body.username;
            branch.RowStatus = true;
            branch.save((err, branch)=>{
                if (err) {
                    return res.status(500).send({message: err});
                }
                else{
                    return res.status(200).send({message:"Add Success"});
                }
            })
      
        }
    
    
};


exports.load = (req, res)=>{
    if (req.body._id != null && req.body._id != "") {
        Branch.findById(req.body._id,(err, result)=>{
            if (err) {
                return res.status(200).send({Message: "Error, Data is Not Found"});
            }
            else if (result != null) {
                return res.status(200).send(result);
            }
        else{
            return res.status(200).send({Message: "Data is Not Found"});
        }
    });
    }
    else
    {
        Branch.find({RowStatus: true},(err, result)=>{
                    if (err) {
                        return res.status(200).send({Message: "Error, Data is Not Found"});
                    }
                    else if (result.length > 0) {
                        return res.status(200).send(result);
                    }
                else{
                    return res.status(200).send({Message: "Data is Not Found"});
                }
            });
        }
 
};



exports.delete = (req,res)=>{

    var branch = new Branch();
    branch._id = req.body.id
    branch.Modified = Date.now();
    branch.ModifiedBy = "";
    branch.RowStatus = false;
    Branch.findByIdAndUpdate( req.body.id,branch, {useFindAndModify:false},
        
        (err)=>{
            if (err) {
                return res.status(500).send({message:err});
            }
            else{
                return res.status(200).send({message: "Delete Success"});
            }
        });
    
};
