var RoadMap = require("../mongo/model/product")
var Activity  = require("../mongo/model/activity")
function* saveproduct(params){
	var roadmap = new RoadMap(params);
	yield roadmap.save()
	return {code: 0};
}

function* getproduct(params){
	let all = {}
	all = yield RoadMap.find().sort({time:-1});
	return all;
}

function* getActivity(){
	let all={}
	all = yield Activity.find();
	return all;
}

function* saveActivity(params){
	var temp = new Activity(params);
	yield temp.save()
	return {code:0}
}



var path=require("path")
var filepath=path.normalize(__dirname+"/../images/");

module.exports=[
	["/save",saveproduct],
	["/get",getproduct],
	[filepath],
	["/getActivity",getActivity],
	["/saveActivity",saveActivity]
	
]