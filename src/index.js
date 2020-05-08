import React from 'react';
//=>从react-dom中导入一个reactDom,逗号后面的内容是吧reactDom这个对象进行节解构
import ReactDom ,{render} from 'react-dom';

let root = document.querySelector("#root")

// ReactDom.render(<div  style={{color:'red'}}> 
//   <h1>我是标题</h1>
//   </div>,root)
let styleObj = {
  color:"red"
}
render(<h1 id="titlebox" className="titlle" style={styleObj}>
  hahaha 
  </h1>,root)
/*
  JSX渲染机制
    1.基于babel中的语法解析模块（babel-preset-react）把JSX编译为creatElement(...)结构；
    2.执行react.creatElement(type,props,children),创建一个对象(虚拟DOM)；
    3.ReactDom.render(jsx语法最后生成的对象，容器)，基于render方法把生成的对象动态创建为dom元素
      插入到制定的容器中。
*/ 