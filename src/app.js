const express = require("express");
const app = express();
const uploadFile = require("./services/storage.services.js");

const multer = require("multer");

app.use(express.json());
const upload = multer({storage: multer.memoryStorage()});

app.post('/create-post' ,upload.single("image"), async(req,res)=>{
    console.log(req.body);
    console.log(req.file);

    const result = await uploadFile(req.file.buffer);

    console.log(result);

    res.status(201).send({message:"OK Ji"});
})

module.exports = app;