import React from 'react'
import {connect} from 'react-redux'
import QS from 'qs'
class Detail extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {}
    }
    render(){
        // 1.问号传参
        let {location:{search},data} = this.props
        console.log(search)
        return <div>
            编号：1
            <br/>
            姓名：xxx
        </div>
    }
}
export default connect(state=>({...state.custom}))(Detail);
