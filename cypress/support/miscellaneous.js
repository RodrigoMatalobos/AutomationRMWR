

export function randomEmail (filename) {

        cy.readFile("cypress/fixtures/"+filename+".json").then((data) =>
            {
            data.emailField = ("test"+(Cypress._.random(0, 1e7)).toString()+"@testautomation.com")
            cy.log(data.emailField)
            cy.writeFile("cypress/fixtures/"+filename+".json", JSON.stringify(data))
            return cy.wrap(data.emailField)
            })
}
