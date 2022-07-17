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

const { randomEmail } = require("./miscellaneous");
Cypress.Commands.add('randomEmail', randomEmail);

Cypress.Commands.add('signUpUser', (filename) => {
    
    cy.fixture('pages/accountCreation').then((element) => {
        cy.fixture(filename).then((data) => {
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
