import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter , Link} from "react-router-dom";

import { themes, Temple } from "./dataPage";//Temple创造context
import Mid from "./Mid";

function Toolbar(props) {
  return (
    <Mid onClick={props.changeTheme}>
      up 上部
    </Mid>
  );
}

class UP extends Component {
  constructor(props){
    super(props);
    this.state = {
      theme: themes.light
    }

    this.changeTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark ? themes.light : themes.dark
      }));
    }
  }

  render(){
    return(
      <div>
        <Temple.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.changeTheme} />
        </Temple.Provider>
      </div>
    )
  }

}

export default UP;
