/*
    1.如果redux原有的状态不存在，我们会设置一个初始值
*/ 
import * as TYPE from  '../action-types'
export default function textVote (state = {
    title:'',
    n:0,
    m:0  
},action){
    switch(action.type){
        case TYPE.TEXTVOTE_SUPPORT:
            state = {...state, n: state.n+1}
            console.log(state.n,"state")
            break;
        case TYPE.TEXTVOTE_AGAINST:
            state = {...state, m: state.m+1}
            break;
        case TYPE.TEXTVOTE_INIT:
            // 初始化的时候action行为对象中不仅有types，而且还有其他需要初始化的信息
            // state = {...state}
            // for(let attr in action){
            //     if(action.hasOwnProperty(attr)){
            //         if(attr === 'type') continue
            //         state[attr] = action[attr;]
            //     }
            // }
            let {title = '',n=0,m=0} = action;
            state = {...state,title,n,m }
            break;
        default:
            break;
    }
    return state;
}