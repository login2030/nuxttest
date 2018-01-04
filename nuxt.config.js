module.exports = {
  env: {
    baseURL: 'http://nuxttest.local/api' // API
  },
  head: { // Headers of the page
    title: 'nuxttest.local',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: {color: '#3B8070'}, //Customize the progress bar color
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    { src: '~assets/style/main.styl', lang: 'stylus' },
  ],
  build: { //Build configuration
    vendor: ['axios'],
    extend(config, ctx) { //Run ESLint on save
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
