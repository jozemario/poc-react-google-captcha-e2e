import { resolve } from 'path'
import { defineConfig } from 'cypress'
import vitePreprocessor from 'cypress-vite'


export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'http://echo3.cincoceroseis.com/',
    viewportWidth: 1280,
    viewportHeight: 768,
    specPattern: 'cypress/e2e/*.cy.js',
    video: false,
    screenshotOnRunFailure: false,

    setupNodeEvents(on) {
      //node event listeners
      /*  on(
         'file:preprocessor',
         vitePreprocessor(resolve(__dirname, './vite.config.js')),
       ) */
    },
  },
})