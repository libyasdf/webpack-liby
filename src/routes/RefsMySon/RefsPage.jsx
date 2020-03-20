import React , { Component } from "react";
import ReactDOM from "react-dom";
import ChildRef from "RefsMySon/ChildRef";

class RefsPage extends Component {
  constructor(props){
    super(props);
    // this.oneRef = React.createRef();
  }

  componentDidMount(){
    // this.oneRef.current.childFunc();
  }

  render(){
    return(
      <div>
        <ChildRef />
      </div>
    )
  }
}
 export default RefsPage;
