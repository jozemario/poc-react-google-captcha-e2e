describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit(Cypress.config().baseUrl + 'captcha') // change URL to match your dev URL

        cy.wait(2 * 1000)
        cy.get('#submit').click()

        /*  cy.iframe('#ifrmCookieBanner')
             .find('#grouped-pageload-Banner button[class*="save-consents evSpAcceptBtn"]')
             .should('be.visible')
             .click() */

        // This will verify that the iframe is loaded to any page other than 'about:blank'
        /*  cy.iframe().find('.some-button').should('be.visible').click()
         cy.iframe().contains('Some hidden element').should('not.be.visible')
         cy.find('#outside-iframe').click() // this will be executed outside the iframe */

        // You can also give it a selector to find elements inside of a specific iframe
        /* cy.iframe('#my-frame').find('.some-button').should('be.visible').click()
        cy.iframe('#my-second-frame').contains('Some hidden element').should('not.be.visible') */
    })
})