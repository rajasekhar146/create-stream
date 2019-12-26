var express = require("express");
var app = express();
var fs = require("fs")
app.get('/', function(req, res) {
    console.log(req.headers)
    res.writeHead(200, {'Content-Type': 'video/mp4'});
    var rs = fs.createReadStream('video.mp4')
    rs.pipe(res)
    
})
app.listen(3000);