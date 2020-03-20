import React , { Component ,lazy ,Suspense} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import RefDom from "RefDom/RefDom";
import OuterClick from "RefDom/OuterClickExample";
import BlurExample from "RefDom/BlurExample";
const LazyUse  = lazy( () => import('RefDom/LazyUse') );

import HookLab from 'HookPath/StackHook';
import DOMHook from 'HookPath/MeaDomHook';

class RefHome extends Component {
  constructor(props){
    super(props);

    console.log("this.props:",this.props);

  }

  componentDidMount(){
    var data = this.props.match.params.parameter;
    if (typeof data === 'string') {
      data = JSON.parse(data);
    }
    console.log("match:",data);
    console.log("location:",this.props.history.location);
  }

  render(){
    console.log("params:",this.props.match.params);
    return(
      <div>
        <RefDom />
        <br />
        <OuterClick />
        <br/>
        <BlurExample />
        <br />
        <Suspense fallback={<div>loading2</div>} >
          <LazyUse />
        </Suspense>
        <Link to={{path:'/',state: {name: 'liby'}}} replace>首页</Link>
        <br />
        <a href="#/RouteBlock">RouteBlock</a>
        <br />
        <button onClick={() => this.props.history.goBack()}>返回</button>
        <HookLab />
        <br/>
        <DOMHook/>
      </div>
    )
  }
}

export default RefHome;
