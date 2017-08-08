var express = require('express')
var config=require("./config");
var mongo=require("./mongo/connection");
var bodyParser=require("body-parser");
var multer = require ('multer');  
var app = express();
var init=require("./servlet/util")
var Activity  = require("./mongo/model/activity")
var path=require("path")
var filepath=path.normalize(__dirname+"/images/");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
init(app,[
    [require("./servlet/maproad")],
])
app.listen(config.port,config.host);
var upload = multer({ dest:  filepath });  
app.post('/upload',upload.array('photos', 12),function(req, res, next){
	console.log('=============================')
	console.log(req.files);  
	console.log('=============================')
	console.log(req.body);  
	var temp = new Activity({record:req.body.record,time:new Date(),url:req.body.photos});
	temp.save();
	res.end("aaaaa");  
})