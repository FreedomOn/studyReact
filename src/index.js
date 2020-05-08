import React from 'react';
//=>从react-dom中导入一个reactDom,逗号后面的内容是吧reactDom这个对象进行节解构
import ReactDom ,{render} from 'react-dom';
import Dialog from '../src/component/Dialog.js';
//引入外部的js 需要加引号 引入
// import '../src/text/self-jsx.js';
let root = document.querySelector("#root")

ReactDom.render(<div> 
    {/* jsx中调取组件，只需要把组件当做一个标签调取使用即可 */}
    <Dialog con='哈哈哈'></Dialog>
    {/* 属性值不是字符串，我们需要使用大括号包起来 */}
    <Dialog con='呵呵呵' lx={1}/>
</div>,root)
/*
  react 组件
    按照 组件/模块管理 的方式来构建程序的，也就是把一个程序划分一个个的组件来单独处理。
  优势：
     1.有助于对人协作开发
     2.我们开发的组件可以被复用
  react中创建组件有两种方式
     函数声明式组件
     基于集成component类来创建组件 
  src -> component :这个文件夹中存放的就是开发组件

*/ 

