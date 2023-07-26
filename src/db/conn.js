const mongoose = require("mongoose");

// connecting with the mongo atlas 
mongoose.connect('mongodb+srv://vivek:Vivek%402998@testing.kzctsr6.mongodb.net/Test');

// save the status of the connection whether connection is estabilished or not
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));

db.once("open", function () {
    console.log("Connected successfully");
})
