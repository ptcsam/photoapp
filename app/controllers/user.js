var mongoose = require('mongoose');
var user = mongoose.model("User");
var objectId = mongoose.Types.ObjectId;

exports.createUser = function(req, res, next) {
  var UserModel = new User(req.body);
  UserModel.save(
    function(err, User) {
      if (err) {
          res.status(500);
          res.json( {type: false, data: "Error occured: " + err} )
      } else {
          res.json( {type: true, data: User} )
      }
    }
  )
}

exports.viewUser = function(req, res) {
    User.findById(new ObjectId(req.params.id), function(err, User) {
        if (err) {
            res.status(500);
            res.json( {type: false, data: "Error occurred: " + err})
        } else {
            if (User) {
                res.json( {type: true, data: User} );
            } else {
                res.json( {type: false, data: "User: " + req.params.id + " not found"} )
            }
        }
    }
}

exports.updateUser = function(req, res) {
    var updateUserModel = new User(req.body);
    User.findByIdAndUpdate(new ObjectId(req.params.id), updateUserModel, function(err, User) {
        if (err) {
          res.status(500);
          res.json( {type: false, data: "Error occurred: " + err})
        } else {
          if (user) {
            res.json( {type: true, data: User} )
          } else {
            res.json( {type: false, data: "User: " + req.params.id + " not found"} )
          }
        }
      }
    )
}

exports.deleteUser = function(req, res, next) {
    User.findByIdAndRemove(new Object(req.params.id), function(err, User) {
        if (err) {
            res.status(500);
            res.json({type: false, data: "Error occured: " + err})
        } else {
            res.json({type: true, data: "User: " + req.params.id + " deleted successfully"})
        }
    })
}