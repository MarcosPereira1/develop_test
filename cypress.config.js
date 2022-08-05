const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/report/mochawesome-report',
    overwrite: true,
    html: true,
    json: false,
    timestamp: 'mmddyyyy_HHMMss',
  },
  projectId: 'gdtfp5',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: "https://web.zeussapp.com.br/'",
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
