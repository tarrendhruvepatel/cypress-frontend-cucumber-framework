# cypress-frontend-cucumber-framework

1. Install Node.js via https://nodejs.org/en
2. Clone repo https://github.com/tarrendhruvepatel/cypress-frontend-cucumber-framework.git
3. Open terminal to path of the cloned repo
4. Run `npm install`
5. Two options to execute the code:
    - Run `node ./node_modules/cypress/bin/cypress run` - this will execute all .cy.js files located in the /cypress/e2e folder in a headless browser.
    - Run `npx cypress open` - this will open the Cypress application where you are able to navigate to the test files and execute them with a visual UI. Here you'll also be able to debug any errors and even interact with the browser itself.