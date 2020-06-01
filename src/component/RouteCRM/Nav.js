import React from 'react'
import {connect} from 'react-redux'
import {NavLink,Link, withRouter} from 'react-router-dom'
/*
    link:是react-router中提供的路由切换组件，基于它可以实现点击的时候路由切换
    to string：跳转到指定的路由地址
    to object: 可以提供一些参数配置
    {
        pathname:跳转地址
        serach:问号传参
        state:基于这种方式传递信息
        replace:默认值false  ： stack中当前的地址
        (true) 是替换history  (false)追加一个新的地址
    }
    --
    react-router提供的组件都要在任何一个router(hashrouter)包裹的范围内使用
    原理：基于link组件渲染 渲染后的结果就是一个a标签，to应用的信息最后变为href中的内容
    <a class="navbar-brand" href="#/?lx=logo">回到首页CRM</a>

    Navlink:和link相似，都是为了实现路由切换跳转的，不同在于，Navlink组件在当前页面hash
    和组件对应地址吻合的时候，会默认给组件加一个active样式，让其有选中状态
        activeClassName：把默认加的active样式类改为自己
        activeStyle：给匹配后的这个navlink设置行内样式
        exate&strict 控制匹配的时候是否是严格匹配
        isActive:匹配候执行对应的函数(一般不适用)

        <NavLink to='/custom'> 最终也会转为a标签，如果当前页面的hash地址和组件中的to地址匹配了
        则会给渲染后的A标签设置默认的样式类 active
    NavLink不是点击谁，谁有选中的样式，但是可以路由切换 ,而是当前页面哈希后的地址和 NavLink中的to
    进行比较，哪个匹配了，哪个才有选中的样式
    withRouter:这个方法意思是把一个非路由管控的组件，模拟成路由管控组件
        <Route path='/' component = {} />  受路由管控的组件 
        withRouter(connect()(Nav)) 先把nav基于connect高阶一下，返回的是一个代理组件proxy，
    把返回的代理组件受路由管控
    受路由管控的一些特点
        1.只有当前页面的哈希地址(/#/...)和路由指定的地址匹配，才会吧对应的组件渲染
          withRouter是没有地址匹配，都被模拟成为受路由管控的
        2.路由切换原理，凡是匹配的路由，都会把对应的组件内的内容重新添加到页面中，相反
          不匹配的都会在页面中移除掉，下一次重新匹配上，组件需要重新渲染到页面中。
          每一次路由切换的时候，页面的哈希地址改变，都会从一级路由开始重新效验一遍
        3.所有受路由管控的组件，在组件的属性props上都默认添加了三个属性
           history
                push:  向(history stack)池子中追加一条信息，达到切换到指定路由地址的目的
                      js使用： this.props.history.push('/plan)  ：切换到计划页面
                go:   跳转到指定的地址(传的是数字 0代表当前 -1代表上一个 -2上两个...)
                goBack: goBack等价于go(-1) 回退到上一个地址
                goForward:向前走一步
           location 获取当前hash路由渲染组件的一些信息
                pathname ：当前哈希路值
                search  ：当前页面的问号传参值
                state：基于redirect/link/navLink中的to，传递的是一个对象，对象中编写的state，
                        就可以在location.state中获取到
           match  获取的是当前路由匹配的一些结果
                params：如果当前路由匹配的是地址路径参数，则这里可以传递参数的值
*/  
class Nav extends React.Component{
    constructor(props,context){
        super(props,context)
        // console.log(props)
        this.state = {
            count:1
        }
    }
    render(){
        // console.log(1)
        return <nav className='navbar navbar-default'>
            {/* logo */}
           <div className='container-fluid col-md-2' >
                {/* 路由切换到首页 而不是跳转 */}
                <Link to = {{
                    pathname:'/',
                    search:'?lx=logo'
                }} className='navbar-brand'>回到首页CRM</Link>
           </div>
           {/* nav */}
           <div className = 'collapse navbar-collapse col-md-10'>
                <ul className='nav navbar-nav'  onClick = {this.handleClick}>
                    {/* NavLink不是点击谁，谁有选中的样式，但是可以路由切换 */}
                    <li><NavLink to='/' exact>首页</NavLink></li>
                    <li><NavLink to='/custom'>客户管理</NavLink></li>
                    <li><NavLink to='/plan'>计划管理</NavLink></li>
                </ul>
           </div>
        </nav>
    }
    // 点击头部导航是刷新组件
    handleClick = ev =>{
        this.setState({
            count:this.state.count+1
        })
    }
}
export default withRouter(connect()(Nav));