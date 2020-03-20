import React , { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavBar from "Things/NestingNav";

class Nesting extends Component {
  constructor(props){
    super(props);
  }

  render(){

    return(
        <div className = 'page'>
          <NavBar />
          {this.props.children}
        </div>
    )
  }
}

export default Nesting;
