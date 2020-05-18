/*
    react-redux源码分析流程
    用法：
        1.在src下的index.js 引入react-redux
         import {Provider,connect} from 'react-redux'
         根目录使用Provider  把store传进去
*/ 
import React from 'react';
import PropTypes from 'prop-types';
/*
    Provider:当前项目的根组件；  Provider的原理
        1.接收通过属性传递进来的store，把store挂载到上下文中，这样当前项目中
          的任何一个组件，想要使用redux中的store，直接通过上下问获取即可。
        2.在组件的render中，把传递给provider的子元素渲染
*/ 
class Provider extends React.Component{
    // 设置上下文信息类型
    static childContextTypes = {
        store:PropTypes.object
    };
    // 设置上下文信息值
    getChildContext(){
        return {
            store:this.props.store
        };
    }
    constructor(props,context){
        super(props,context)
    }
    render (){
        return this.props.children;
    }
}
/*
    connect:高阶组件(基于高阶函数：柯理化函数创建的组件就是高阶组件) connect的原理
    参数
        mapStateToProps:回调函数，把redux中的部分状态信息(方法返回的内容)挂载到指定组件的属性上
           function mapStateToProps(state){
               //state:redux容器中的状态信息
               return {} // return对象中有啥，就把啥挂载到属性上
           }
       mapDispatchToProps:回调函数，把一些需要派发的任务方法也挂载到组件的属性上
            function mapDispatchToProps(dispatch){
               //dispatch:store中的dispatch
               return {} // return对象中有啥，就把啥挂载到属性上
    返回值
        返回一个新的函数 connect-hot 热组件
    ======
    connect-hot 
    参数：
        传递进来的是要操作的组件，我们需要把指定的属性和方法挂载到当前组件的属性上
    返回值
        返回一个新的组件Proxy(代理组件),在代理组件当中，我们要获取Provider在上下文存储的store
        紧接着获取store中的state和dispatch，把mapStateToProps，mapDispatchToProps回调函数执行，
        接收返回的结果，再把这些结果挂载到component这个要操作组件的属性上

    柯理化：大函数执行，形成一个不销毁的栈内存，返回一个小函数
*/ 
function connect(mapStateToProps,mapDispatchToProps){
       return function(Component){
            return class Proxy extends React.Component{
                // 获取上下文中的store
                static contextTypes  = {
                    store:PropTypes.object
                }
                // 获取store中的state和dispatch，吧传递的两个回调函数执行，接收返回的结果
                constructor(props,context){
                    super(props,context);
                    this.state = this.queryMountProps()
                }
                // 基于redux中的subscribe向事件池中追加一个方法，当容器中状态改变，我们需要获取最新的状态信息
                // 并且重新component渲染，吧最新的状态值信息通过属性传递给component
                componentDidMount(){
                    this.context.store.subscribe(()=>{
                        this.setState(this.queryMountProps());
                    })
                }
                // 渲染component组件，并把获取的信息(状态，方法)挂载到组件属性上(单独调取Proxy组件的时候传递的属性也给component)
                render(){
                    return <Component {...this.state} {...this.props}></Component>
                }
                // 从redux中获取最新的信息，基于回调函数筛选，返回的是需要挂载到组件属性上的信息
                queryMountProps =() =>{
                    let {store} = this.context,
                    state = store.getState();
                    let propsState = typeof mapStateToProps ==='function' ? mapStateToProps(state):{}
                    let propsDispatch = typeof mapDispatchToProps ==='function' ? mapDispatchToProps(store.dispatch):{}
                    return {
                        ...propsState,
                        ...propsDispatch
                    }
                }
            }
       } 
}

export {
    Provider,
    connect
};