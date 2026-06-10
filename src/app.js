require("dotenv").config();
const express = require("express");
const app = express();
const uploadFile = require("./services/storage.services.js");
const postModel = require("./models/post.model.js");

const multer = require("multer");

app.use(express.json());
const upload = multer({storage: multer.memoryStorage()});

app.post('/create-post' ,upload.single("image"), async(req,res)=>{
    console.log(req.body);
    console.log(req.file);

    const result = await uploadFile(req.file.buffer);

    const post = await postModel.create({
        image:result.url,
        caption:req.body.caption
    })


    res.status(201).send({message:"Saved", post});
})

app.get("/posts", async(req,res)=>{
    const post = await postModel.find();

    return res.status(200).json({
        message:"fetched successfully",
        post
    });
})


module.exports = app;