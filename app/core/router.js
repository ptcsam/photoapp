var restify = require('restify')
var fs = require ('fs')

var controllers = {}
var controllers_path = process.cwd() + '/app/controllers'

fs.readdirSync(process.cwd() + '/app/controllers').forEach(function (file) {
    if (file.indexOf('.js') != -1) {
        controllers[file.split('.')[0]] = require(controllers_path + '/' + file)
    }
})

var server = restify.createServer();
server.use(restify.fullResponse());
server.use(restify.bodyParser());

// Image Start
server.post("/images", controllers.image.createImage);
server.put("/images/:id", controllers.image.updateImage);
server.del("/images/:id", controllers.image.deleteImage);
server.get("/images/:id", controllers.image.viewImage);
