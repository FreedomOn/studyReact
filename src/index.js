import React from 'react';
//=>从react-dom中导入一个reactDom,逗号后面的内容是吧reactDom这个对象进行节解构
import ReactDom  from 'react-dom';
import store from './store'  //导入工程化的store
/*
        1.Provider  跟组件
            当前整个项目都在Provider组件下，作用就是把创建的store供任何后代组件使用
        2.connect 高阶组件
*/ 
import {Provider} from 'react-redux'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
/*
    BrowserRouter vs  HashRouter
    是两种常用的理由实现思想，BrowserRouter浏览器路由 HashRouter哈希路由
    BrowserRouter：
        它是基于H5中的history API 来保持UI和URL同步(真实项目中应用的不多,一般只有当前项目
         是基于服务器渲染的，我们才会使用浏览器路由)
    HashRouter
        真实项目中：前后端分离的项目,客户端渲染，我们经常使用的是哈希来完成的，它依据相同的
        页面地址，不通过的哈希值，来规划当前项目中的哪一个组件呈现渲染，他基于原生JS构造了一套
        类似于history API的机制，每一次路由切换都是基于history stack完成的
    HashRouter的应用
    HashRouter的特点
        1.当前项目一旦使用HashRouter，则默认在页面地址后加上'#/',也就是hash默认值是一个斜杠
          我们一般让其显示首页组件
        2.HashRouter中只能出现一个子元素
        3.HashRouter机制中，我们需要根据哈希地址不同，展示不容的组件内容，我们需要使用route
    route
        path：设置匹配地址，但是不是严格匹配，当前页面哈希地址只要包含完整的它(内容是不变的)
              都能够匹配到
              path='/' :和它匹配的地址只要有斜杠即可
              path='/user': '#/user/login'也可以匹配 但是'#/user2'无法匹配
        component: 一旦哈希值和当前route的path相同了，则渲染component指定的组件
        exact：让path的匹配严谨一些(只有url哈希值和path设定的值相等才可以匹配得到)
        render:当页面的哈希地址和path匹配，会把render规划的方法执行，在方法中一般做'权限校验'
                (渲染组件之前验证是否存在权限，不存在做一些特殊处理)
        默认情况下，会和每一个route都做校验,Switch组件可以解决这个问题，和switch case一样
        只要一种情况校验成功，就不在向后校验了
*/ 
// propTypes是facebook开发的一个插件，基于这个插件可以给组件传递的属性设置规则
// 安装命令   yarn add prop-types
// import propTypes from 'prop-types';
/*
    1.我们一般吧程序中的公共样式放到index.js导入，这样再其他文件中也可以使用了，
      webpack会把所有的组件都编译在一起，index是主入口；
    2.导入bootstrap，需要导入的不经过压缩处理的文件，否则无法编译，以后都使用ant
*/ 
import 'bootstrap/dist/css/bootstrap.css'  //bootstrap样式插件
import '../src/static/less/todo.less'   //导入todo样式
import '../src/static/css/common.css'
//引入外部的js 需要加引号 引入
// import ReactDom ,{render} from 'react-dom';
// import Dialog from '../src/component/Dialog.js';
// import '../src/text/self-jsx.js';
// import ReactSwipe from 'react-swipe'; //引入的轮播图插件
// import Vote from './component/Vote/Vote.js'  //投票案例
// import Vote from './component/smileReduxCase/Vote/Vote.js'  //redux 封装myrudux案例
// import Vote from './component/reduxVote/Vote.js'  //redux 安装redux案例
// import VoteBase from '../src/component/textVote/VoteBase'
// import VoteHandle from '../src/component/textVote/VoteHandle'
// import Head from './component/Todo/Head'     //todo组件
// import Body from './component/Todo/Body'     //todo组件
// import Footer from './component/Todo/Footer' //todo组件
// 使用react路由实现spa

// 路由组件
// import A from './component/routerText/A.js'
// import B from './component/routerText/B.js'
// import C from './component/routerText/C.js'
import Nav from './component/RouteCRM/Nav'
import Home from './routes/CRM/Home'
import Custom from './routes/CRM/Custom'
import Plan from './routes/CRM/Plan'
let root = document.querySelector("#root")

