<template>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <p class="navbar-brand">Это самый простой сайт, который я смог придумать</p>
      <nuxt-link  class="btn btn-default navbar-btn" to="/" role="button">Главная</nuxt-link>
      <nuxt-link  class="btn btn-default navbar-btn" to="/mission" role="button">Наша миссия</nuxt-link>
      <nuxt-link  class="btn btn-default navbar-btn" to="/blog" role="button">Блог</nuxt-link>
      <nuxt-link  class="btn btn-info navbar-btn" to="/contacts" role="button">Контакты</nuxt-link>
    </div>
  </div>
</nav>
</template>
<style lang="stylus" scoped>
.navbar-btn
  margin-right 15px
  &.nuxt-link-exact-active
    color #fff
    background-color #449d44
    border-color #398439
</style>

