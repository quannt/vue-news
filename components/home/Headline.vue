<template>
  <div class="headline-container">
    <no-ssr>
      <div class="headline-image">
        <a :href="article.url">
          <common-image>
            <img slot="image" :src="article.urlToImage" alt class="article-image__image">
            <img slot="preloader" src="~/assets/default-image.png" alt class="article-image__image">
            <img slot="error" src="~/assets/default-image.png" alt class="article-image__image">
          </common-image>
        </a>
      </div>
    </no-ssr>

    <div class="article-body">
      <a :href="article.url">
        <h2 class="article-body__header">{{ article.title}}</h2>
        <div class="article-body__footer">{{ article.source.name }} - {{ timeAgo }}</div>
      </a>
    </div>
  </div>
</template>

<script>
import { format } from 'timeago.js'
import CommonImage from '~/components/common/CommonImage'

export default {
  name: 'Headline',
  components: {
    CommonImage
  },
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

<style scoped>
a {
  text-decoration: none;
}
.headline-container {
  display: flex;
  flex-direction: column;
}

.article-image__image {
  object-fit: cover;
}

.article-body {
  padding: 18px;
}

.article-body__header {
  font-size: 21px;
  line-height: 1.2;
  color: #171717;
}

.article-body__footer {
  display: flex;
  font-size: 12px;
  padding-top: 18px;
  color: #707070;
}
</style>
