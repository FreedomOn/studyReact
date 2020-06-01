import * as TYPES from '../action-types'
let custom = {
    //增加客户信息 payload={id,name}
    //    create(payload){
    //         //thunk中间件的使用:在指定执行派发任务的时候，等待2000ms后在派发
    //         return dispath =>{
    //             setTimeout(()=>{
    //                 // dispath都给我们了，我们什么时候派发，自己决定就行
    //                 dispath({
    //                     type:TYPES.CUSTOM_CREATE,
    //                     payload
    //                 })
    //            },2000)
    //         }    
    //    }
        // promise中间件的语法
    create(payload){
        return {
            type:TYPES.CUSTOM_CREATE,
            // 传递给reducer的payload需要等待promise成功，把成功的结果传递过去
            payload:new Promise(resolve=>{
                setTimeout(()=>{
                    resolve(payload)
                },2000)
            })
        }    
    }
}
export default custom