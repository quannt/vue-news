<template>
  <div>
    <header class="header">
      <a href="/" class="header-img__container">
        <img src="~/assets/logo.png">
      </a>
    </header>
    <nuxt/>
    <footer class="footer">
      <div class="text">
        <a href="https://newsapi.org">📝 Powered by NewsAPI.org</a>
      </div>
      <div class="text">
        💻 by
        <a href="https://github.com/quannt">@quannt</a>
      </div>
    </footer>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.header {
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #f2f4f6;
}

.header-img__container img {
  width: 80px;
  height: 80px;
}

.footer {
  display: flex;
  flex-direction: column;
  padding: 10px 18px;
  background-color: #f2f4f6;
  color: #505f63;
}

.footer .text {
  padding: 5px 0;
}

.footer .text a {
  text-decoration: none;
  color: #505f63;
}
</style>
