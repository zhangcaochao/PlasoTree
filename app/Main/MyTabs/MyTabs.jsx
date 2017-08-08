import React from 'react'
import { Tabs, Icon } from 'antd';
import style from './style.less'
import Product from './Product/Product'
import Activity from './Activity/Activity'
export default class MyTabs extends React.Component{
	constructor(props) {
		super(props);
		
	}

	render(){
		const TabPane = Tabs.TabPane;
		return(
			<div className = {style.tabs}>
				<Tabs defaultActiveKey="1">
    				<TabPane tab={<span><Icon type="apple" />产品</span>} key="1">
      					<Product />
    				</TabPane>
    				<TabPane tab={<span><Icon type="android" />人员</span>} key="2">
      					Tab 2
    				</TabPane>
    				<TabPane tab={<span><Icon type="windows" />活动</span>} key="3">
      					<Activity />
    				</TabPane>
  				</Tabs>
			</div>
		)
	}
}