ReactDom.render(<Provider store = {store}>
    <HashRouter>
        <div>
            {/* nav头部 */}
            <Nav></Nav>
            {/* 基于hash router展示不同的页面 */}
            <Switch>
                <Route path='/' exact component = {Home}></Route>
                <Route path='/custom'  component = {Custom}></Route>
                <Route path='/plan'  component = {Plan}></Route>
                {/* 重定向首页 */}
                <Redirect to='/?lx=unsafe'></Redirect>
            </Switch>
        </div>
    </HashRouter>
</Provider>,root)
//react路由基础知识总结=========================================================
// ReactDom.render(<HashRouter>
//     <div>
//         <Switch>
//             <Route path='/' exact component = {A}></Route>
//             <Route path='/b' component = {B}></Route>
//             <Route path='/pay' render={()=>{
//                 // 一般在render中做路由权限处理
//                 let flag = localStorage.getItem('flag');
//                 if(flag && flag ==='safe'){
//                     return <C></C>
//                 }
//                 return '当前环境不安全，不利于支付'
//             }}></Route>
//             {/* 上述都设置完成后，会在末尾设置一个匹配：以上都不匹配，是非法地址，做特殊处理 */}
//             {/* <Route render= {()=>{
//                 return <div>404</div>
//             }}></Route> */}
//             {/* 也可以基于redirect进行重定向
//                    to string:重新定向新的地址*
//                    to object:重新定向新的地址，只不过指定了更多的信息
//                    {
//                        pathname：定向的地址
//                        search：给定向的地址问号传参
//                        state：给定向后的组件传递一些信息
//                    }
//                    push:如果设置了这个属性，当前跳转的地址会加入到history.stack中的一条记录
//                    from：设定当前来源的页面地址
//                    eg： <Redirect from='/custom' to='/custom/list'></Redirect>
//                     解释：如果当前请求的hash地址是'/custom' 我们让其重定向'/custom/list'
//              /}
//             {/* 重新定向到首页 */}
//             <Redirect to='/?lx=404'></Redirect>
//         </Switch>  
//     </div>
// </HashRouter>,root)  
// react 单向数据流绑定原理===================================================================================================
// class A extends React.Component{
//     state = {
//         name:'aa'
//     }
//     render(){
//         let { name } = this.state
//         return <div>
//             姓名<span>{name}</span>
//             <br></br>
//             <input type='text' value = {name}
//              onChange = {
//                  ev=>{
//                      this.setState({
//                          name:ev.target.value
//                      })
//                  }
//              }
//             ></input>
//         </div>
//     }
//     componentDidMount(){
//         setTimeout(()=>{
//             this.setState({
//                     name:'哈哈哈'
//                 })
//             },100)
//         }
//     }    
//     ReactDom.render(<div>
//     <A></A>
// </div>,root)   
// todo 案例====================================================================
// ReactDom.render(<Provider store={store}>
//     <main className="panel panel-default">
//         <Head></Head>
//         <Body></Body>
//         <Footer></Footer>
//     </main>
// </Provider>,root)
// 复习使用redux==============================================================
//         let styleObj = {
//             width:'60%',
//             margin:'20px auto'
//         }
// ReactDom.render(<section className="panel oanel-default" style={styleObj}>
//     <VoteBase  store = {store}></VoteBase>
//     <VoteHandle  store = {store}></VoteHandle>
// </section>,root)

// 使用redux 工程化 使用======================================================
// ReactDom.render(<div>
//     {/* title是标题  count是初始支持人数 store传进去*/}
//     <Vote title = {'电竞春晚RngVSiG'} 
//           store = {store}
//     ></Vote>
// </div>,root)

