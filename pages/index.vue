<template>
  <section class="container">
    <div>
      <h1 class="title">Vue New</h1>
      <h2 class="subtitle">A news portal built powered by Vuejs and Nuxtjs</h2>
    </div>
    <ul id="example-1">
      <li v-for="(article,index) in articles" :key="index">{{ article.title }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return { articles: [] }
  },
  async asyncData({ params, $axios, error }) {
    try {
      let response = await $axios.get(`/api/top-headlines?country=sg`)
      return { articles: response.data.articles }
    } catch {
      error({ statusCode: 404, message: 'Content not found' })
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
