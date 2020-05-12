import React from 'react'
import PropsTypes from 'prop-types'
export default class VoteBody extends React.Component{
    // 子组件中设置使用传递进来的上下文类型,设置哪个的类型，子组件上下文才有哪个属性，不设置没有
    // this.context.xx 就可以使用
    // 指定上下文属性类型需要和父组件中指定的类型保持一致，否则报错
    static contextTypes = {
        n:PropsTypes.number,
        m:PropsTypes.number
    }
    constructor(props,context){
        super(props,context)
        this.state = {}
        console.log(context,'传递的context')
    }
    render(){
        console.log(this,'上下文传递的信息')
        let n = this.context.n;
        let m = this.context.m
        let rate = ((n+m) ===0 ? '0%':(n/(n+m)*100).toFixed(2)+'%')
        return <div className={'panel-body'}>
           支持人数：<span>{n}</span>
           <br></br>
           反对人数：<span>{m}</span>
           <br></br>
            支持比率：<span>{rate}</span>
        </div>
    }
}