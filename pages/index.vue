<template>
  <section class="container">
    <div>
      <item v-for="(article,index) in articles" :key="index" :article="article"></item>
    </div>
  </section>
</template>

<script>
import Item from '~/components/home/Item'
export default {
  components: {
    Item
  },
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
.container {
  @apply min-h-screen flex justify-center items-center mx-auto;
}
</style>
