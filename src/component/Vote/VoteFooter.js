import React from 'react'
import PropsTypes from 'prop-types'
export default class VoteFooter extends React.Component{
    static contextTypes = {
        callback:PropsTypes.func
    }
    constructor(props,context){
        super(props,context)
        this.state = {}
    }
    render(){
        let {callback} = this.context
        console.log(callback)
        console.log(this.context)
        return <div className={'panel-footer'}>
            <button className={'btn btn-success'} onClick={()=>{
                callback('support')
            }}>支持rng</button>
            &nbsp;  &nbsp;  &nbsp;  &nbsp;
            <button className={'btn btn-danger'} onClick={()=>{
                callback('aginst')
            }}>支持ig</button>
        </div>
    }
}