// redux 在index页面使用 简洁版、、、、、、、、、、=============================================
// import {createStore} from 'redux'   //导入redux
// 创建容器，需要把reducer传递进来(记录了所有状态的更改信息)
// let reducer = (state = {n:0,m:0},action) =>{
//     /* reducer的作用 1。记录了所有状态修改的信息(根据行为表示走不同的修改任务)
//                      2.修改容器中的状态信息
//        参数：
//        state：容器中原有的状态信息(如果第一次使用，没有原有状态，给一个初始默认值)
//        action:dispatch任务派发的时候传递的行为对象(这个对象中必有一个type属性，是操作的行为标识
//                renducer就是根据这个行为标识来识别该如何修改状态信息)
//     */
//     //根据不同的标识 把状态进行更改 
//    switch(action.type){
//         case 'VOTE_SUPPPORT':
//             state = {...state,n:state.n+1} //拿到原有的所有信息 再把其中的n在原有基础上加1
//             break;
//         case 'VOTE_AGAINST':
//             state = {...state,m:state.m+1}
//             break;
//         default:
//             break;
//    }
//    return state;//只有把最新的state返回，原有的状态才会修改
// }
// let store = createStore(reducer);
/*
    创建store中提供三个方法
    dispatch:派发行为(传递一个对象，对象中有一个type属性，通知reducer修改状态信息)
    subscribe:事件池追加方法 
    getState：获取最新管理的状态信息
*/ 
// let root = document.querySelector("#root")

// ReactDom.render(<div>
//     {/* title是标题  count是初始支持人数 store传进去*/}
//     <Vote title = {'电竞春晚RngVSiG'} 
//           store = {store}
//     ></Vote>
// </div>,root)
// redux的使用//////===========================================================================
// 全局下挂载一个容器来实现信息的共享和通信   跟redux无关 
// let myRedux = (function anonymous(){
//     let stateObj = {},
//         listenAry = [];
//     function updateState(callBack){
//         // callBack：这个回调函数中一定是修改并且返回最新的状态信息的,用返回的状态信息替换原有的状态信息
//         let newObj = callBack(stateObj);
//         stateObj = {...stateObj,...newObj};
//         // 当状态更改，通知计划表中的方法执行
//         listenAry.forEach(item=>{
//             if(typeof item ==='function'){
//                 item()
//             }
//         })
//     }
//     function getState(){
//         return stateObj;
//     }
//     function subScrube(fn){
//         for(let i =0;i<listenAry.length;i++){
//             let item = listenAry[i]
//             if(item === fn){
//                 return
//             }
//         }
//         listenAry.push(fn)
//     }
//     return{
//         updateState,
//         getState,
//         subScrube
//     }
// })();

// 组件之间的信息传递--》投票=================================================================
// ReactDom.render(<div>
//     {/* title是标题  count是初始支持人数 */}
//     <Vote title = {'电竞春晚RngVSiG'} 
//           count = {{ 
//             n:88,
//             m:99}
//           }
//           myRedux = {myRedux}
//     ></Vote>
// </div>,root)
//轮播图===================================插件==============================================
// const Carousel = () => {
//     let reactSwipeEl;
  
