<template>
  <div>我是学生
    <ul>
      <li v-for="item in list" :key="item.id">
         <nuxt-link :to="'/student/'+item.id">{{item.name}}</nuxt-link> 
      </li>
    </ul>
    <el-button>测试</el-button>
  </div>
</template>
<script>
import axios from '../../plugins/axios'
export default {
  layout:'studentTeacher',
  data(){
    return {
      list :[{name:'李军', id:1},{name:'王陆军',id:2},{name:'张三',id:3}]
    }
  },
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
     console.log(params,"数据",axios)
     axios.get('/data').then(res=>{
       console.log(res,'数据')
     })
  },
//    asyncData(context,callback) {
//    console.log(context,'搜索')
//   //  axios.get('/data').then(res=>{
//   //    console.log(res,"数据")
//   //  })
    
//   //  比组件以及服务端或路由更新之前调用
//  },
}
</script>