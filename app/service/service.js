import axios from 'axios';
let url = 'http://localhost:8008';
const net = axios.create({
	baseURl:url
	,timeout:5000
})

class service{
	saveproduct(args){
		return net.post(
			'save',{
				time:args.time,
				record:args.record
			}
		)
	}


	getproduct(){
		return net.get('get')
	}

	getActivity(){
		return net.get('getActivity')
	}

	saveActivity(args){
		return net.post(
			'saveActivity',{
				time:args.time,
				record:args.record,
				url:args.url
			}
		)
	}
}

let ser = new service();
let exports = {
	save:ser.saveproduct,
	get:ser.getproduct,
	saveActivity:ser.saveActivity,
	getActivity:ser.getActivity,
	url:url
}

export default exports;