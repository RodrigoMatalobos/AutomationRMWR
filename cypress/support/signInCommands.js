Cypress.Commands.add('signUpUser', (filename) => {
    
    cy.readFile('cypress/fixtures/pages/accountCreation.json').then((element) => {
        cy.readFile(filename).then((data) => {
            cy.get(element.mrRadioButton).should('be.visible').check()
            cy.get(element.firstNameField).type(data.firstNameField)
            cy.get(element.lastNameField).type(data.lastNameField)
            cy.get(element.emailField).should('have.value', data.emailField)
            cy.get(element.passwordField).type(data.passwordField)
            cy.get(element.dayDropDown).select(data.dayDropDown)
            cy.get(element.monthDropDown).select(data.monthDropDown)
            cy.get(element.yearDropDown).select(data.yearDropDown)
            cy.get(element.addresFirstNameField).should('have.value', data.addresFirstNameField)
            cy.get(element.addressLastNameField).should('have.value', data.addressLastNameField)
            cy.get(element.companyField).type(data.companyField)
            cy.get(element.addressField).type(data.addressField)
            cy.get(element.addressLine2Field).type(data.addressLine2Field)
            cy.get(element.cityField).type(data.cityField)
            cy.get(element.stateDropDown).select(data.stateDropDown)
            cy.get(element.postCodeField).type(data.postCodeField)
            cy.get(element.countryDropDown).select(data.countryDropDown)
            cy.get(element.aditionalInformationField).type(data.aditionalInformationField)
            cy.get(element.homePhoneField).type(data.homePhoneField)
            cy.get(element.mobilePhoneField).type(data.mobilePhoneField)
            cy.get(element.aliasAddressField).type(data.aliasAddressField)
            cy.get(element.registerButton).click()
        })
    });
})

Cypress.Commands.add('userWithoutFirstName', (filename) => {
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
});


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