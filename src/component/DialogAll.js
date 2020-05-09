/*
    封装一个简单的完整的对话框
    首先安装bootstrap的样式
    yarn add bootstrap@3  =》安装3.0以上的版本
*/ 
import React from 'react';
export default function DialogAll (props){
    //获取传递进来的参数
    let {type,content,children} = props;
    let styObj = {
        width:'50%',
        color:'red',
        background:'blue',
        margin:'0 auto',
    }
    //类型处理
    let typeValue = type || '系统提示';
    if(typeof type ==='number'){
        switch(type){
            case 0:
              typeValue = '系统提示';
              break;
            case 1:
              typeValue = '系统警告';
              break;
            case 2:
              typeValue = '系统错误';
              break;
            default:
               typeValue = '傻逼玩意不听话'
        }
    }
    return <section className="panel panel-default" style={styObj}>
        <div className="panel-heading">
            <h3 className="panel-title" style={{textAlign:'center'}}>
                {typeValue}
            </h3>
        </div>
        <div className="panel-body">
            {content}
        </div>
        <div className="panel-footer">
            {
                // 如过传递了children，我们把内容放到尾部中，不传递什么都不显示
                children ? <div className="panel-footer"> 
                   {React.Children.map(children,item=>item)}
                </div> : null
            }
        </div>
    </section>
}