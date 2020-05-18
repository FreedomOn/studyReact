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
import textVote from './textVote'
// todo
import todo from './todo'
let action = {
    vote,
    person,
    textVote,
    todo
}
export default action;