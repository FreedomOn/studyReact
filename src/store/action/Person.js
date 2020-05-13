/*
    每个模块单独的action-creater，就是把dispatch派发时候需要传递的action对象进一步
    封装处理(react-redux会体验到好处)
*/ 
import * as TYPE from '../action-types'
let person = {
    baseInfo(){
        return{
            type:TYPE.PERSONAL_INIT
        };
    }
}
export default person