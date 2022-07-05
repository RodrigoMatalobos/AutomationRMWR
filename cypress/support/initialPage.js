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

Cypress.Commands.add('randomMail', (selector) => {
        let email = ''
        const uuid = () => Cypress._.random(0, 1e7)
        const id = uuid()
        email = (`${id}@testrmmail.com`)
        cy.get(selector).type(email);     
});

Cypress.Commands.add('randomMailWrap', (selector) => {
    let email = ''
    const uuid = () => Cypress._.random(0, 1e7)
    const id = uuid()
    email = (`${id}@testrmmail.com`)
    cy.wrap(email);     
});

Cypress.Commands.add('signInButtonSelector', () => {
    cy.get('.login').click();
})

Cypress.Commands.add('contactUsButtonSelector', () => {
    cy.get('a[title="Contact.Us"]').click();
})

Cypress.Commands.add('searchSelector', () => {
    cy.get('[id="search_query_top"]');
})



Cypress.Commands.add('myFunction', () => {
    let email = ''
    const uuid = () => Cypress._.random(0, 1e7)
    const id = uuid()
    email = (`${id}@testrmmail.com`)
    return cy.wrap(email);   
})