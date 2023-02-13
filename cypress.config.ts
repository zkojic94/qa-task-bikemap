const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.bikemap.net/",
    specPattern: "cypress/e2e/**/*.spec.cy.{js,jsx,ts,tsx}",
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
