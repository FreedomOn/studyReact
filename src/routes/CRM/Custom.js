import React from 'react'
import {connect} from 'react-redux'
import { Switch, Route, Redirect ,NavLink} from 'react-router-dom'
import Create from './custom/Create'
import Detail from './custom/Detail'
import List from './custom/List'
class Home extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {}
    }
    render(){
        return <section>
           {/* 左侧menu导航 */}
           <ul className='nav nav-pills nav-stacked col-md-2'>
                <li className='presentation'>
                    <NavLink to='/custom/list'>客户列表</NavLink>
                </li>
                <li className='presentation'>
                    <NavLink to='/custom/create'>增加客户</NavLink>
                </li>
           </ul>
           {/* 右侧展示对应的内容 也是基于路由管理 二级路由*/}
           {/* 默认展示客户信息 用redirect 从custom来 定向到custom  list列表*/}
            <div className='col-md-10'>   
                <Switch>
                    <Route path='/custom/detail' component={Detail}></Route>
                    <Route path='/custom/create' component={Create}></Route>
                    <Route path='/custom/list' component={List}></Route>
                    {/* 进入到客户管理页面，我们让其默认展示就是list区域 */}
                    <Redirect from='/custom' to='/custom/list'></Redirect>
                    {/* 另一种方式 */}
                    {/* <Route path='/custom' exact component={List}></Route> */}
                </Switch>
            </div>
        </section>
    }
}
export default connect()(Home);