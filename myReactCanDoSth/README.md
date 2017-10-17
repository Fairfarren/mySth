## 写在前面

学习react的时候，我读过的博客，虽然读的不是很细，但是推荐给大家看看。
  - [React 入门实例教程](http://www.ruanyifeng.com/blog/2015/03/react.html)
  - [初探 React Router 4.0](http://www.jianshu.com/p/e3adc9b5f75c/)
  - [React中文-新手导航](http://react-china.org/t/topic/11606)
  - [React-router](https://github.com/ReactTraining/react-router)
  - [React-router-dom](https://reacttraining.com/react-router/web/guides/philosophy)

强烈提醒，去百度react-router的时候要注意版本，因为已经更新到4了，还有很多博客是2和3的

## 安装

### create-react-app
React有很多脚手架，我还是说一下官方推荐的

> $ npm install -g create-react-app

这里会生成react的一个项目，后面跟的是名字，这里需要注意，名字不能有大写字母，我平时喜欢用驼峰写法在这里觉得不习惯~~但是我还是会选择在安装完了后手动改文件夹名字~~
> $ create-react-app my-app

还有一点，这里react生成项目的时候，会自动去安装依赖，而且用的你`npm`，而不是`cnpm`。这样会使项目安装的超级慢


### nrm
这里推荐一个`nrm`

[github项目地址](https://github.com/Pana/nrm)

这个可以让你的npm命令去走`taobao`或者`cnpm`的端口

安装
> $ cnpm install -g nrm

使用方法也很简单

查看可用的端口和目前端口
> $ nrm ls

使用端口
> $ nrm use taobao

改了接口后再去生成项目

![](https://i.loli.net/2017/10/13/59e02df0cdf10.jpeg)

生成过后的项目也很简单，和`vue-cli`生成的项目想必，感觉简洁了很多，最先还以为react那么简洁，后来才发现，只是因为脚手架把webpack的配置隐藏了起来

![](https://i.loli.net/2017/10/13/59e032a30c86e.jpeg)

在`package.json`里面可以看见一条

![](https://i.loli.net/2017/10/13/59e032fd689b0.jpeg)

启用这条命令，就可以把隐藏的东西释放出来
> $ npm run eject

![](https://i.loli.net/2017/10/13/59e04ace11c26.jpeg)

启动命令是
> $ npm start

关闭Dbug模式，和vue一样，在`webpack.config.dev.js`找到`devtool`属性，改为`false`

虽然react用的jsx的语法，但是现在是可以直接写在js里面，一样的可以用

## 基本用法

在react里面的概念是，万物皆组件

最基本的方法就是`ReactDOM.render()`，这个方法传递两个参数，第一个是组件，第二个是获取html页面的DOM元素。将组件添加到获取到的这个DOM中。

这个是官网给出的一个写法，因为第一次写的时候，老是忘记后面那个逗号，弄得很烦。
```javascript
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

## 直接写一个组件

添加的组件可以是一个方法返回的值，在`return`前还可以自己做一下操作；

jsx语法里面在遇到`{`时会解析`js`语法，在遇到`<`时会解析`html`语法。所以标签里面加变量用`{ }`包裹起来。

**组件首写一定要大写**
```javascript
const Hello = () => {
  let text = `world`;
  return (
    <h1>hello {text}</h1>
  )
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
)
```

## 用继承的方法去生成一个组件

在生成的项目`App.js`文件下的开头引用了`Component`方法，用`class`，`extends`方法去继承`Component`,而方法内的一个属性`render`内的，就是最后输出的标签
```javascript
const Hello = () => {
  let text = `world`;
  return (
    <h1>hello {text}</h1>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
      </div>
    );
  }
}
//将App暴露出去
export default App;
```

在入口文件`index.js`中可以看见`import`了`App.js`，然后将`<App />`输出在了页面

## 组件内获取标签属性

### props()
这里我改变了一下文件结构，将`Hello`组件单独提了出去，写在了`src/components/`下

我的理解是写在`App.js`内`render()`内的`<Hello />`是标签，`src/components/hello.js`则是组件，在`hello.js`内部如何获取到`<Hello title="world"/>`的属性
```javascript
export default class Hello extends Component {
    render = () => (
        <h1>hello，{this.props.title}</h1>
    )
}
```
**组件里面`render()`返回的标签，只能有一个顶级标签，意思就是外面只能有一个最大包裹标签**

这个方法应该是可以从父级往子级里面去传值，比如
```javascript
class App extends Component {
  state = {
    title: 'world'
  }
  render() {
    return (
      <div className="App">
        <p>{this.state.title}</p>
        <Hello title={this.state.title} />
      </div>
    );
  }
}
```
而且我还可以通过改变值，让他重新加载
```javascript
class App extends Component {
  state = {
    title: 'world'
  }
  qwe = () => {
    this.setState({
      title: this.state.title == 'world' ? 'hello' : 'world'
    })
  };
  render() {
    return (
      <div className="App">
        <p onClick={this.qwe}>click</p>
        <p>{this.state.title}</p>
        <Hello title={this.state.title} />
      </div>
    );
  }
}
```

`props`可以是`undefined`,`string`,`object`

其中有个特别的属性`this.props.children`，他是组件的所有子节点，可以用`React.Children()`去做一些操作

`App.js`中
```javascript
class App extends Component {
  state = {
    title: 'world'
  }
  qwe = () => {
    this.setState({
      title: this.state.title == 'world' ? 'hello' : 'world'
    })
  };
  render() {
    return (
      <div className="App">
        <p onClick={this.qwe}>click</p>
        <p>{this.state.title}</p>
        <Hello title={this.state.title}>
          <span>qwe</span>
          <span>zxc</span>
        </Hello>
      </div>
    );
  }
}
```

`hello.js`
```javascript
export default class Hello extends Component {
  render = () => (
    <div>
      <h1>hello，{this.props.title}</h1>
      <ol>
        {
          React.Children.map( this.props.children, (child) => (
            <li>{child}</li>
          ))
        }
      </ol>
    </div>
  )
}
```

### state()

上面代码中提到了`state`这个属性，其实可以理解为`vue`中的`data`，就是一个组件的初始化的值。在组推荐内部可以用`this.state`去获取到这些值

其中要重新设置这些值，只能通过方法`setState({title: 'hello'})`去实现，而不能像`vue`一样可以直接通过赋值的方法去改变

### 区分

区分一下`state`和`props`，下面给出阮一峰的博客截图

![](https://i.loli.net/2017/10/13/59e06ee73c493.jpeg)

### 循环输出

新建一个文件`world.js`在`components`下

声明一个变量，为数组，去循环这个数组，然后`return`一个`<p>`标签

其中循环出来的标签需要添加一个`key`，不然会出现一个警告，原理的话参考`vue`里面的`key`吧

```javascript
const arr = [1,2,3,4];
export default class World extends Component {
  render() {
    return (
      <div>
        {
          arr.map( (name, index)=> {
            return <p key={index}>{ name }</p>
          })
        }
      </div>
    )
  }
}
```

![](https://i.loli.net/2017/10/13/59e0795576d89.jpeg)

这个数组里面也可以放标签

```javascript
const arr = [
  <p key="1">hello</p>,
  <div key="2">world</div>
];
export default class World extends Component {
  render() {
    return (
      <div>
        { arr }
      </div>
    )
  }
}
```

### 获取dom

react中都是虚拟的dom，加载到页面中的时候才是实体的dom，虽然不提倡操作dom，但是有时候还是会需要去获取他

给标签添加`ref`属性
```javascript
export default class World extends Component {
  changeName = () => {
    const value = this.refs.name.value || `no name`;
    alert( value );
  }
  render() {
    return (
      <div>
        { arr }
        <div>
          <input ref="name" placeholder="your name?"/>
          <input onClick={this.changeName} type="button" value="say name"/>
        </div>
      </div>
    )
  }
}
```

### 输入框和数据绑定

vue里面是通过`v-model`来绑定，react里面是通过`onChange`方法去改变组件的状态，然后状态更新后也会同步到标签里面

```javascript
export default class World extends Component {
    state = {
      value: ''
    }
    changeName = () => {
      const value = this.refs.name.value || `no name`;
      alert( value);
    };
    haveName = () => {
      const text = this.state.value || 'no name';
      return text
    };
    inputOnChange = (event) => {
      this.setState({
        value: event.target.value
      })
    }
    render() {
      return (
        <div>
          { arr }
          <div>
            <input ref="name" value={this.state.value} onChange={this.inputOnChange}  placeholder="your name?"/>
            <input onClick={this.changeName} type="button" value="say name"/>
            <p>{this.haveName()}</p>
            <input type="button" onClick={ ()=>{ this.setState({value: ''}) }} value="clear name"/>
          </div>
        </div>
      )
    }
}
```

**这里需要注意，给`<input />`绑定了`value`属性，但是没有`onChange`方法的话，标签会变得无法输入**

### 选项卡

通过写一个方法，去将标签`return`回来，就行了

```javascript
class App extends Component {
  state = {
    title: 'world',
    page: true
  }
  qwe = () => {
    this.setState({
      title: this.state.title == 'world' ? 'hello' : 'world'
    })
  };
  changePage = () => {
    if(this.state.page){
      return (
        <Hello title={this.state.title}>
          <span>qwe</span>
          <span>zxc</span>
        </Hello>
      )
    }else{
      return <World />
    }
  }
  render() {
    return (
      <div className="App">
        <p onClick={this.qwe}>click</p>
        <p>{this.state.title}</p>
        <p>
          <button onClick={ ()=>{ this.setState({ page: true }) }}>show hello</button>
          <button onClick={ ()=>{ this.setState({ page: false }) }}>show world</button>
        </p>
        {
          this.changePage()
        }
      </div>
    );
  }
}
```

其实会发现，react真的如他所说的那样重视js的，专注于js。其实我感觉我爱上了这种写法

## 生命周期函数

和vue里面的周期函数差不多，就是DOM加载，加载前，加载后，加载中执行的一些方法

生命周期有3个状态：

* Mounting：已插入真实 DOM
* Updating：正在被重新渲染
* Unmounting：已移出真实 DOM

React 为每个状态都提供了两种处理函数，`will` 函数在进入状态之前调用，`did` 函数在进入状态之后调用，三种状态共计五种处理函数。

>componentWillMount()
>
>componentDidMount()
>
>componentWillUpdate(object nextProps, object nextState)
>
>componentDidUpdate(object prevProps, object prevState)
>
>componentWillUnmount()

还有两个特殊处理函数:

> componentWillReceiveProps( Obj nextProps)已加载组件收到新的参数时调用
>
> shouldComponentUpdate( Obj nextProps, ObjnextState)组件判断是否重新渲染时调用

其中`componentDidMount`可以当做加载创建后会自动执行的方法


接下来我会找时间更新react-router的学的笔记

未完待续。。。