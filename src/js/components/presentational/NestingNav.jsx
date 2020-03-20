import React from "react";
import { NavLink , withRouter} from "react-router-dom";
import 'CssFile/index.less';

const selectedStyle = {
  backgroundColor: 'white',
  color: 'slategray'
}

var dataTest = JSON.stringify({
    'one': 'dsd',
    'two': 'e'
  });

const MainMenu = ({}) => (
  <nav  className='main-menu'>
    <NavLink to='/' exact activeStyle = {selectedStyle}>首页</NavLink>
    <NavLink to={'/RefHome/'+dataTest} activeStyle = {selectedStyle}>测试页面</NavLink>
    <NavLink to='/RouteBlock' activeStyle = {selectedStyle}>单页路由</NavLink>
    <NavLink to='/ContextPage' activeStyle = {selectedStyle}>Contxet传惨</NavLink>
    <NavLink to='/RefsPage' activeStyle = {selectedStyle}>ref父父子子</NavLink>
  </nav>
)

export default withRouter(MainMenu);
