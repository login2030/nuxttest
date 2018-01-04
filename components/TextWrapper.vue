<template>
<div class="jumbotron">
  <h1>{{page.title}}</h1>
  <div>
      {{page.content}}
  </div>
</div>
</template>
<script>
export default {
  props: {
    dataPage: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      page: this.dataPage
    };
  }
};
</script>
