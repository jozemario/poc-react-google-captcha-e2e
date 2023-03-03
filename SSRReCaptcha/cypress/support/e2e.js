import '@testing-library/cypress/add-commands'

/* Cypress.on('uncaught:exception', (err, runnable) => {
    // we expect a 3rd party library error with message 'list not defined'
    // and don't want to fail the test so we return false
    if (err.message.includes('list not defined')) {
        return false
    }
    // we still want to ensure there are no other unexpected
    // errors, so we let them fail the test
}) */

/* Cypress.on("uncaught:exception", (e, runnable) => {
    console.log("error", e);
    console.log("runnable", runnable);
    if (e.message.includes("Things went bad")) {
        return false;
    }
}); */

/* Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
return false
}) */
beforeEach(() => {
    cy.intercept(
        { url: /.*\/recaptcha\/api\.js.*/ },
        {
            fixture: "stub-recaptcha-api.js,null"
        }
    );

    cy.on("uncaught:exception", (e, runnable) => {
        console.log("error", e);
        console.log("runnable", runnable);
        if (e.message.includes("“Service Downtime”")) {
            return false;
        }
    })
})
