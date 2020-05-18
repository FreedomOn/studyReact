import * as TYPES from '../action-types'
let todo = {
    // 增加任务信息
    add(payload){
        console.log(payload,'payload')
        return {
            type:TYPES.TODO_ADD,
            payload  //传递的是输入的内容，传给reducer
        };
    },
    // 更新筛选的类别 text(all/complete/uncomplete)
    filter(text){
        return{
            type:TYPES.TODO_FILTER,
            text
        }
    },
    // 更新指定任务的状态信息
    updateState(taskId,newState){
        return{
            type:TYPES.TODO_UPDATE_STATE,
            taskId,  //哪一个
            newState //新的状态
        }
    }
}
export default todo