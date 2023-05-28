import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://mockend.com/api/pgilgunn/coding-test',
    specPattern: 'cypress/integration/api-tests/*.spec.{js,jsx,ts,tsx}'
  }
});
