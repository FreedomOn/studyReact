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
    Provider:当前项目的根组件；
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
    connect:高阶组件(基于高阶函数：柯理化函数创建的组件就是高阶组件)
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
           }
*/ 
function connect(mapStateToProps){

}

export {
    Provider,
    connect
};