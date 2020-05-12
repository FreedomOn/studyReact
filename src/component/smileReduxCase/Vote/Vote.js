import React from 'react'
import VoteHead from './VoteHead'
import VoteBody from './VoteBody'
import VoteFooter from './VoteFooter'
export default class Vote extends React.Component{
    // 如果不传递参数  设置默认值
    static defaultProps = {
        title:'',
        count:{
            n:0,
            m:0
        }
    };
    constructor(props){
        super(props)
        this.state = {}
        // 进来第一件事先把容器中的信息改了
        let {count:{n,m}} = this.props;
        this.props.myRedux.updateState(state => {
            return{
                ...state,
                n,
                m
            }
        })
    }
    render(){
        return <section className={'panel panel-default'} style={{width:'600px',margin:'0 auto'}}>
            <VoteHead title = {this.props.title}></VoteHead>
            <VoteBody myRedux = {this.props.myRedux}></VoteBody>
            <VoteFooter myRedux = {this.props.myRedux}></VoteFooter>
        </section>
    }
}
