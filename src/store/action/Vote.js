/*
    每个模块单独的action-creater，就是把dispatch派发时候需要传递的action对象进一步
    封装处理(react-redux会体验到好处)
*/ 
import * as TYPE from '../action-types'
let vote = {
    support(){
        // dispatch派发的时候需要传递啥就返回啥即可
        return{
            type:TYPE.VOTE_SUPPORT
        };
    },
    aginst(){
        return{
            type:TYPE.VOTE_AGAINST
        };
    }
}
export default vote