import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter , Link} from "react-router-dom";

import Input from "../presentational/Input";
import PortalPage from "PortalFile/PortalPage";
import MouseTrack from "StateThings/MouseLocation";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    };
    // this.handleChange = this.handleChange.bind(this);
    this.cRef = React.createRef();
  }
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { seo_title } = this.state;
    var dataTest = JSON.stringify({
        'one': 'dsd',
        'two': 'e'
      });

    return (
      <div>
        <PortalPage />
        <form id="article-form">
          <Input
            text="LIBY title"
            label="seo_title"
            type="text"
            id="seo_title"
            value={seo_title}
            handleChange={this.handleChange}
          />
        </form>
        <br />
        <button onClick={() => this.props.history.push('RefHome/'+dataTest)}>
          RefHome
        </button>
        <br />
        <button onClick={() => this.props.history.replace({
            path: 'RefHome',
            query: {
              liby: '1'
            }})} >
          隐式传参到RefHome</button><br />
        <Link to={{pathname: "/RefHome", state:{name:'nae'}}} replace>RefHome</Link>
        <MouseTrack />
      </div>
    );
  }
}

export default FormContainer;
