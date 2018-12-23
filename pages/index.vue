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
      <div v-show="isLoadingArticles" class="content-loader__container">
        <content-loader :height="160" :width="400" :speed="2" :unique-key="uniqueKey">
          <rect x="168" y="20" rx="5" ry="5" width="220" height="10"/>
          <rect x="169" y="47" rx="5" ry="5" width="220" height="10"/>
          <rect x="169" y="76" rx="5" ry="5" width="220" height="10"/>
          <rect x="170" y="103" rx="5" ry="5" width="220" height="10"/>
          <rect x="3" y="12.2" rx="0" ry="0" width="160" height="137"/>
          <rect x="206" y="108.2" rx="0" ry="0" width="0" height="0"/>
          <rect x="294" y="130.2" rx="0" ry="0" width="0" height="0"/>
          <rect x="171" y="127" rx="5" ry="5" width="220" height="10"/>
        </content-loader>
      </div>
    </div>
  </section>
</template>

<script>
import Item from '~/components/home/Item'
import Headline from '~/components/home/Headline'
import { ContentLoader } from 'vue-content-loader'

import _get from 'lodash/get'
export default {
  components: {
    Item,
    Headline,
    ContentLoader
  },
  data() {
    return {
      articles: [],
      headline: {},
      pageSize: 20,
      page: 1,
      hasMoreArticles: true,
      uniqueKey: '',
      isLoadingArticles: false
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

      // this unique key is for content loader to be able to work with SSR
      // https://glitch.com/edit/#!/vue-content-loader?path=pages/index.vue:16:55
      const uniqueKey = Math.random()
        .toString(36)
        .substring(2)
      return { articles, headline, pageSize, page, uniqueKey }
    } catch {
      error({ statusCode: 404, message: 'Content not found' })
    }
  },
  methods: {
    async handleLoadMore() {
      try {
        this.isLoadingArticles = true
        this.page = this.page + 1
        const response = await this.fetchArticles(this.pageSize, this.page)
        const newArticles = _get(response, 'data.articles', [])
        if (newArticles.length === 0) {
          this.hasMoreArticles = false
          this.isLoadingArticles = false
          return
        }
        this.articles = [...this.articles, ...newArticles]
      } catch (error) {
        // TODO: log error to server here
        console.log(error)
        this.page = this.page - 1
      }
      this.isLoadingArticles = false
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

.content-loader__container {
  padding: 0 18px;
}
</style>
