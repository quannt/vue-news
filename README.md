[![Build Status](https://travis-ci.org/quannt/vue-news.svg?branch=develop)](https://travis-ci.org/quannt/vue-news)

# News Hatch

![news hatch screenshot](https://i.imgur.com/ilwS42k.png 'Screenshot')

## Motivation

News Hatch is a clone of popular news site built with Nuxtjs.

## Features

- [x] Server Side Rendering & Caching
- [x] Code Splitting
- [x] Single-file Vue Components
- [x] Critical Path CSS
- [x] Hot reloading dev environment integrated with [ESLint] and [Prettier]
- [ ] Testing using [vue-test-utils] and [Jest]
- [ ] PWA support.

## Tech

- [Nuxtjs]
- [Vuejs]
- [Vuex]
- [Travis CI]
- [Heroku]

The site is deployed automatically by [a travis job] whenever the branch `develop` is updated.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```

## Inspirations

Inspired by [nuxt/hackernews], [techinasia], [oxii] and other news sites.

[nuxtjs]: https://nuxtjs.org
[vuejs]: https://vuejs.org/
[vuex]: https://vuex.vuejs.org/
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/
[vue-test-utils]: https://vue-test-utils.vuejs.org/
[jest]: https://jestjs.io/
[nuxt/hackernews]: https://github.com/nuxt/hackernews
[techinasia]: https://www.techinasia.com/
[oxii]: https://oxii.vn/
[travis ci]: https://travis-ci.org
[heroku]: https://heroku.com/
[a travis job]: https://travis-ci.org/quannt/vue-news
