const mongoose = require("mongoose");

// Describing the schema of the data to be stored in the mongo db atlas 

const contactSchema = new mongoose.Schema({
    messagename: {
        type: String,
        required : true,
    },
    messageemail:{
        type: String,
        required: true
    },
    messagesubject:{
        type: String,
        required:true
    },
    message:{
        type: String,
        required:true
    }
});

const Contact = new mongoose.model("ContactDetail", contactSchema);

module.exports = Contact;