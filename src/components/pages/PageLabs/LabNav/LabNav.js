import React from 'react';
import { Menu } from 'antd';
import {Link} from 'react-router-dom';


function LabNav(props) {
  const itemStyle={
    width:'50%',
    textAlign:'center'
  };
  const {id, curPath}=props;
  const sessionPath='/labs/'+id+'/sessions';
  const studentPath='/labs/'+id+'/students';
  const validkeys=(curPath===(sessionPath)||curPath===(studentPath))?true:false;
  const selectedkeys=validkeys?(curPath===sessionPath?"1":"2"):null;
  return(
    <Menu mode="horizontal" 
    defaultSelectedKeys="1"
    selectedKeys={selectedkeys}
    >
        <Menu.Item style={itemStyle} key="1"><Link to={sessionPath}>Sessions</Link></Menu.Item>
        <Menu.Item style={itemStyle} key="2"><Link to={studentPath}>Students</Link></Menu.Item>
    </Menu>
    );
}

export default LabNav;
