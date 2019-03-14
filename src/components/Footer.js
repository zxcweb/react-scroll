import React from 'react';
import {  Icon } from 'antd';
import './App.css';

const Footer = () =>{
  return (
    <div className="footer">
      <div className="active">
        <Icon type="home"/>
        <span>首页</span>
      </div>
      <div>
        <Icon type="question-circle"/>
        <span>发现</span>
      </div>
      <div>
        <Icon type="message" />
        <span>消息</span>
      </div>
      <div>
        <Icon type="user" />
        <span>我的</span>
      </div>
    </div>
  )
}
export default Footer;