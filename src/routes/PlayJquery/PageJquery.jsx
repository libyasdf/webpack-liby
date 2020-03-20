import React , { Component } from "react";
import ReactDOM from "react-dom";

import $ from 'jquery';

class PageJquery extends Component {
    constructor(props){
      super(props);

      this.inputElem = null;

      this.$el = $(this.inputElem);
    }

    handleChange = (e) => {
      this.props.onChange(e.target.value);
    }

    render(){
      const Repeat = (props) => {
        let items = [];
        for (let i = 0; i < props.number; i++) {
          items.push(props.children(i));
        }
        return <div>{items}</div>;
      }

      return(
        <React.Fragment>
          <h2>jquery:</h2>
          <Repeat number={5}>
            { (index) => <div key={index}> this is the {index} line! </div> }
          </Repeat>
          <input type='text' onClick={this.handleChange} ref={el => this.inputElem = el} />
        </React.Fragment>
      )
    }
}

const outPut = () => (
    <PageJquery onChange={ value => console.log(value) } />
)

export default outPut;//PageJquery;
