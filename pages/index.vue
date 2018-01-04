<template>
<section class="container">
  <text-wrapper :data-page="indexPage" />
  <p class="bg-primary">PHP так PHP</p>
  <img class="center-block" src="/php.png" alt="">
</section>
</template>

<script>
import axios from 'axios'; //getIndexPage.php
import TextWrapper from './../components/TextWrapper';
export default {
  components: { TextWrapper },
  async asyncData() {
    return axios.get(process.env.baseURL + '/getIndexPage.php').then(res => {
      return { indexPage: res.data[0] };
    });
  }
};
</script>
<style lang="stylus" scoped>
.bg-primary
  padding 20px 0
  text-align center
  font-size 20px
</style>

