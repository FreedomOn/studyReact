/*
    vote板块的reducer
        参数 state ：原始redux管理的状态信息(没有设置初始值)
             action：dispatch派发时候传递的行为对象（type...）
*/ 

// 把模块中所有导出的内容都导入并重新命名为TYPE，此后TYPE对象中包含了所有导出的信息
import * as TYPE from  '../action-types'
export default function person (state = {
   baseInfo:{}
},action){
    // 初始值一般state = {}这么写 看需要管理什么 n是支持 m是反对
    switch (action.type){
        case TYPE.PERSONAL_INIT:
            // .....
            break
        default:
            break;
    }
    // 返回state替换原来的信息
    return state;
}