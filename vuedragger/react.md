# react 
用于构建用户界面的 JavaScript 库
reactjs react-native react-vr
这里先介绍react
由于公司内部技术栈基本为vue，本文主要是向公司内部实习生简单科普react自己编写的简单资料
## reactjs
官网https://react.docschina.org/ 
## reactjs与vue
技术无好坏，无比较，看自己选择，都是很成熟的前端框架，技术选型根据自己公司来选择
## node环境 create-react-app
至于用npm yarn看自己了，我选择的还是npm</br>
当然可以直接cdn html引入的方式玩，我这里直接选择官方脚手架create-react-app直接走起
## reactjs基本技术栈
reactjs react-router redux(mobx) axios webpack
### reactjs
#### ReactDOM
ReactDOM.render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。
```
ReactDOM.render(
<p>我是呗插入的模板组件</p>, document.getElementById('app')
)
```
#### jsx语法
有点像js和xml结合混写，简单的说react支持在js里面直接写html，有自己的语法规范去解析，比如遇到<这个标签它就用html规则去解析了，如果遇到{}就用js去解析
```
var test='解析我吧，我是个变量'
ReactDOM.render(
<p>{test}</p>, document.getElementById('app')
)
```
#### Component Fragment
```
//在create-react-app的.js文件
 import React,{Component,Fragment} from 'react'
 这里用了解构其实等价于
 import React from React;
 const Component =React.Component;
const Fragment =React.Fragment;
 引入了react和全局定义了Component，在组件里面可以看到大量的extends Component,这就是react的核心=>Component（组件）
class App extends Component{
 render(){
  return(
  <Fragment>
    <div className='my-div'>
        <span>123</span>
    </div>
    </Fragment>
  )
  //其实等价于
  //var spanN=React.createElement('span',null,'123')
  //var divN=React.createElement('div',{className:'my-div'},spanN)
 }
}
```
值得注意的是在react里面的一些小规范
```
1.自定义组件<App> 大写开头
2.class=>className
3.组件外面包裹一层，你可以用Fragment也可以用常用的标签，这个就跟vue template,angular的 ag-container一样
```
#### es6
react里面大量的es6语法，
```
解构
箭头函数
class extends
import  exports
constructor
super
const let
扩展运算符
reduce filter
等等

```
#### react的响应式设计与虚拟DOM
    其实这个目前三大响应式框架vue react 差不多,具体的官网解释的也挺清楚的，框架只是工具，最主要的是你的编程思想，数据驱动，不再是jq时代的节点操作
#### state setState
类似于vue中的data,不同的是react的单项数据流做的比较干净
```
class App extend Component{
    constructor(props){
                super(props)
                this.state={
                  valueInput:'123'
                }
            }
    //console.log(this) 
    render(){
        return(
            <Fragment>
                <input value={this.state.valueInput} onChange={this.handelInput.bind(this)}/>
            </Fragment>
        )
    }
    //这里就可以写方法了，vue methods
    handelInput(e){
        console.log(e.target.value)
        //this.state.valueInput=e.target.value 你想太多了
        this.setState({
        valueInput:e.target.value
        })
    }
    
}
```
1.单项数据流
2.改变state 要用setState方法
3.绑定事件，onClick小驼峰
4.注意this指向绑定
5.数组对象setState前，官方推荐先浅拷贝(这个坑很容易踩到，因为不会报错，程序执行正常，但会出现性能问题)
#### vue v-for PK react jsx循环
react一种典型的js加xml的写法就体现出来了，简单粗暴
```
class App extend Component(
    constructor(props){
      super(props)
      this.state={
        list:[11,22,33]
      }
    }
    render(){
        return(
             <Fragment> 
                {this.state.list.map((item,index)=>{
                    return(
                        <li key={index}>{item}</li>
                    )
                })}
             </Fragment>
        )
    }
)
```
#### vue v-if PK react jsx判断
同理vue中的v-if，react写起来就更加随心所欲了，你可以把数据处理完传给它渲染，也可以在render函数里面直接jsx语法一套秒
```
class App extend Component(
    constructor(props){
      super(props)
      this.state={
        list:[11,22,33]
      }
    }
    render(){
        return(
             <Fragment> 
                {this.state.list.map((item,index)=>{
                    if(index>1){
                        return(
                            <li key={index}>{item}</li>
                        )
                    }else{
                        return(
                            <li key={index}>{item}</li>
                        )
                    }
                    
                })}
             </Fragment>
        )
    }
)
```

