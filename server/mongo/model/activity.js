var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	time:Date
	,record:String
	,url:Array
})

var m =mongoose.model('activity',schema);
module.exports = m;