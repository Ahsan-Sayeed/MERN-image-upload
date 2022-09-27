const multer = require('multer');
const fs = require("fs");

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        fs.mkdir('uploads',(err)=>{
            cb(null,'uploads');
        });
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});

const upload = multer({
    storage:storage,
    fileFilter:(req,file,cb)=>{
        cb(null,true);
    }
}); 

exports.uploads = upload.single('image');