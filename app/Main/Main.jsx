import React, {PropTypes} from 'react';
import  {Button}  from 'antd';
import { Timeline } from 'antd';
import  style from'./style.less'
import MyTabs from './MyTabs/MyTabs'

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render(){
		return (
			<div className ={style.main}>
				<MyTabs />
			</div>
		)
	}
}
