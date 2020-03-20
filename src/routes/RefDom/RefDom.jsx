import React , { Component } from "react";
import ReactDOM from "react-dom";

const Child = React.forwardRef((props, ref) =>{
    return (
      <input type="text" ref={ref} />
    )
});

class RefDom extends Component {
  constructor(props){
    super(props);
    this.textInputRef = React.createRef();
  }

  focus = () => {
  // 使用原始的 DOM API 显式地聚焦在 text input 上
  // 注意：我们通过访问 “current” 来获得 DOM 节点
    this.textInputRef.current.focus();
  }

  render(){
    return(
      <div>
        <button onClick={this.focus}>焦点</button>
        <Child ref={this.textInputRef}/>
      </div>
    );
  }
}

export default RefDom;
