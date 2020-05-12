import React from 'react'
export default class VoteHead extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return <div className={'panel panel-heading'}>
            <h3 className={'panel-title'}>
                {/* 子组件获取父组件传递过来的 */}
               {this.props.title}
            </h3>
        </div>
    }
}