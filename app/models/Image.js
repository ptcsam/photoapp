var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Comment = require("./Comment");

var ImageSchema = new Schema({
    title: String,
    
    comments: [Comment.schema]
})
