const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

// Connecting Database
require("./db/conn");

// Connecting Database Schema as of your form
const Contact = require("./models/model")

// connecting index page and using it 
const static_path = path.join(__dirname, "../");
// print the location of your homepage or form page 
// console.log(path.join(__dirname, "../index.html"));
app.use(express.static(static_path));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", (req, res) =>{
    res.render("index.html");
});

app.post("/", async (req, res) =>{
    try{
        const details = new Contact ({
            messagename: req.body.messagename,
            messageemail: req.body.messageemail,
            messagesubject: req.body.messagesubject,
            message: req.body.message
        }) 

        // Save the data to the mongodb collection
        const submited = await details.save();
        // this will redirect to the home page when data is submitted.
        res.redirect("https://64c16e54e0125400938ec6b8--cerulean-mousse-868986.netlify.app/");


    }catch(error){
        res.status(400).send(error);
    }
})

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})