/*
    合并所有的action-creator 类似于reducer合并。为了防止冲突，合并后的对象是以末班单独划分管理
    action = {
        vote:{
            xxx(){}
        },
        ....
    }
*/ 
import vote from './Vote';
import person from './Person';
let action = {
    vote,
    person
}
export default action;