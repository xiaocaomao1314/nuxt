<template>
  <div>
    {{foobar}}老师你好
  </div>
</template>
<script>
export default {
 props:['foobar'],
//  asyncData({isDev, route, store, env, params, query, req, res, redirect, error},callback) {
//    console.log(params,'搜索',this)
//   //  比组件以及服务端或路由更新之前调用
//   setTimeout(() => {
//      callback(null,{name:10})
//   }, 100);
//  },
}
</script>