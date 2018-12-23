<template>
  <section class="container">
    <div>
      <headline :article="headline"></headline>
      <item v-for="(article,index) in articles" :key="index" :article="article"></item>
    </div>
  </section>
</template>

<script>
import Item from '~/components/home/Item'
import Headline from '~/components/home/Headline'
export default {
  components: {
    Item,
    Headline
  },
  data() {
    return { articles: [], headline: {} }
  },
  async asyncData({ params, $axios, error }) {
    try {
      const response = await $axios.get(`/api/top-headlines?country=sg`)
      let articles = response.data.articles
      const headline = articles.shift()

      return { articles, headline }
    } catch {
      error({ statusCode: 404, message: 'Content not found' })
    }
  }
}
</script>

<style scoped>
.container {
  @apply min-h-screen flex justify-center items-center mx-auto;
}
</style>
