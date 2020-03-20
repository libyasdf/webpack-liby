import React , { Component } from "react";
import ReactDOM from "react-dom";

/* 一般 ref */
// class ChildRef extends Component {
//   constructor(props){
//     super(props);
//     console.log(props);
//     this.oneRef = React.createRef();
//   }
//
//   childFunc = () => {
//       console.log("call my son");
//       this.oneRef.current.focus();
//   }
//
//   render(){
//     return(
//       <div>
//         <input ref={this.oneRef}/>
//         <input
//             type="button"
//             value="childpage button"
//             onClick={this.childFunc}
//           />
//       </div>
//     )
//   }
// }
//

/* 回调方式的 ref */
class ChildRef extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    // this.setTextInputRef = element => {
    //   element 就是dom节点
    //   this.textInput = element;
    // };
    //{this.setTextInputRef}

    this.focusTextInput = () => {
      // 使用原生 DOM API 使 text 输入框获得焦点
      if (this.textInput) this.textInput.focus();
    };
  }

  componentDidMount() {
    // 组件挂载后，让文本框自动获得焦点
    this.focusTextInput();
  }

  render() {
    // 使用 `ref` 的回调函数将 text 输入框 DOM 节点的引用存储到 React
    // 实例上（比如 this.textInput）
    return (
      <React.Fragment>
        <input
          type="text"
          ref={el => this.textInput = el}
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </React.Fragment>
    );
  }
}

export default ChildRef;
