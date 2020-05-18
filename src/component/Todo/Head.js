import React from 'react'
import {connect} from 'react-redux'
import action from '../../store/action'
class Head extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        // 筛选未完成的任务数量
        let {data} = this.props,
            len = data.filter(item=>(parseFloat(item['state']) ===0)).length
        return <div className='panel panel-heading'>
            <h3 className='panel-title'>
                任务列表[当前未完成的任务数<span className='count'>{len}</span>]
            </h3>
            <input type='text' className='form-control' placeholder='请输入需要执行的任务todo' onKeyUp = {this.keyUP}></input>
        </div>
    }
    // 向redux中追加一条新的任务
    keyUP = ev =>{
        // 按下enter键
        let that =this
        if(ev.keyCode === 13){
            let value = ev.target.value.trim();
            console.log(value,'value')
            console.log(this.props,'props')
            if(value.length ===0) {return}
                // 执行action中的方法
               that.props.add({
                name:value,
                state:0
            })
            ev.target.value = ''
        }
    }
}
// react 直接拿来用的方法
export default connect(state=>({...state.todo}),action.todo)(Head);