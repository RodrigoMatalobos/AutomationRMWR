

export function randomEmail () {
    var email = ("test"+(Cypress._.random(0, 1e7)).toString()+"@testautomation.com");
    cy.log(email);
    return cy.wrap(email);
}
