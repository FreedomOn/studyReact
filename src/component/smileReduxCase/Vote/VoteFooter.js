import React from 'react'

export default class VoteFooter extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {}
    }
    render(){
        return <div className={'panel-footer'}>
            <button className={'btn btn-success'} onClick={()=>{
                this.props.myRedux.updateState(state=>{
                    let {n=0} = state;
                    return {
                        n:n+1
                    }
                })
            }}>支持rng</button>
            &nbsp;  &nbsp;  &nbsp;  &nbsp;
            <button className={'btn btn-danger'} onClick={()=>{
               this.props.myRedux.updateState(state=>{
                let {m=0} = state;
                return {
                    m:m+1
                }
            })
            }}>支持ig</button>
        </div>
    }
}