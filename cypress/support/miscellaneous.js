

export function randomEmail (filename) {
    var email = ("test"+(Cypress._.random(0, 1e7)).toString()+"@testautomation.com")
    cy.log(email)
    cy.writeFile(filename).then((data) => {data.emailField= email})
    return cy.wrap(email);
}
