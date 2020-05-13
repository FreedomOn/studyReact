import React from 'react'
// import * as  TYPE  from '../../store/action-types'
import action from '../../store/action'
export default class VoteFooter extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        // let {store:{dispatch}}= this.props;
        return <div className={'panel-footer'}>
            <button className={'btn btn-success'} onClick = {()=>{
              this.props.store.dispatch(action.vote.support())
            }}>支持rng</button>
            &nbsp;  &nbsp;  &nbsp;  &nbsp;
            <button className={'btn btn-danger'} onClick={()=>{
              this.props.store.dispatch(action.vote.aginst())
            }}>支持ig</button>
        </div>
    }
}