//     return (
//       <div>
//         <ReactSwipe
//           className="carousel"
//           swipeOptions={{ continuous: false }}
//           ref={el => (reactSwipeEl = el)}
//         >
//           <div>PANE 1</div>
//           <div>PANE 2</div>
//           <div>PANE 3</div>
//         </ReactSwipe>
//         <button onClick={() => reactSwipeEl.next()}>Next</button>
//         <button onClick={() => reactSwipeEl.prev()}>Previous</button>
//       </div>
//     );
//   };
// ReactDom.render(<div>
//     <Carousel />
// </div>,root)
// 组件之间的信息传递=================================================================================
// 父组件把信息传递给子组件=>基于属性传递即可(传递是单方向的，只能父亲把信息给儿子)
// 后期子组件的信息修改，可以让父组件传递给子组件的信息发生变化(也就是子组件接收的属性发生变化)
// 子组件会重新渲染，会触发 componentWillReceiveProps这个钩子函数
// 只要实现：点击组件body中按钮的时候，修改父组件panel的状态信息，panel的状态改变，panel会重新执行
// render渲染，把最新的状态最为属性，传递给子组件head，head接受的属性发生改变，head组件也会重新渲染
// 子组件改变父组件：1.把父组件中的一个方法作为一个属性传递给子组件。
//2.在子组件中，把基于属性传递进来的方法，在合适的时候执行(相当于在执行父组件的方法，这个方法可以操作父组件中的信息)
// class Panel extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             n:0
//         }
//     }
//     fn=()=>{
//         // 修改panel中的状态信息
//         this.setState({
//             n:this.state.n+1
//         })
//     }
//     render(){
//         return <section className="panel panel-default">
//             {/* 父组件在调取子组件的时候，把信息通过属性传递给子组件 */}
//             <Head count={this.state.n}></Head>
//             {/* 父组件把自己的一个方法基于属性传递给子组件，目的是在子组件中执行这个方法 */}
//             <Body callBack={this.fn}></Body>
//         </section>
//     }
// }
// class Head extends React.Component{
//     render(){
//         return <div className='panel-heading'>
//             {/* 子组件通过属性获取父组件传递的内容 */}
//             点击次数:{this.props.count}
//         </div>
//     }
// }
// class Body extends React.Component{
//     constructor(){
//         super();
//         this.state = {n:0}
//     }
//     render(){
//         return <div className='panel-body'>
//             {/* 子组件接收父组件传递的函数 点击执行 */}
//             <button className="btn btn-success" onClick={this.props.callBack}>点我哦！！！</button>
//         </div>
//     }
// }
// ReactDom.render(<div>
//    <Panel></Panel>
//  </div>,root)
// 生命周期的渲染流程=====================================================================================
// class A extends React.Component{
//     // 这个是第一个执行的，执行完后(给属性设置默认值后)才向下执行
//     static defaultProps = {}
//     constructor(){
//         super();
//         console.log('111constructor');
//         this.state = {
//             n:1
//         }
//     }
//     componentWillMount(){
//         console.log('2will mount 第一次渲染之前',this.refs.hhhh)
//         // 在will mount中如果直接setState修改数据，会把状态信息改变后然后render和did mount
//         // 真实项目中，一般第一次组件渲染，都是绑定默认的数据，第二次绑定的才是从服务器获取的数据
//         this.setState({
//             n:2
//         })
//     }
//     componentDidMount(){
//         /*
//             1.控制状态信息更改操作
//             2.从服务器获取数据，然后修改状态信息，完成数据绑定
//         */ 
//         console.log('4did mount 第一次渲染之后',this.refs.hhhh)
//     }
//     shouldComponentUpdate(nextProps,nextState){
//         // 在这个钩子函数当中，获取的state不是最新修改的，而是上一次的state的值
//         // 两个参数 nextProps：最新修改的属性信息 nextState：最新修改的状态信息
//         console.log('5 是否允许更新,函数返回true是允许，返回false是不允许',this.state.n)
//         if(nextState.n>3){
//             return false;
//         }else{
//             return true;
//         } 
//     }
//     componentWillUpdate(nextProps,nextState){
//         // 这里获取的状态是更新之前的
//         console.log('6组件更新之前',this.state.n,nextState)
//     }
//     componentDidUpdate(nextProps,nextState){
//         // 这里获取的状态是更新之后的
//         console.log('7组件更新之后',this.state.n,nextProps,nextState)
//     }
//     render(){
//         console.log(' 3 render')
//         return <div ref='hhhh'>
//             {this.state.n}
//         </div>
//     }
// }

// ReactDom.render(<div>
//    <A ></A>
// </div>,root)
// 用react实现mvvm  ////////////////////=========================================================
// class Temp extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             text:'用react实现mvvm'
//         }
//     }
//     componentDidMount(){
//         setTimeout(()=>{
//             this.setState({
//                 text:'数据影响视图'
//             })
//         },1000)
//     }
//     render(){
//         let {text} = this.state;
//         return <section className='panel panel-default'>
//             <div className='panel-heading'>
//                <input type='text' className='from-control' value={text}
//                onChange = {(ev)=>{
//                    //在文本框中改变，实现的是视图改变数据
//                    this.setState({
//                        text:ev.target.value
//                    })
//                }}
//                ></input>
//             </div>
//             <div className='panel-body'>
//                 {text}
//             </div>
//             </section>
//     }
   
// }
// ReactDom.render(<main>
//     <Temp></Temp>
// </main>,root)

//投票案例/////////////////////////////////////////////////////////////////////////////////
// class Vote extends React.Component{
//     // 组件传递的属性是只读的 为其设置默认值和相关规则
//     static defaultProps = {};
//     static propTypes = {
//         title:propTypes.string.isRequired
//     }
//     constructor(props){
//         super(props)
//         this.state={
//             n:0,//支持人数
//             m:0,//反对人数
//         };
//     }
//     componentDidMount(){
       
