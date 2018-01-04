<template>
<section class="container">
  <text-wrapper :data-page="missionPage" />
  <img class="center-block" src="/mission.jpg" alt="">
</section>
</template>

<script>
import axios from 'axios'; //getIndexPage.php
import TextWrapper from './../components/TextWrapper';
export default {
  components: { TextWrapper },
  async asyncData() {
    return axios.get(process.env.baseURL + '/getMissionPage.php').then(res => {
      return { missionPage: res.data[0] };
    });
  }
};
</script>
