let mongoose = require("mongoose");

// Create a model

let movieModel = mongoose.Schema(
    {
    title:String,
    genre: String,
    date:Date,
    details: String,
    rating:Number
    },
    {
        collection:"Movies"
    }
);
module.exports=mongoose.model('Movie',movieModel);