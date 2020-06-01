import React from 'react';
import {connect} from 'react-redux';
// LocaleProvider 这个组件是不行的
// ConfigProvider：国际化组件，目的是把组件汉化
import { ConfigProvider,Calendar, DatePicker,Button} from 'antd';
// 这一步是为了汉化
import zh_CN from 'antd/lib/locale-provider/zh_CN';

import '../../static/css/ant.css';
// 以下4行引入解决日期控件英文的问题
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')



class Home extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            loading:false
        }
    }
    render(){
        // 只要ConfigProvider包含的组件都是汉化的
        return <ConfigProvider locale={zh_CN}>
            <DatePicker></DatePicker>
            <div style={{width:'300px',height:'200px',margin:'0 100px'}}>
              <Calendar></Calendar>
            </div>
            <div style={{float:'left'}}>
              <Button type='danger' loading = {this.state.loading} onClick = {
                  ev =>{
                      this.setState({loading:true})
                      setTimeout( ()=>{
                          this.setState({
                              loading:false
                          })
                      },2000)
                  }}>按钮</Button>
            </div>
        </ConfigProvider>
    }
}
export default connect()(Home);