//     }
//     render(){
//         let styleObj = {
//             width:'60%',
//             margin:'20px auto'
//         }
//         console.log(this.props)
//         let {title} = this.props
//         console.log(title)
//         let {n,m} = this.state;
//         let rate = ((n+m) ===0 ? '0%':(n/(n+m)*100).toFixed(2)+'%')
//         return <section className='panel panel-default' style={styleObj}>
//             <div className='panel-heading'>
//                 <h3 className='panel-title' style={{textAlign:'center'}}>{title}</h3>
//             </div>
//             <div className='panel-body'>
//                 支持人数{n}
//                 <br/><br/>
//                 反对人数{m}
//                 <br/><br/>
//                 支持率{rate}
//             </div>
//             <div className='panel-footer'> 
//                 <button className='btn btn-success' onClick = {this.support}>IG</button>
//                 &nbsp; &nbsp; &nbsp; &nbsp;
//                 <button  className='btn btn-danger'onClick = {this.Opposition}>Rng</button>
//             </div>
//         </section>
//     }
//     // 点击事件一般可以在行内  但是this是undefined  解决方案有两种 一种是bind(this)  第二种是用箭头函数
//     support=()=>{
//         this.setState({
//           n:this.state.n+1
//         })
//     }
//     Opposition=()=>{
//         this.setState({ 
//             m:this.state.m+1
//           })
//     }
    
// }
// ReactDom.render(<main>
//     <Vote title='lol小组赛IGvsRng。电竞春晚' ></Vote>
// </main>,root)

//===========================================================================================
/*
react中组件的两个的概念
    1.组件的属性：只读 调取组件的时候传递进来的信息
    2.组件的状态 读写 自己在组件中设定和规划的(只有类声明的组件才有状态的管控，函数式不存在状态管理)
    ==>组件状态类似于vue中的数据驱动，我们数据绑定的时候是基于状态值绑定，当修改组件的状态后，
       对应的jsx元素也会跟着重新渲染(差异渲染：只把数据改变的部分重新渲染，基于dom-diff算法完成)
*/
// 函数式组件是静态组件，和执行普通函数一样，调取一次组件，就把组件的内容获取到，插入到页面中
//  如果不重新调取组件，显示的内容是不会发生任何改变的。
// 实际项目中只有调取组件，组件中的内容不会再次改变的情况下，我们才可能使用函数式组件。
// 函数是创建一个北京时间
// function Clock(){
//     return <section>
//         <h3>当前北京时间</h3>
//     <div style={{color:'red',fontWeight:'bold'}}>
//         {new Date().toLocaleString()}
//     </div>
//     </section>
// }
// //调取组件执行
// setInterval(() => {
//     //=>每间隔1s重新调取组件，然后渲染到页面中
//     ReactDom.render(<div>
//         <Clock></Clock>
//     </div>,root)
// }, 1000);
////////类创建的方式  封装北京时间/////////////////////////////////////////////
// class Clock extends React.Component{
//     constructor(){
//         super();
//         //=>初始化组件的状态
//         this.state = {
//             time:new Date().toLocaleString()
//         };
//     }
//     componentDidMount(){
//         // 生命周期函数   第一次渲染完成后触发
//         setInterval(() => {
//             //react中虽然下面方式可以修改状态，但是并不会通知react重新渲染页面
//             // this.state.time = new Date().toLocaleString()
//         //setState 修改组件状态
//         //1.修改部分状态，只把我们传递的属性进行修改，没有传递的依然保持原有的状态    
//             this.setState({//setState是异步操作
//                 time: new Date().toLocaleString()
//             },()=>{
//                 //第二个参数是回调函数，当通知react吧需要渲染的jsx元素渲染完成后，执行的回调操作
//                 //并没有什么实质性的作用
//             })
//             console.log( this.state.time)
//         }, 1000);
//     }
//     render(){
//         return <section>
//             <h3>当前北京时间</h3>
//             <div style={{color:'red',fontWeight:'bold'}}>
//                 {/* 获取组件的状态信息 */}
//                 {this.state.time}
//             </div>
//         </section>
//     }
// }
// ReactDom.render(<div>
//     <Clock ></Clock>
// </div>,root)
//====================================================================================
// 给传递的props设置默认值 以及规则  规则需要安装prop-types插件
// class Dialog extends React.Component{
//     //this.props是只读的，我们无法在方法中修改它的值，但是可以给其设置默认值或者设置一些规则
//     // 例如：设置是否是必须传递的传递值的类型 
//     static defaultProps={
//         lx:'系统提示噢 默认值呢'
//     }
//     // 设置的规则不会影响页面的渲染，但是会在控制台抛出警报错我。
//     static propTypes = {
//         // con:propTypes.string//=>传递的内容需要是字符串
//         con:propTypes.string.isRequired//=>不仅传递的内容是字符串，并且还必须传递。
//     }
//     constructor(){ 
//         super();
//         this.state = {}
//     }
//     render(){
//         //组件中的属性是调取组件的时候(创建类实例的时候)，传递给组件的信息
//         //组件的属性是只读的，不能获取修改
//         console.log(this.props,'111')
//         let {lx ,con} = this.props
//         return <section>
//             <h3>{lx}</h3>
//             <div>{con}</div>
//         </section>
//     }
// }
// ReactDom.render(<div>
//     <Dialog lx='系统提1示' con="aaaaaa">
//         <span>1111</span>
//     </Dialog>

