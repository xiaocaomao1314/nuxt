<template>
  <div class="movie-header">
    <ul>
      <li>
        <nuxt-link to="/movie/a">美国电影</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/movie/b">日本动漫</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/movie/c">中国京剧</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
  ul {
    display: flex;
   
  }
  li {
     margin: 0 10px;
  }
</style>