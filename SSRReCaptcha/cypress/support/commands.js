Cypress.Commands.add('getSessionStorage', (key) => {
    cy.window().then((window) => window.sessionStorage.getItem(key))
})

Cypress.Commands.add('setSessionStorage', (key, value) => {
    cy.window().then((window) => {
        window.sessionStorage.setItem(key, value)
    })
})

Cypress.Commands.add('createUser', (user, url, method) => {
    cy.request({
        method: method,
        url: url,
        body: {
            email: user.username,
            password: user.password,
        },
    }).then((resp) => {
        cy.log(resp.body)
        /* cy.request({
            method: 'POST',
            url: 'https://www.example.com/users',
            headers: { Authorization: 'Bearer ' + resp.body.token },
            body: user,
        }) */
    })
})