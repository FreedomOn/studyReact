import React from 'react'
import propTypes from 'prop-types';
import VoteHead from './VoteHead'
import VoteBody from './VoteBody'
import VoteFooter from './VoteFooter'
export default class Vote extends React.Component{
    // 如果不传递参数  设置默认值
    static defaultProps = {
        title:'标题不知道哦，是不是没写呢',
        count:{
            n:0,
            m:0
        }
    };
    /*
        父组件中
            1.设置子组件上下文属性值类型
            static childContextTypes = {}
            2.获取子组件的上下文(设置子组件的上下文属性信息)
            getChildContext(){}
    */ 
    static childContextTypes = {
        n:propTypes.number,
        m:propTypes.number,
        callback:propTypes.func
    }
    getChildContext(){
        // 只要render重新渲染，就会执行这个方法，重新更新父组件的上下文信息；如果父组件上下文信息
        // 更改，子组件在重新调取的时候，会使用最新的上下文信息 render=>context=>组件渲染
        console.log('text33333')
        console.log('ok',"刚开始进来执行一次")
        // return的是啥，相当于给子组件上下文设置的是啥
        let {n,m} = this.state
        return{
            n,
            m,
            callback:this.updateContext
        }
    }
    updateContext=type=>{
        // type  => support  /aginst
        if(type ==='support'){
            this.setState({
                n:this.state.n+1
            });
            return
        }else{
            this.setState({
                m:this.state.m+1
            });
        }
    }
    constructor(props){
        super(props)
        console.log('constructor1111')
        // init state 初始化值  先把属性的值给状态 再把状态的值给上下文
        let {count:{n=0,m=0}} = this.props;
        console.log(n,m,'n和m的值')
        this.state = {n,m}
    }
    render(){
        console.log(this,'父亲传递的信息')
        console.log('render2222')
        let {title,count} = this.props
        console.log(title,count,'获取属性里面的值');
        return <section className={'panel panel-default'} style={{width:'600px',margin:'0 auto'}}>
            {/* 父传子 基于属性方法传递 */}
            <VoteHead title = {title}></VoteHead>
            {/* 父传子 基于上下文传递 */}
            <VoteBody></VoteBody>
            <VoteFooter></VoteFooter>
        </section>
    }
}
