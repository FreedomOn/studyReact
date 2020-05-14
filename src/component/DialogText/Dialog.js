//每一个组件中，都要导入reaact，因为需要基于他的create-element吧jsx进行解析渲染
import React from 'react'
/*
    函数式声明组件-> 创建一个对话框的组件
    1.函数返回结果是一个新的jsx(也就是当前组件的jsx结构)
    2.props变量存储的是一个对象，包含了调取组件时候传递的属性值
*/ 
export default function Dialog(props){
    console.log(props,'111');
    console.log(React.Children)
    let {con , lx =0, children,style = {}} = props;
    let title = lx === 0? '系统提示' :'系统警告';
    // children:可能有，可能没有，可能是一个值或数组或字符串或对象（都代表双闭合组件的子元素）
    return <section style = {style}>
        <h2>{title}</h2>
        <div>{con}</div>
        {/* 把属性中传递的子元素放到组件中的指定位置 */}
        {/* {children} */}
        {/* 也可以基于react中提供的专门遍历Children的方法来完成 */}
        {
            React.Children.map(children,item=>item)
        }
    </section>
}