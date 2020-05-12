import React from 'react'

export default class VoteBody extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            refresh:0//刷新
        }
    }
    componentDidMount(){
        this.props.myRedux.subScrube(()=>{
            this.setState({
                refresh:this.state.refresh + 1
            })
        })
    };
    render(){
        let state = this.props.myRedux.getState();
        let {n=0,m=0} = state;
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