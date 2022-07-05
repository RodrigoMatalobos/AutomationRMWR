const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://automationpractice.com/index.php",
    defaultCommandTimeout: 10000,
    experimentalShadowDomSupport: true,
    setupNodeEvents(on, config) {
      
    },
  },
});
