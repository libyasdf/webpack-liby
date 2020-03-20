import React, { Component } from "react";
import { Temple } from "./dataPage";

class Mid extends Component {

  render() {
    let props = this.props;
    let theme = this.context;

    return(
        <button
          {...props}
          style={{backgroundColor: theme.background}}
        />
    )
  }
}

Mid.contextType = Temple;
export default Mid;
