const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;


module.exports = defineConfig({
  projectId: '9cn1ru',
  viewportWidth : 1920,
  viewportHeight : 1080, 
  defaultCommandTimeout: 8000, 
  pageLoadTimeout: 10000,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://rahulshettyacademy.com/angularpractice/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern:'cypress/Integration/examples/BDD/ecommerce*.feature'
  },
});
