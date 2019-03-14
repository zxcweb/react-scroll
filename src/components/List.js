import React,{ Component } from 'react';
import Iscroll from 'iscroll/build/iscroll-infinite';
import './App.css';

class List extends Component {
  constructor(){
    super();
    this.myScroll = null;
    this.option = {
       // 默认iscroll会拦截元素的默认事件处理函数，我们需要响应onClick，因此要配置
       preventDefault: false,
       // 禁止缩放
       zoom: false,
       // 支持鼠标事件，因为我开发是PC鼠标模拟的
       mouseWheel: true,
       // 滚动事件的探测灵敏度，1-3，越高越灵敏，兼容性越好，性能越差
       probeType: 3,
       // 拖拽超过上下界后出现弹射动画效果，用于实现下拉/上拉刷新
       bounce: true,
       // 展示滚动条
       scrollbars: false,
    }
  }
  componentDidMount(){
    this.initIscroll()
  }
  initIscroll(){
    this.myScroll = new Iscroll("#wrapper",this.option);
  }
  render(){
    return (
      <div id="wrapper">
        <div>
          <div>11111111111111111</div>
          <div>22222222222222222</div>
          <div>33333333333333333</div>
          <div>44444444444444444</div>
          <div>11111111111111111</div>
          <div>22222222222222222</div>
          <div>33333333333333333</div>
          <div>44444444444444444</div>
          <div>11111111111111111</div>
          <div>22222222222222222</div>
          <div>33333333333333333</div>
          <div>44444444444444444</div>
          <div>11111111111111111</div>
          <div>22222222222222222</div>
          <div>33333333333333333</div>
          <div>44444444444444444</div>
          <div>11111111111111111</div>
          <div>22222222222222222</div>
          <div>33333333333333333</div>
          <div>44444444444444444</div>
          <div>11111111111111111</div>
          <div>22222222222222222</div>
          <div>33333333333333333</div>
          <div>44444444444444444</div>
          <div>11111111111111111</div>
          <div>22222222222222222</div>
          <div>33333333333333333</div>
          <div>44444444444444444</div>
          <div>11111111111111111</div>
          <div>22222222222222222</div>
          <div>33333333333333333</div>
          <div>44444444444444444</div>
          <div>11111111111111111</div>
          <div>22222222222222222</div>
          <div>33333333333333333</div>
          <div>44444444444444444</div>
        </div>
      </div>
    )
  }
}
export default List;