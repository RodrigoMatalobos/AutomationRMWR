const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://automationpractice.com/index.php",
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {

    },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: "./results/reports"
  },
  videosFolder: "results/videos",
  screenshotsFolder: "results/screenshots",
  modifyObstructiveCode: false
}
});
