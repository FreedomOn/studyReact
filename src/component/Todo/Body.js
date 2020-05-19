import React from 'react'
import {connect} from 'react-redux'
import action from '../../store/action'
class Body extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        // 获取redux中的任务数据，根据flag标识，筛选对应的内容
        let {data,flag} = this.props;
        data = data.filter((item)=>{
            let {state} = item;
            state = parseFloat(state);
            if(flag === 'complete'){
                return state === 1
            }else if(flag === 'uncomplete'){
                return state === 0
            }else{
                return true;
            }
        })
        return <div className='panel-body'>
           <ul className='list-group'>
                {data.map((item,index)=>{
                    let {id , name,state} = item;
                    state = parseFloat(state);
                    return <li className='list-group-item'>
                        <input type="checkbox" name='todo' checked = {!!state} 
                        onChange = {ev=>{
                            // 更新当前任务状态信息
                            let newState = ev.target.checked?1:0;
                            this.props.updateState(id,newState)
                        }}/>
                        <span className = {state ===1 ? 'complete':''}>{name}</span>
                        <a href="#!" className='btn-danger' onClick = {
                            ev=>{
                                let isOK = window.confirm('一但删除将不能还原，确定删除？')
                                if(isOK){
                                    this.props.remove(id)
                                }
                            }
                        }>删</a>
                    </li>
                })}
           </ul>
        </div>
    }
}
export default connect(state=>({...state.todo}),action.todo)(Body);