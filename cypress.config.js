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
    projectName: process.env.PROJECT_NAME || "Cypress Test Automation",
    environment: process.env.ENVIRONMENT || "QA",
    API_KEY: process.env.API_KEY,
    API_BASE_URL: process.env.API_BASE_URL || 'https://petstore.swagger.io/v2',
  },
  e2e: {
    baseUrl: process.env.API_BASE_URL || 'https://petstore.swagger.io/v2',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
