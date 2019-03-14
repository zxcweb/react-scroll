import React from 'react';
import {  Icon, Input } from 'antd';
import './App.css';

const Header = () =>{
  return (
    <div className="header">
          <Icon type="left"/>
          <Input.Search
            placeholder="搜索你的搜索"
            style={{ width: 200 }}
          />
          <Icon type="bars"/>
        </div>
  )
}
export default Header;