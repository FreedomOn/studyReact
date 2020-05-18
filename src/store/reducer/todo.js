import * as TYPES from  '../action-types'
export default function todo(state={
    data:[],
    flag:'all'
},action){
    // 为了防止不直接修改原有的状态信息，我们把原有的深度克隆一份，return的结果才是覆盖原有的信息
    state = JSON.parse(JSON.stringify(state));
    switch (action.type){
        case TYPES.TODO_ADD:
            // 增加任务信息 payload:传递进来需要增加的任务信息
            let {payload} = action;
            console.log(payload,'传递进来增加的信息')
            payload.id = state.data.length === 0 ? 1 : (parseFloat(state.data[state.data.length-1]['id'])+1)
            state.data.push(payload)
            break;
        case TYPES.TODO_FILTER:
            // 更新筛选方式
            console.log(action.text,'传递的text')
            state.flag = action.text;
            break;
        case TYPES.TODO_UPDATE_STATE:
            // 修改任务状态
            let {taskId,newState} = action;
            let item =  state.data.find(item=>item.id === taskId);
            if(item){
                item.state = newState;
            }
            break;
        default:
            break;

    }
    return state;
}