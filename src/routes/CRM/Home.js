import React from 'react'
import {connect} from 'react-redux'
class Home extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {}
    }
    render(){
        return <section>
        我是首页home
        </section>
    }
}
export default connect()(Home);