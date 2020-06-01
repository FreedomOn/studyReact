/* 
    store
        reducer  存放每一个模块的reducer
            vote.js
            person.js
            .....
            index.js  把每一个模块的reducer最后合并为一个reducer
        action    存放每一个模块需要进行的派发任务(ActionCreater)  
            vote.js
            person.js
            .....
            index.js  所有模块的action合并 
        action-types.js  所有派发任务的行为标识都在这里进行宏观管理
        index.js   创建store
         
*/ 

import {createStore,applyMiddleware} from 'redux'
import reduxLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import reducer from './reducer'  // <=>./reducer/index

let store = createStore(reducer,applyMiddleware(reduxLogger,reduxThunk,reduxPromise))
export default store;
/*
    redux 中间件
      redux-logger 能够在控制台清晰的展示出当前redux操作的流程和信息(原有状态，派发信息,
                   修改后的状态信息)
      redux-thunk  处理一部的dispath派发
      redux-promise 在dispath派发的时候支持promise操作
      yarn add redux-logger redux-thunk redux-promise
*/ 
/*
    使用
    先导入applyMiddleware以及三个中间件
        import {createStore,applyMiddleware} from 'redux'
        import reduxLogger from 'redux-logger'
        import reduxThunx from 'redux-thunk'
        import reduxPromise from 'redux-promise'
        let store = createStore(reducer,applyMiddleware(reduxLogger,reduxThunx,reduxPromise))

*/ 
/*
    1.安装 yarn add antd
    2.快速使用
        导入antd：需要使用哪些组件就导入哪些组件
        导入antd的样式：我们自己建立一个css样式表，在样式表中基于@import导入antd.css
        antd提供的组件都是英文国际化的，需要中文显示，我们导入汉化模块

*/ 