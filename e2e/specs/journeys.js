module.exports = {
  'sanity test': function(browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('.article-container', 3000)
      .end()
  }
}
