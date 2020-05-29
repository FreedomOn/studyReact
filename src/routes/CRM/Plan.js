import React from 'react'
import {connect} from 'react-redux'
class Plan extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {}
    }
    render(){
        return <section>
           我是计划管理也plan
        </section>
    }
}
export default connect()(Plan);