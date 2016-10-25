var mongoose = require("mongoose");
var Schema   = mongoose.Schema;
var Comment  = require("./Comment");

var imageSchema = new Schema({
    filename: String,
    contentType: String,
    comments: [Comment.schema]
})
mongoose.model('Image', imageSchema);
