import React from 'react'

export default class VoteBody extends React.Component{
    constructor(props){
        super(props)
        // 获取最新信息  
        // let {store:{getState}} = this.props; //结构出getState
        let {n,m} = this.props.store.getState().vote  //把getState执行的信息给n 和 m
        this.state = {n,m}
    }
    componentDidMount(){
        // let {store:{getState,subscribe}} = this.props; //结构出getState
        this.props.store.subscribe(()=>{
            let {n,m} = this.props.store.getState().vote ; //要执行方法获取最新的值
            this.setState({
                n,
                m
            })
        })
        // let unsubscribe = subscribe(()=>{
        //     let {n,m} = getState;
        //     this.setState({
        //         n,
        //         m
        //     })
        // })
        // unsubscribe()  把当前追加的方法移除，解除绑定方式
    }
    render(){
        let {n,m} = this.state;
        let rate = ((n+m) ===0 ? '0%':(n/(n+m)*100).toFixed(2)+'%')
            console.log(rate,'rate')
        return <div className={'panel-body'}>
           支持人数：<span>{n}</span>
           <br></br>
           反对人数：<span>{m}</span>
           <br></br>
            支持比率：<span>{rate}</span>
        </div>
    }
}