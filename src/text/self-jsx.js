/*
    封装一个jsx语法
    1.创建一个对象(默认有四个属性，type/props/ref/key),最后要把这个对象返回
    2.根据传递的值修改这个对象。
        type=>传递的type
        props=>需要做一些处理，大部分传递的props都赋值给对象的props，有一些比较 
                特殊--->如果是ref或者是key，我们需要把传递的props中的这两个属性值
                给创建对象的两个属性，而传递的props中把这两个值删除掉。
                把传递的children作为新创建对象的props中的一个属性。
*/
function createElement(type,props,children){
    // 创建一个对象，设置一些默认属性值
    let obj = {
        type:null,
        props:{
            children:"",
        },
        ref:null,
        key:null
    };
    //用传递的type和props覆盖原有的默认值
    // obj = {...obj,type,props}//=>{type:type,props:props}
    obj = {...obj,type,props:{...props,children}}
    //把ref和key提取出来(并且删除props中的属性)
    "key" in obj.props ? (obj.key=obj.props.key,obj.props.key = undefined) : null;
    "ref" in obj.props ? (obj.ref=obj.props.ref,obj.props.ref = undefined) : null;
    return obj;
}
let a = createElement(
    'h1',   //type
    {id:'titlebox',className:'title',style:{color:'pink'},key:12,ref:'aa'}, //props 
    '\u73E2\u5cF1'  //children
    ) 
console.log(a)  
/*
    key: 12
    props:
    children: "珢峱"
    className: "title"
    id: "titlebox"
    key: undefined
    ref: undefined
    style: {color: "red"}
    __proto__: Object
    ref: "aa"
    type: "h1"
    __proto__: Object
*/ 
/*
    render：把创建的对象生成对应的dom元素，最后插入到页面中
*/ 
let objJSX = {
    key: 12,
    props:{
        children: "珢峱",
        className: "title",
        id: "titlebox",
        key: undefined,
        ref: undefined,
        style: {color: "red"}
    },
    ref: "aa",
    type: "h1"
}
function render(obj,container,callBack){
    let {type,props} = obj || {},
         newElement = document.createElement(type);
    for(let attr in props){
        //不是私有的最直接结束遍历
        if(!props.hasOwnProperty(attr)) break;
        //如果当前属性没有值，直接不处理即可
        if(!props[attr]) continue;
        let value = props[attr];
        //className的处理
        if(attr === 'className'){
            newElement.setAttribute('class',value);
            continue;
        }
        //styled的处理
        if(attr === 'style'){
            if(value ==='') continue;
            for(let styKey in value){
                if(value.hasOwnProperty(styKey)){
                    newElement['style'][style] = value[styKey];
                }
            }
            continue;
        }
        //children的处理
        if(attr === 'children'){
            if(typeof(value) === 'string'){
                //createTextNode是创建一个文本节点
                let text = document.createTextNode(value);
                newElement.appendChild(text);
            }
            continue;
        }
        //基于setAttribute可以让设置的属性表现在HTML上
        newElement.setAttribute(attr,value)
    }
}
render(objJSX,root,()=>{
    console.log('ok')
})
