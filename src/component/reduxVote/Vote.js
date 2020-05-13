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
    }
    render(){
        let {store} = this.props;
        console.log(store,'哈哈哈')
        return <section className={'panel panel-default'} style={{width:'600px',margin:'0 auto'}}>
            <VoteHead title = {this.props.title}></VoteHead>
            <VoteBody store={store}></VoteBody>
            <VoteFooter store={store}></VoteFooter>
        </section>
    }
}
