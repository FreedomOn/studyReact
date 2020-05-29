import React from 'react'
import {connect} from 'react-redux'
import action from '../../../store/action'
class Create extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {}
    }
    render(){
        return <div>
           用户编号：<input type='text' ref='USER_ID'></input>
           <br/> <br/>
           用户姓名：<input type='text' ref='USER_NAME'></input>
           <br/> <br/>
           <button onClick={this.submit}>增加用户</button>
        </div>
    }
    submit = ev =>{
        let {USER_ID,USER_NAME} = this.refs;
        let {create,history} = this.props;
        if(USER_ID.value === ''||USER_NAME.value ===''){
           alert('输入内容哦')
        }else{
            create({
                id:USER_ID.value,
                name:USER_NAME.value
            })
            USER_ID.value = USER_NAME.value ='';
            // 增加成功后跳转到列表也变
            history.push('/custom/list')
        }
    }
}
export default connect(state=>({...state.custom}),action.custom)(Create);