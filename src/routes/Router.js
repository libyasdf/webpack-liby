import React , { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link, Switch, browserHistory, Redirect } from "react-router-dom";

import Home from "../js/components/container/FormContainer";
import RouteBlock from "../js/components/presentational/RouteBlock";
import RefHome from "RefDom/RefHome";
import Nesting from "NestingRoute/Nesting";//嵌套
import ContextPage from "ContextPath/up";//contxt
import RefsPage from "RefsMySon/RefsPage";
import PageJquery from "PlayJquery/PageJquery";
import PortalPage from "PortalFile/PortalPage";

const list = [{
  path: "/",
  component: Home,
  exact: true
},{
  path: "/RefHome/:parameter",
  component: RefHome,
  exact: true
},{
  path: "/RouteBlock",
  component: RouteBlock,
  exact: true
},{
  path: "/ContextPage",
  component: ContextPage,
  exact: true
},{
  path: "/RefsPage",
  component: RefsPage,
  exact: true
},{
  path: "/PageJquery",
  component: PageJquery,
  exact: true
},{
  path: "/PortalPage",
  component: PortalPage,
  exact: true
}];

// global.$history = ;
const BasicRoute = () => (
    <Router history={browserHistory}>
        <Switch>
          <Nesting>
            {
              list.map((item, key) => {
                return (
                  <Route exact={item.exact} path={item.path} component={item.component} key={key}/>
                )
              })
            }
          </Nesting>
          <Redirect from='/*' to='/'/>
        </Switch>
    </Router>
);


export default BasicRoute;
