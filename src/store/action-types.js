/*
    放所有的行为标识,管控当前项目中所有redux任务开发中需要的行为标识 action-type
*/
// vote  一般标识名和值的名是一样的
export const VOTE_SUPPORT = 'VOTE_SUPPORT' 
export const VOTE_AGAINST = 'VOTE_AGAINST' 
// PERSONAL
export const PERSONAL_INIT = 'PERSONAL_INIT' 
// textVote
export const TEXTVOTE_INIT = 'TEXTVOTE_INIT' //数据初始化
export const TEXTVOTE_SUPPORT = 'TEXTVOTE_SUPPORT'
export const TEXTVOTE_AGAINST = 'TEXTVOTE_AGAINST'
// TODO  
export const TODO_ADD = 'TODO_ADD';
export const TODO_FILTER = 'TODO_FILTER';
export const TODO_UPDATE_STATE = 'TODO_UPDATE_STATE'; //更新状态
