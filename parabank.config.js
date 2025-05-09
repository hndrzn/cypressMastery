const { defineConfig } = require("cypress");
const dotenv = require("dotenv");

require("dotenv").config();

module.exports = defineConfig({
  projectId: "y8o9ny",
  experimentalStudio: true,
  retries: 3, 
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  env: {
    
  },
  e2e: {
    baseUrl: process.env.API_BASE_URL || 'https://parabank.parasoft.com/parabank/index.htm',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
