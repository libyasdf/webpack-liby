import React , { Component } from "react";
import ReactDOM from "react-dom";
import { ReactSVG } from 'react-svg';
// import imgs from "SourceFile/liby.svg";
// <ReactSVG src='../../../../source/liby.svg'/>
  // beforeInjection={svg => {
  //                      // svg.classList.add('svg-class-name')
  //                      svg.setAttribute('style', `position: 'absolute', left: ${mouse.x}, top: ${mouse.y}`)
  //                    }}
class Cat extends Component {
  render() {
    const mouse = this.props.mouse;
    return(
      <ReactSVG src='../../../../source/liby.svg'
        className={{position: 'absolute', left: mouse.x, top: mouse.y }}
        beforeInjection={svg => {
                             // svg.classList.add('svg-class-name')
                             svg.setAttribute('style', `position: absolute, left: ${mouse.x}, top: ${mouse.y}`)
      }}/>
    /* 直接用<svg>可行   */
      // <svg width={300} height={300} style={{position: 'absolute', left: mouse.x, top: mouse.y }}>
      //   <rect width="100%" height="100%" style={{ fill: 'purple', strokeWidth: 1, stroke: 'rgb(0,0,0)' }} />
      // </svg>
    )
  }
}

class MouseLocation extends  Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0};
  }
  location = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }
  render(){
    return(
      <div style={{ height: '100%',width: '100%'}} onMouseMove={this.location}>
        <h1>mouse move!!</h1>
        <p>x:{this.state.x} y:{this.state.y}</p>
        {this.props.render(this.state)}
      </div>
    )
  }

}

class MouseTrack extends Component {
  render(){
    return(
      <div>
        <MouseLocation render={mouse => (
            <Cat mouse={mouse}/>
          )}/>
      </div>
    )
  }
}

export default MouseTrack;
