const ImageTable = require('../models/home.models');
const fs = require('fs');
const path = require('path');

exports.getImage = async (req,res)=>{
    try{
        const DataFile = await ImageTable.find();
        const result = DataFile.map((value,index)=>{
            return {
                image: `data:${value.image.contentType};base64,${(value.image.data).toString('base64')}`,
                id: value._id,
                title: value.header,
                desc: value.desc,
            };
        });
        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
    }
}

exports.postImage = async (req,res)=>{
    try{
        const DataFile = new ImageTable({
            header: req.body.title,
            desc: req.body.desc,
            image:{
                data: fs.readFileSync(req.file.path),
                contentType: req.file.mimetype
            }
        });
        const result = await DataFile.save();
        // console.log(result);
    }
    catch(err){
        console.log(err);
    }
    res.status(200).json('ok');
}


exports.deleteImage = async (req,res) =>{
    try{
        const data = ImageTable.deleteOne({_id:req.body.id});
        res.status(200).json(await data)
    }
    catch(err){
        console.log(err)
    }
}


//route not found
exports.errorRoute = (req,res,next)=>{
    res.status(404).json('404! not found');
}

//server error
exports.serverError = (err,req,res,next)=>{
    res.status(500).json('server error');
}