<template>
  <div>
    详情页
  </div>
</template>
<script>
import axios from '../../../../plugins/axios'
export default {
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    console.log(params,"333")
    return axios.get(`/${params.type}/${params.id}`).then(res=>{
      console.log(res)
      return {}
    })
  },
}
</script>