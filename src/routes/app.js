/*
    可以在route文件夹下面创建一个app.js
    把一级路由在这里面写  首页index只需要引入app.js即可
*/ 
import React from 'react';
import ReactDom  from 'react-dom';
import store from './store'  
import {Provider} from 'react-redux'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import Nav from '../component/RouteCRM/Nav'
import Home from '.CRM/Home'
import Custom from '.CRM/Custom'
import Plan from '.CRM/Plan'
let root = document.querySelector("#root")
ReactDom.render(<Provider store = {store}>
    <div>
        {/* nav头部 */}
        <Nav></Nav>
        {/* 基于hash router展示不同的页面 */}
        <HashRouter>
            <Switch>
                <Route path='/' exact component = {Home}></Route>
                <Route path='/custom'  component = {Custom}></Route>
                <Route path='/plan'  component = {Plan}></Route>
                {/* 重定向首页 */}
                <Redirect to='/?lx=unsafe'></Redirect>
            </Switch>
        </HashRouter>
    </div>
</Provider>,root)