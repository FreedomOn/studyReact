/*
    一个项目只能有一个reducer
    把每个模块单独设定的reducer函数最后合并成为总得reducer
    为了保证合并reducer过程中，每个模块管理的状态信息不会相互冲突，redux在合并的时候把容器中的状态
    分开管理（以合并reducer的时候设置属性名为状态划分属性名，把各个模块管理的状态放到自己的属性下）

    state = {
        vote:{
            n:0,
            m:0
        },
        person:{
            baseInfo:{}
        }
    }
    以后获信息的时候 也要吧vote等模块名加上
    eg: store.getState.vote.n
*/ 
// combineReducers 把单独的reducer合并起来
import {combineReducers} from 'redux'
import vote from './Vote';
import person from './Person';

let reducer = combineReducers({
    vote,
    person
})
// 导出
export default reducer;