// </div>,root)

// ===========================================================================================
/*
    基于component类来创建组件
        基于creat-element吧jsx转换为一个对象，当render渲染这个对象的时候，遇到type是一个函数或者类
        不是直接创建元素，而是先把方法执行
        -》如果是函数声明的组件，把它当做普通的方法执行（方法中的this是undefined，吧函数返回的jsx袁旭
        进行渲染
        ->如果是类声明组件，会把当前类new它执行，创建类的一个实例（当前本次调取的组件就是它的实例）
        执行constructor之后，会执行this.render(),把render中返回的jsx拿过来渲染，
        所以’类‘声明式组件，必须有一个render方法，方法中需要返回一个jsx元素。
    不管哪一种方式，最后都会把解析出来的props属性对象作为实参传递给对应的函数或者类
*/ 
// class Dialog extends React.Component{
//     constructor(){ 
//         super();
//         this.state = {}
//     }
//     render(){
//         console.log(this.props,'111')
//         return<section>
//             <h3>提示</h3>
//             <div></div>
//         </section>
//     }
   
// }
// ReactDom.render(<div>
//     <Dialog lx={2} con="aaaaaa">
//         <span>1111</span>
//     </Dialog>

// </div>,root)
//================================================================================================
// // 引用基于函数创建的的组件 调用封装的dailog
// ReactDom.render(<div>
//     <WholeDialog type={2} content={'你好骚啊'}></WholeDialog>
//     <WholeDialog type={1} content={'你怎么这么ooo啊'}></WholeDialog>
//     <WholeDialog type={1} content={'哈哈哈'} children={'真的能传children吗'}></WholeDialog>
//     <WholeDialog type={'字符串可以吗'} content={<div>
//         <input type='text' className='from-control' placeholder='输入用户'></input>
//         <br/>
//         <br/>
//         <input type='password' className='from-control' placeholder='输入密码'></input>
//     </div>}>
//         <button className='btn btn-success'>登录</button>
//         <button className='btn btn-danger'>取消</button>
//     </WholeDialog>
// </div>,root)
//===================================================================================================
// ReactDom.render(<div> 
//     {/* jsx中调取组件，只需要把组件当做一个标签调取使用即可 */}
//     <Dialog con='哈哈哈' style={{color:'red'}}>
      
//       <span>111</span>
//       <span>222</span>
//     </Dialog>
//     {/* 属性值不是字符串，我们需要使用大括号包起来 */}
//     <Dialog con='呵呵呵' lx={1}/>
// </div>,root)
// /*
//   react 组件
//     按照 组件/模块管理 的方式来构建程序的，也就是把一个程序划分一个个的组件来单独处理。
//   优势：
//      1.有助于对人协作开发
//      2.我们开发的组件可以被复用
//   react中创建组件有两种方式
//      函数声明式组件
//      基于集成component类来创建组件 
//   src -> component :这个文件夹中存放的就是开发组件
// */ 
// /*
//   知识点：create-element在处理的时候，遇到一个组件，返回的对象中，type就不再是字符串标签名
//          而是一个函数（类）,但是属性还是存在props中
//          render渲染的时候，我们需要做处理，首先判断type的类型，如果是字符串，就创建一个元素标签
//          如果是函数或者类，就把函数执行，把props中的每一项传递给函数
// */ 
