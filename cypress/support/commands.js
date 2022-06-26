// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Comando para realizar de forma aleatoria mails.
Cypress.Commands.add('userRandomizer', () => {
    // Leo el archivo userSing
    cy.readFile("cypress/fixtures/userSign.json", (data) => {
    //si es invalido lanzo un error.
        if (err) {
            return console.error(err);
        };
    // Lo tomo y genero una cadena numerica random para la selección de un email.
    }).then((data) => {
        const uuid = () => Cypress._.random(0, 1e7)
        const id = uuid()
        data.email = (`${id}@testrmmail.com`)      
        cy.writeFile("cypress/fixtures/userSign.json", JSON.stringify(data))
    })
});