<template>
   <div>
     我是老师
    <ul>
      <li v-for="item in list" :key="item.id">
         <nuxt-link :to="'/teacher/'+item.id">{{item.name}}</nuxt-link> 
      </li>
    </ul>
  <nuxt-child :foobar="123" keep-alive/>
  </div>
</template>
<script>
export default {
  // layout:'studentTeacher',
  layout(context) {
    console.log(context,"江苏省")
    return 'studentTeacher'
  },
  data(){
    return {
      list :[{name:'李军', id:1},{name:'王陆军',id:2},{name:'张三',id:3}]
    }
  },
  asyncData(context,callback) {
   console.log(context,'搜索')
    
  //  比组件以及服务端或路由更新之前调用
 },
}
</script>