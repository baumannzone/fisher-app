// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function test(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('ul.el-menu')
      .assert.containsText('h1', 'Salidas')
      .assert.elementCount('img', 0)
      .assert.elementCount('table', 6)
      .url('http://localhost:8080/#/crear')
      .assert.containsText('h1', 'Crear')
      .assert.containsText('.latlng', '{}')
      .end();
  },
};
