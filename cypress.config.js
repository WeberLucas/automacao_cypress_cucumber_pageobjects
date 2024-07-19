const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default
module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: "https://phptravels.net/",
    SpecPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:processor", cucumber());
    },
  },
});
