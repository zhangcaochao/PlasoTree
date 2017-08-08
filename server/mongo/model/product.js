var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	time:Date
	,record:String
})

var m =mongoose.model('roadmap',schema);
module.exports = m;