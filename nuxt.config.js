const pkg = require('./package')

let newsAPIToken = ''

if (process.env.NUXT_PHASE === 'development') {
  const API_KEY = require('./env.local.js').API_KEY
  newsAPIToken = API_KEY
} else {
  newsAPIToken = `${process.env.NEWS_API_KEY}`
}

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Vue News - A news reader powered by Nuxt.js and NewsAPI.org',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/css/tailwind.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */

  // See https://github.com/nuxt-community/axios-module#options
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'https://newsapi.org/v2/',
      pathRewrite: { '^/api/': '' },
      headers: { authorization: `Bearer ${newsAPIToken}` }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
