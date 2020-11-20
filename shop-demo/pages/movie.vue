<template>
  <div>
    欢迎来到电影院
    <nuxt-link to="/movie/d">动漫</nuxt-link>
    sss 
     <nuxt-child></nuxt-child>
  </div>
    
</template>
<script>
export default {
  layout:'movieLayout'
}
</script>