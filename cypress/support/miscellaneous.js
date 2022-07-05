

export function randomEmail (filename) {
    cy.readFile(filename, (data) => {
        if (err) {
            return console.error(err);
        };
    }).then((data) => {
        data.emailField = ("test"+(Cypress._.random(0, 1e7)).toString()+"@testautomation.com")
        cy.log(data.emailField)
        cy.writeFile(filename, JSON.stringify(data))
        return cy.wrap(data.emailField);
    })    
}
