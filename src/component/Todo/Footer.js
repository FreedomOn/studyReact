import React from 'react'
import {connect} from 'react-redux'
import action from '../../store/action'
class Footer extends React.Component{
    constructor(props){
        super(props)
        this.showData = [
        {text:'全部',flag:'all'},
        {text:'已完成',flag:'complete'},
        {text:'未完成',flag:'uncomplete'}
       ]
        this.state = {}
    }
    render(){
        let {flag} = this.props;
        // console.log(flag,'flag')
        // console.log(this.props)
        return <div className='panel-footer'>
            <ul className='nav nav-pills'  onClick = {this.updateFilter}>
                {this.showData.map((item,index)=>{
                    let {text,flag:itemFlag} = item;
                    return <li key={index} className={itemFlag === flag ? 'presentation active':'presentation'}>
                         <a href='#!' flag={itemFlag}>{text}</a>
                     </li>
                })}     
            </ul>
        </div>
    } 
     updateFilter = (ev) => {
         console.log(ev)
        console.log('点击了')
        let target = ev.target,
            tarTag = target.tagName;
            console.log(tarTag)
        if(tarTag === 'LI'){
            target = target.firstElementChild;
            tarTag = target.tagName;
        }
        if(tarTag === 'A'){
            let text = 'all';
            console.log(text,'text')
            if(text === 'all'){
                text = target.getAttribute('flag')
            }else if(text ==='complete'){
                text = target.innerHTML === '已完成' ? text='complete' : null;
            }else if(text ==='uncomplete'){
                text = target.innerHTML === '未完成' ? text='uncomplete' : null
            }
        // 当前筛选状态和点击按钮是一致的，这样没有必要重新渲染筛选状态
            console.log(text,'text')
            if(this.props.flag === text){ console.log('相同') ;return}
            this.props.filter(text)
        } 
    }
}
export default connect(state=>({...state.todo}),action.todo)(Footer);