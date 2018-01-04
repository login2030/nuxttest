<template>
<section class="container">
  <h2 class="header">Блог нашей компании</h2>
  <div class="list-group">
    <nuxt-link v-for="article in blog" :key="article.id" :to="`/blog/${article.id}`" class="list-group-item">{{article.title}}</nuxt-link>
  </div>
</section>
</template>

<script>
import axios from 'axios';
export default {
  async asyncData() {
    return axios.get(process.env.baseURL + '/getBlogPage.php').then(res => {
      return { blog: res.data };
    });
  }
};
</script>

<style lang="stylus" scoped>
.header
  text-align center
  margin-bottom 20px
</style>
