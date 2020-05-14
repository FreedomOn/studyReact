import React from 'react'
import action from '../../store/action'
export default class VoteBase extends React.Component{
    constructor(props){
        super(props)
        // 首先把容器中的状态信息获取到，赋值给组件的状态或者属性，这么做的目的
        // 当redux中的状态改变，我们可以修改组件内部的状态，从而达到重新渲染的目的
        // console.log(this.props)
        // console.log(this.props.store.getState())
        // let {n,m,title} = this.props.store.getState().textVote
        /*
            另一种写法
            let reduxState = this.props.store.getState().textVote
            this.state = {
                ...reduxState
            }
        */ 
        // console.log(n,m,title)
        // this.state = {n,m,title}
        let reduxState = this.props.store.getState().textVote
        this.state = {
            ...reduxState
        }
    }
    componentWillMount(){
        // 在第一渲染之前初始化数据  通过行为派发吧redux中的信息赋值初始值
        this.props.store.dispatch(action.textVote.init({
            title:'传递的标题！',
            n:22,
            m:44
        }))
        let reduxState = this.props.store.getState().textVote;
        console.log(reduxState)
        // 把初始化得到的信息原封不动的给state
        this.setState({
            ...reduxState
        })
    }
    componentDidMount(){
        // 向发布订阅事件池中追加一个方法，监听redux容器中的状态改变，状态改变重新渲染组件
        this.props.store.subscribe(()=>{
            // 获取到最新的值
            let reduxState = this.props.store.getState().textVote;
            console.log(reduxState,'得到的是最新值吗')
            // 发生改变 重新渲染
            this.setState({
                ...reduxState
            })
            console.log(this.setState)
            console.log(this.state,'传过去了吗')
        })
    }
    render(){
        return <div className="panel panel-default" >
            <div className="panel panel-heading">
               <h3 className = "panel-title">{this.state.title}</h3>
            </div>
            <div className="panel-body">
                 支持人数：<span>{this.state.n}</span>
                 <br></br> 
                 反对人数: <span>{this.state.m}</span>
            </div>
        </div>
    }
}