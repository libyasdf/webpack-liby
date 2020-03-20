import React , { Component } from "react";
import ReactDOM from "react-dom";

const PageJquery = React.lazy(() =>import('PlayJquery/PageJquery'));

class lazyUse extends Component {
  constructor(){
    super();

  }
  render(){
    return(
      <React.Suspense fallback={<div>loading.......</div>}>
        <PageJquery />
      </React.Suspense>
    )
  }
}

export default lazyUse;
