import * as TYPE from '../action-types'
let textVote = {
    support(){
        console.log('执行action了吗')
        return {
            type:TYPE.TEXTVOTE_SUPPORT
        }
    },
    aginst(){
        console.log('执行action了吗')
        return{
            type:TYPE.TEXTVOTE_AGAINST
        }
    },
    init(initData = {}){
        return{
            type:TYPE.TEXTVOTE_INIT,
            ...initData
        }
    }
}
export default textVote;