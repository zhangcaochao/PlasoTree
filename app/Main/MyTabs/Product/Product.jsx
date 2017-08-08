import React from 'react'
import { Timeline,Button ,Input,DatePicker} from 'antd';
import style from './style.less'
import moment from 'moment';
import axios from 'axios';
import service from '../../../service/service'
export default class extends React.Component{
	constructor(props) {
		super(props);
		this.value="";
		this.state={
			items:[],
			change:false
		}
	}
	componentDidMount() {
		service.get().then((result)=>{
			console.log(result.data);
			this.setState({items:result.data})
		})
	}
	change(){
		this.setState({change:true})
	}

	add(){
		let a  = new Date();
		let t = {};
		t.time = a;
		t.record = '请输入...'
		this.state.items.unshift(
			t
		)
		this.setState({items:this.state.items,change:true})
	}

	handleInput(e){
		this.value = e.target.value;
	}
	submit(){
		let data = {}
		data.time = this.state.items[0].time;
		data.record = this.value;
		service.save(data).then(()=>{
			service.get().then((result)=>{
			console.log(result.data);
			this.setState({items:result.data})
			})
		});
		location.reload();
	}
	render(){
		let detail = [];
      	detail = this.state.items.map((item,index)=>{
      		return  <Timeline.Item color="green" key={item.time.valueOf()}> 
							<div className={style.time}>
								<DatePicker defaultValue={moment(item.time)}  disabled/>
							</div>
							<div className={style.input}>
								<Input type="textarea" placeholder={item.record} autosize=
								{true}  disabled={index==0?!this.state.change:true}
								onChange={this.handleInput.bind(this)}
								/>
							</div>
					</Timeline.Item>
      	})
		return(
			<div className = {style.include}>
				<div className = {style.product}>
					<Timeline pending={<span>开始添加你的产品</span>}>
						{detail}
						<div className = {style.buttons}>
							<Button type="primary" onClick = {this.change.bind(this)} disabled>修改</Button>
							<Button type="primary" onClick = {this.add.bind(this)}  disabled={this.state.change}>添加</Button>
							<Button type="primary" onClick = {this.submit.bind(this)}>提交</Button>
						</div>
					</Timeline>
				</div>
			</div>
			
		)
	}
}