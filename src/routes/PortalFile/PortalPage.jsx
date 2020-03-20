import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import 'CssFile/index.less';

const modelID = document.getElementById('modal-root');

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    // Append the element into the DOM on mount. We'll render
    // into the modal container element (see the HTML tab).
    modelID.appendChild(this.el);
  }

  componentWillUnmount() {
    // Remove the element from the DOM when we unmount
    modelID.removeChild(this.el);
  }

  render(){
    return ReactDOM.createPortal(
      // Any valid React child: JSX, strings, arrays, etc.
      this.props.children,
      // A DOM element
      this.el,
    );
  }

}


class PortalPage extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      showModel:false,
      clicksNumber:0
    });

    $('#app-root').on("click",this.handleShow);
  }

  handleShow = () => {
     this.setState( prevState => ({
       showModal: !prevState.showModal,
       clicksNumber: prevState.clicksNumber + 1
     }));
   }

   // handleHide = () => {
   //   this.setState({showModal: false});
   // }

  render(){
    const ModelChoose = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <button onClick={this.handleShow}>Hide modal</button>
        </div>
      </Modal>
    ) : null;

    return(
      <div className="portal-zone">
        <p>number of clicks: {this.state.clicksNumber}</p>
        <button onClick={this.handleShow}>Show modal</button>
        {ModelChoose}
      </div>
    )
  }

}

export default PortalPage;
