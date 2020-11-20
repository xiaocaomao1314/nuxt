<template>
  <div>
    看清楚这是哪个{{name}}
    <nuxt-link :to="`/movie/${type}/${id}`">详情</nuxt-link>
  </div>
</template>
<script>
import axios from '../../../plugins/axios'
export default {
layout:'movieLayout',
  created(){
console.log(2342354)
  },
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    console.log(params,axios)
  return  axios.get(`/${params.type}`).then(res=>{
      console.log(res,"22")
      return {name:res.data.name,type:params.type,id:res.data.id}
    })
  },
  head(){
    return {
      title:"电影节"
    }
  }

}
</script>