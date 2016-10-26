const fs = reuqire('fs');
var mongoose = require('mongoose');
var Image = mongoose.model("Image");
var Comment = mongoose.model("Comment");
var ObjectId = mongoose.Types.ObjectId;

exports.createImage = function(req, res, next) {
    var imageModel = new Image(req.body);
    imageModel.save(function(err, image) {
        if (err) {
            res.status(500);
            res.json({type: false, data: "Error occured: " + err})
        } else {
            image.
            res.json({type: true, data: article})
        }
    })
}

exports.viewImage = function(req, res, next) {





}

exports.updateImage = function(req, res, next) {




}

exports.deleteImage = function(req, res, next) {
    Image.findIdAndRemove( new Object(req.params.id), function(err, image) {
        if (err) {
            res.status(500);
            res.json({type: false, data: "Error occurred: " + err})
        } else {
            if (image) {
                fs.unlink('imagestore/' + image.fileName)
                res.json({
                    type: true,
                    data: "image: " + image.fileName + "deleted successfully"
                })
            } else {
                res.json({
                    type: false,
                    data: "image delete: " + req.params.id + " not found"})
            }
        }
    })
}

exports.createImageComment = function(req, res, next) {
    Image.findOne( {_id: new ObjectId(req.params.id)}, function(err, image) {
        if (err) {
            res.json({type: false, data: "Error occurred: " + err})
        } else {
            if (image) {
                var commentModel = new Comment(req.body);
                image.comments.push(commentModel);
                image.save(function(err, result) {
                    res.json({type: true; data: result})
                });
            } else {
                res.json({type: false, data: "image: " + req.params.id + " not found"})
            }
        }
    }
}
