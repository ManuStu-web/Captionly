const mongoose = require("mongoose");
const dns = require("dns");
dns.setServers(["8.8.8.8","8.8.4.4"]);

async function connectDB(){
    await mongoose.connect("mongodb+srv://ManuSharma:5140Manu2299@backendlearning.lrr3wkg.mongodb.net/Captionly");
    console.log("Connected to DB")
}

module.exports = connectDB;