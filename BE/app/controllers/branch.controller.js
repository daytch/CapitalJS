const config = require("../config/auth.config");
const db = require("../models");
const { json } = require("body-parser");
const Branch = db.branch;




exports.save = (req, res)=>{
    console.log(req.body)
   if(null !=req.body.id && req.body.id != ""){
       var branch = new Branch();
       branch._id = req.body.id;
       branch.Name = req.body.name;
       branch.Telephone = req.body.telephone;
       branch.Address = req.body.address;
       branch.Maps = req.body.maps;
       branch.isDeliver = req.body.isDeliver;
       branch.MasterStatusID = req.body.status;
       branch.Picture = req.body.picture;
       
       branch.Modified = Date.now();
       branch.ModifiedBy = req.userId;

       Branch.updateOne( {_id: req.body.id}, {$set : branch}, {useFindAndModify:false},
            (err)=>{
                if (err) {
                    return res.status(500).send({message:err, isError:1});
                }
                else{
                    return res.status(200).send({message: "Update Sucess", isError : 0});
                }
            });
     
        }
        else{
            console.log(req.body)
            var branch = new Branch();
            branch.Name = req.body.name;
            branch.Telephone = req.body.telephone;
            branch.Address = req.body.address;
            branch.Maps = req.body.maps;
            branch.MasterStatusID = req.body.status;
            branch.Picture = req.body.picture;
            branch.isDelivery = req.body.isDelivery;
            branch.Created = Date.now();
            branch.CreatedBy = req.userId;
            branch.RowStatus = true;
            branch.save((err, branch)=>{
                if (err) {
                    return res.status(500).send({message: err, isError:1});
                }
                else{
                    console.log(branch)
                    return res.status(200).send({message:"Add Success", isError:0});
                }
            })
      
        }
    
    
};


exports.loadDeliver = (req, res)=>{
    if (req.body.id != null && req.body.id != "") {
        Branch.find({_id:req.body.id, isDelivery: '1' ,RowStatus:true}, (err, result) => {
            if (err) {
                return res.status(500).send({ message: "Error, Data is Not Found" ,  isError: 1});
            }
            else {
                return res.status(200).send({result, isError: 0});
            }
        });
    }
    else {
        Branch.find({isDelivery: '1', RowStatus: true }, (err, result) => {
            if (err) {
                return res.status(500).send({ message: "Error, Data is Not Found", isError: 1 });
            }
            else  {
                return res.status(200).send({result, isError: 0});
            }           
        });
    }
}


exports.load = (req, res)=>{
    if (req.body.id != null && req.body.id != "") {
        Branch.find({_id:req.body.id, RowStatus:true}, (err, result) => {
            if (err) {
                return res.status(500).send({ message: "Error, Data is Not Found" ,  isError: 1});
            }
            else {
                return res.status(200).send({result, isError: 0});
            }
        });
    }
    else {
        Branch.find({ RowStatus: true }, (err, result) => {
            if (err) {
                return res.status(500).send({ message: "Error, Data is Not Found", isError: 1 });
            }
            else  {
                return res.status(200).send({result, isError: 0});
            }           
        });
    }
    // if (req.body.id != null && req.body.id != "") {

        
    //     Branch.findById(req.body.id,(err, result)=>{
    //         if (err) {
    //             return res.status(500).send({message: "Error, Data is Not Found", isError:1});
    //         }
    //         else {
    //             return res.status(200).send({result, isError:0});
    //         }
    //     // else{
    //     //     return res.status(500).send({Message: "Data is Not Found"});
    //     // }
    // });
    // }
    // else
    // {
    //     Branch.find({RowStatus: true},(err, result)=>{
    //                 if (err) {
    //                     return res.status(500).send({message: "Error, Data is Not Found", isError:1});
    //                 }
    //                 else {
    //                     return res.status(200).send({result, isError:0});
    //                 }
               
    //         });
    //     }
 
};



exports.delete = (req,res)=>{
    console.log(req.body)
    const branch = {
        Modified: Date.now(),
        ModifiedBy: req.userId,
        RowStatus: false
    }
    Branch.updateOne( {_id: req.body.id}, {$set : branch}, {useFindAndModify:false},
        
        (err)=>{
            if (err) {
                console.log('error')
                return res.status(500).send({message:err, isError:1});
            }
            else{
                console.log('no errpr')
                return res.status(200).send({message: "Delete Success", isError:0});
            }
        });
    
};
