//每一个组件中，都要导入reaact，因为需要基于他的create-element吧jsx进行解析渲染
import React from 'react'
/*
    函数式声明组件-> 创建一个对话框的组件
    1.函数返回结果是一个新的jsx(也就是当前组件的jsx结构)
    2.props变量存储的是一个对象，包含了调取组件时候传递的属性值
*/ 
export default function Dialog(props){
    let {con , lx =0} = props;
    let title = lx === 0? '系统提示' :'系统警告';
    return <section>
        <h2>{title}</h2>
        <div>{con}</div>
    </section>
}