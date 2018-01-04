<template>
<section class="container">
  <div class="jumbotron">
    <h1>{{article.title}}</h1>
    <div>
      {{article.content}}
    </div>
    <br>
    <div class="btn btn-primary btn-lg">Автор {{article.author}}</div>
  </div>
</section>
</template>

<script>
import axios from 'axios';
export default {
  async asyncData({params}) {
    return axios.get(process.env.baseURL + '/getArticle.php?id=' + params.articleId).then(res => {
      return { article: res.data[0] };
    });
  }
};
</script>

