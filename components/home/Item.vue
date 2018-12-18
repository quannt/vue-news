<template>
  <div class="article-container">
    <div class="article-image">
      <a :href="article.url">
        <img :src="article.urlToImage" alt class="article-image__image">
      </a>
    </div>
    <div class="article-body">
      <a :href="article.url">
        <div class="article-body__header">{{ article.title}}</div>
        <div class="article-body__footer">{{ article.source.name }} - {{ timeAgo }}</div>
      </a>
    </div>
  </div>
</template>

<script>
import { format } from 'timeago.js'

export default {
  name: 'Item',
  props: {
    article: {
      type: Object,
      // Object or array defaults must be returned from
      // a factory function
      default: function() {
        return {
          source: {
            id: null,
            name: null
          },
          author: null,
          title: null,
          description: null,
          url: null,
          urlToImage: null,
          publishedAt: null,
          content: null
        }
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    timeAgo() {
      // return format(Date.now() - 11 * 1000 * 60 * 60)
      return format(this.article.publishedAt)
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
}
.article-container {
  display: flex;
  padding: 18px;
}

.article-image {
  width: 120px;
  height: 90px;
  flex-shrink: 0;
}

.article-image__image {
  object-fit: cover;
}

.article-body {
  flex: 1 1 auto;
  padding-left: 18px;
}

.article-body__header {
  font-size: 16px;
  color: #171717;
}

.article-body__footer {
  display: flex;
  font-size: 12px;
  padding-top: 18px;
  color: #707070;
}
</style>
