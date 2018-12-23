<template>
  <section class="container">
    <div>
      <headline :article="headline"></headline>
      <item v-for="(article,index) in articles" :key="index" :article="article"></item>
      <div v-show="hasMoreArticles" class="load-more" @click="handleLoadMore">
        <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="fill-current w-4 h-4 mr-2"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
          <span>See more articles</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Item from '~/components/home/Item'
import Headline from '~/components/home/Headline'
import _get from 'lodash/get'
export default {
  components: {
    Item,
    Headline
  },
  data() {
    return {
      articles: [],
      headline: {},
      pageSize: 20,
      page: 1,
      hasMoreArticles: true
    }
  },
  async asyncData({ params, $axios, error }) {
    try {
      const pageSize = 20
      const page = 1
      const response = await $axios.get(
        `/api/top-headlines?country=sg&pageSize=${pageSize}&page=${page}`
      )
      let articles = response.data.articles
      const headline = articles.shift()

      return { articles, headline, pageSize, page }
    } catch {
      error({ statusCode: 404, message: 'Content not found' })
    }
  },
  methods: {
    async handleLoadMore() {
      try {
        this.page = this.page + 1
        const response = await this.fetchArticles(this.pageSize, this.page)
        const newArticles = _get(response, 'data.articles', [])
        if (newArticles.length === 0) {
          this.hasMoreArticles = false
          return
        }
        this.articles = [...this.articles, ...newArticles]
      } catch (error) {
        // TODO: log error to server here
        console.log(error)
        this.page = this.page - 1
      }
    },
    fetchArticles(pageSize = 20, page = 1) {
      return this.$axios.get(
        `/api/top-headlines?country=sg&pageSize=${pageSize}&page=${page}`
      )
    }
  }
}
</script>

<style scoped>
.container {
  @apply min-h-screen flex justify-center items-center mx-auto;
}

.load-more {
  display: flex;
  justify-content: center;
  padding: 18px;
}
</style>
