import React from 'react'
import service from '../../../service/service'
import { Timeline,Button ,Input,DatePicker,Card,Form } from 'antd';
import style from './activityStyle.less'
import moment from 'moment';
import axios from 'axios';
//import MyForm from './MyForm/MyForm'
export default class Activity extends React.Component{
	constructor(props) {
		super(props);
		this.state={items:[]}
	}

	componentDidMount() {
		service.getActivity().then((result)=>{
			console.log(result.data);
			this.setState({items:result.data})
		})

	}

	submit(e){
		e.preventDefault();
		var formData = new FormData(document.getElementById('submit')); 
		debugger;
		axios.post(
			'http://localhost:8008/upload',
			formData
		).then(()=>{
			console.log('success')
			this.componentDidMount();
		}).catch(()=>{console.log('error')})
	}


	render(){
		let detail = [];
		

		detail = this.state.items.map((item)=>{
			return <Timeline.Item > 
						<div className={style.time}>
							<DatePicker defaultValue={moment(item.time)}  disabled/>
						</div>
						<Card title={item.record} style={{ width: '425px' }} bodyStyle={{ padding: 0 }}>
							{item.url.map((result)=>{
								return (
									<img className = {style.img} src={result} />
								)
							})}
						</Card>
					</Timeline.Item>
		})


		return(
			<div className={style.activity}>
				<Timeline>
					{detail}
				</Timeline>
				<form id='submit' onSubmit = {this.submit.bind(this)}
				 method="post"  enctype="multipart/form-data">  
				    <input type="file" name="photos" /><br/>  
				    <input type="file" name="photos" /><br/>  
				    <input type="file" name="photos" /><br/>  
				    <input type="text" name="record" /><br/>  
				    <input type="submit" value="submit"/><br/>  
				</form>  
			</div>

		)
	}
	
}