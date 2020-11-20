1 nuxt服务端渲染

步骤
npm i create-nuxt-app -g  安装脚手架工具 create-nuxt-app
create-nuxt-app <项目名>   创建一个项目
默认 npm run dev 启动

文件目录
|-- .nuxt                            // Nuxt自动生成，临时的用于编辑的文件，build
|-- assets                           // 用于组织未编译的静态资源入LESS、SASS 或 JavaScript
|-- components                       // 用于自己编写的Vue组件，比如滚动组件，日历组件，分页组件
|-- layouts                          // 布局目录，用于组织应用的布局组件，不可更改。
|-- middleware                       // 用于存放中间件
|-- pages                          // 用于存放写的页面，我们主要的工作区域  自动配置路由   不可更改。
|-- plugins                          // 用于存放JavaScript插件的地方
|-- static                           // 用于存放静态资源文件，比如图片    不可更改。
|-- store                            // 用于组织应用的Vuex 状态管理。  不可更改。
|-- .editorconfig                    // 开发工具格式配置
|-- .eslintrc.js                     // ESLint的配置文件，用于检查代码格式
|-- .gitignore                       // 配置git不上传的文件
|-- nuxt.config.json                 // 用于组织Nuxt.js应用的个性化配置，已覆盖默认配置  不可更改。
|-- package-lock.json                // npm自动生成，用于帮助package的统一性设置的，yarn也有相同的操作
|-- package-lock.json                // npm自动生成，用于帮助package的统一性设置的，yarn也有相同的操作
|-- package.json                     // npm包管理配置文件


路由配置
pages新建文件 会自动构成路由

路由跳转
1 nuxt-link 和router-link 组件作用一样  
<nuxt-link to="/student"></nuxt-link>
禁止用a标签 a标签跳转会刷新
2 this.$router.push({name:‘studengt-list’})
    this.$router.push({path:'/student'})
从pages开始  pages相当于路由的/  pages目录下的文件夹目录相当于二级路由的/
动态路由
动态路由就是二级路由为不同的id 
<nuxt-link :to="'/student/'+id"></nuxt-link>
在当前的文件夹新建一个文件夹 即文件夹名为_id   _id相同于二级路由 或动态路由的一级路由
this.$route.params.id获取动态路由的id
测试是把二级路由当作id用
_type也可以文件名

路由动态参数校验 validate必须返回布尔值 和data数据存储同级
validate(obj){
  return /^\d$/.test(obj.params.id)
}

嵌套路由
<nuxt-child  keep-alive shult="蔬菜"/>组件用来存放嵌套路由的子组件
步骤 
1 新建一个vue组件作为父组件
2 新建同名父组件的文件夹 存放子组件
3 在父组件中 添加用于展示子组件的可视图

嵌套路由 父子之间通信
父组件
<nuxt-child  keep-alive apple="苹果"/>
子组件
props:['apple']

布局组件
layouts 
步骤
1 layouts目录新建组件为 a 
2 引入功能组件
3 注册组件 并使用 组件下面使用<nuxt/> 坑
4 页面使用layout:'a'

错误路由组件 
在layouts目录新建error.vue组件  没有设置该路由的组件就会显示这个组件

全局引入样式
在nuxt.config.js文件里进行配置
css:[
  './assets/index.css'
  或'~/assets/index.css'  服务器下 根路径
]


element-ui使用
步骤
1 下载 npm i element-ui -S
2 在plugins文件夹下面 创建ElementUI.js文件
import Vue from 'vue'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
3 在nuxy.config.js文件中进行挂载
css: [
        'element-ui/lib/theme-chalk/index.css'     //引入css
    ],
 plugins:[
   {src:'~/plugins/ElementUI',ssr:true}
 ]
 build:{
    vendor: ['element-ui']  //防止多个页面引入element-ui出现多次打包的情况 避免多次打包
 }
//ssr为true表示服务端起作用 而false是客户端起作用

生命周期 指的是客户端
created
beforeCreate 两个才能使用
在nuxt中发送异步请求不能在created生命周期函数中触发 因为它会在前端执行  禁止在前端执行

处理异步调用 是在服务端调用 获取数据 以及调用在服务端得到
asyncData 在组件每次加载之前调用 它可以在服务器或路由更新之前调用 所以不能用this
asyncData和methods同级 
 asyncData(context){
context是上下文 
获取参数  context.route.params.xxx   就是动态路由获取的参数 最好在动态路由子组件注册asyncData(){}
}

asyncData() {
  必须return 返回出去一个对象 相当于  data(){return {}}
    return axios.get('https://api.myjson.com/bins/mr6ma')
                .then((res) => {
                   return {info: res.data}
                })
  }
  async asyncData() {
    let { data } = await axios.get('https://api.myjson.com/bins/mr6ma')
    return { info: data }
  }


nuxt-config.js可以配置全局页面的头部 meta  title 等 
在单个页面也可以进行配置 head和data同级进行配置
head(){
  return {
    title:'',
    meta:[]
  }
}