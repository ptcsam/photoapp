var mongoose = require("mongoose");
var Schema   = mongoose.Schema;
var commentSchema = new Schema({
    comment: String,
    author: String
})
mongoose.model('Comment', CommentSchema);