#### vue中的v-html PK dangerouslySetInnerHtml
为什么前面是dangerous？？？危险？？我推测是react想说哥们你想一下有没有必要这样操作，类似于操作节点耶
```
class App extend Component(
    constructor(props){
      super(props)
      this.state={
        hone:'<h1>标题字体</h1>'
      }
    }
    render(){
        return(
             <Fragment> 
                <div  dangerouslySetInnerHtml={{_html:this.state.hone}}>               
                </div>
             </Fragment>
        )
    }
)
```
为毛这里{{}}不要有疑问，因为{html:xxx}里面是一个对象呀
#### htmlFor PK <label for='xxx'></label>
```
<lable for='nextInput'>点我就让id='nextInput'的input获取了焦点</label>
<input id='nextInput'/>

react中
<lable htmlFor='nextInput'>点我就让id='nextInput'的input获取了焦点</label>
<input id='nextInput'/>
```
为什么又这样？你要理解人家，for也是关键字啊，莫比比
#### 标签的class
这里要说的是css里面的class,在react里面是className,为啥这么做，因为class这是个关键字啊=>class extends
#### simple react snippets
我碰巧看见别人快捷生成了一些例如下面这些基本常用的代码，几个单词就生成下面的代码，第一次看见，心中只有两个字无情，好在我的subline也能安装
```
imrc 回车=>
import React,{Component} from 'react'
cc 回车=>
class App extends Component{
    constructor(props){
      super(props)
      this.state={
      }
      }
     render(){
      return(
      )
 
 }
}
}
```
#### react Component组件
其实vue跟react Component组件思想都一样，万物皆组件，一个网页就是很多组件组合起来的，各种组件的组合成各种各样的组件，像斗积木一样开心。
```
子组件
class Son extends Component{
    constructor(props){
      super(props)
      this.state={
      }
      }
     render(){
      return(
       <Fragment> 
                <div>      
                我是son的文字哦
                </div>
         </Fragment>
      )
 
 }
}
}
exports default Son
父组件
import Son from './Son'
class App extends Component{
    constructor(props){
      super(props)
      this.state={
      }
      }
     render(){
      return(
           <Fragment> 
                <Son/>
            </Fragment>
       
      )
 }
}
}
```
注意的是：
react的自定义组件有自己的语法
#### vue PK react组件传值
//props传值
```
父组件
import Son from './Son'
class App extends Component{
    constructor(props){
      super(props)
      this.state={
        setSon:'12'
      }
      }
     render(){
          return(
                <Fragment> 
                    <Son setSon={this.state.setSon}/>
                </Fragment>

          )
 }
}

子组件
class Son extends Component{
    constructor(props){
      super(props)
      this.state={
      }
      }
     render(){
          return(
               <Fragment> 
                        <div>      
                         {this.props.setSon}
                        </div>
                </Fragment>
          )
 
     }
    }

exports default Son
```
// 子组件通知父组件改值
```
父组件
import Son from './Son'
class App extends Component{
    constructor(props){
      super(props)
      this.state={
        setSon:'12'
      }
      }
     render(){
          return(
                <Fragment> 
                    <Son setSon={this.state.setSon} changeData={this.changeData.bind(this)}/>
                </Fragment>

          )
     }
     changeData(){
         this.setState({
          setSon:'改了'
         })
     }
}
子组件
class Son extends Component{
    constructor(props){
      super(props)
      this.state={
      }
      }
     render(){
          return(
               <Fragment> 
                        <div onClick={this.setParents.bind(this)}>      
                         {this.props.setSon}
                        </div>
                </Fragment>
          )
 
     }
     setParents(){
        console.log(this.props)
        this.props.changeData()
     }
    }
exports default Son
```
1.父传子=>通过props自定义属性去传递值或者方法给子组件
2.子通知父=>父组件将自己的方法传递给子组件,子组件通知父组件调用父组件自己的方法去改父组件的值，因为父组件改了自己的值从而让子组件数据变化
3.当然跟vue一样父子通讯不只这一种方式，但这是最基础的

#### 单项数据流
就像我前面说的，虽然vue也推荐单项数据流，但是react单项数据流做的比vue干净的多，例如vue中为某些UI控件提供了双向数据绑定的方式，而且在子组件可以操作父组件传过来的值，虽然此时父组件的值没有改变等等。
通过父子组件数据交互就能清楚的理解单项数据流了，数据永远是父组件那边来的，子组件只能通知父组件改自己的值，因为父组件改了自己的值从而让子组件数据变化，数据流向从来都是父到子，这种设计的好处也是非常明显的，流向清晰，利于追踪数据等
现在前端三大框架编码主流都是推荐单项数据流
#### 函数式编程
react里面简直就是函数式编程的生动体现，可以说每一个组件就是一个函数生成等等。
有些人不理解函数式编程，lodash,underscore都是典型的函数式编程









