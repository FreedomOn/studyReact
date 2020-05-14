import React from 'react'
import action from '../../store/action'
export default class VoteHandle extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        console.log(this.props.store)
        return <div className={'panel-footer'}>
            <button className={'btn btn-success'} onClick = {()=>{
                console.log(111)
              this.props.store.dispatch(action.textVote.support());
            }}>支持</button>
            &nbsp;  &nbsp;  &nbsp;  &nbsp;
            <button className={'btn btn-danger'} onClick={()=>{
                console.log(222)
              this.props.store.dispatch(action.textVote.aginst());
            }}>反对</button>
        </div>

    }
}