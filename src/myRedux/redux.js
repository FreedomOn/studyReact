/*
    redux的流程 原理  敲一个redux函数
    createStore:创建redux容器的
    参数：
        reducer：函数
    返回值
        store:{
            getState,
            dispatch,
            subscribe
        }
    redux源码的问题：
        getState 直接返回当前state  并没有进行深度克隆处理
        subscribe： 向事件池里面加方法 源码直接push 重复的事件fn删除直接splice 可能引发数组塌陷

*/ 
function createStore(reducer){
    // 创建一个store，state用来存储管理的状态信息，listenAry用来存储事件池中的方法
    // state 不用设置初始值,因为第一次dispatch执行reducer，state没有值，走的是reducer中赋值的默认值信息，
    //  我们自己会在创建容器的时候就把dispatch执行一次
    let state,
        listenAry = [];
    //dispatch=>   基于dispatch实现任务派发
    function diapatch(action){
        // 1.执行reducer，修改容器中的状态信息(接收reducer的返回值，把返回的信息替换原有的state)
        // 注意：我们是把返回值全部替换state，所以要求reducer中在修改状态之前要先把原始的状态信息克隆一份，
        // 在进行单个的修改。
        reducer(state,action);
        // 2.容器中状态信息通过reducer修改后 通知事件池中的方法依次执行
        for(let i = 0;i<listenAry.length;i++){
            let item = listenAry[i]
            if(typeof item === 'function'){
                item();
            }else{
                listenAry.splice(i,1);
                i--
            }
        }
    }
    //创建容器的时候执行一次dispatch，目的是把reducer中的默认值信息赋值给redux容器中的状态
    diapatch({type:'_INIT_DEFAULT_STATE'});

    // =>getState: 获取容器中的状态信息
    function getState(){
        // 1.需要保证返回的状态信息不能和容器中的state是同一个堆内存(否则外面获取状态信息后，直接就
        // 可以修改容器中的状态了，这不符合dispatch-reducer才能修改状态的规范)
        return JSON.parse(JSON.stringify(state)); //深度克隆
    }

    // =>subscribe  向事件池中追加方法
    function subscribe(fn){
        // 1.向容器中追加方法(重复验证)
        let isExit = listenAry.includes(fn)
        !isExit ? listenAry.push(fn) : null;
        // 2.返回一个方法：执行返回的方法会把当前绑定的方法在事件池中移除掉
        return function unsubscribe(){
            let index =  listenAry.indexOf(fn);
            // listenAry.splice(index,1) //=>可能引起数组塌陷
            listenAry[index] = null
        }
    }
    return {
        diapatch,
        getState,
        subscribe
    }
}
// 用法
let reducer = (state = {},action) =>{
    // state：原有状态信息
    // action：派发任务时候传递的行为对象
    switch(action.type){
        // .... 根据type执行不同的state修改操作
        /*
            case TYPE.XXX:
                state = {...state,n:100}
        */ 
    }
    return state; //返回的state会替换原有的state

}
// create的时候把reducer传递进来，但是此时reducer并没有执行，
// 只有dispatch派发的时候才执行，通过reducer修改容器中的状态
let store = createStore(reducer);
// let unsubscribe = store.subscribe(fn);
// unsubscribe() //移除绑定的方法fn