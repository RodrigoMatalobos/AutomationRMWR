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

Cypress.Commands.add('signUpUser', (authData) => {
    cy.readFile('cypress/fixtures/pages/accountCreation.json').then((accountCreation) => {this.accountCreation = accountCreation})
    cy.readFile(authData).then((dataSigin) => {this.dataSigin = dataSigin})

    cy.get(this.accountCreation.mrRadioButton).should('be.visible').check()
    cy.get(this.accountCreation.firstNameField).type(this.dataSigin.firstNameField)
    cy.get(this.accountCreation.lastNameField).type(this.dataSigin.lastNameField)
    cy.get(this.accountCreation.emailField).should('have.value',this.email.emailField)
    cy.get(this.accountCreation.passwordField).type(this.dataSigin.passwordField)
    cy.get(this.accountCreation.dayDropDown).select(this.dataSigin.dayDropDown)
    cy.get(this.accountCreation.monthDropDown).select(this.dataSigin.monthDropDown)
    cy.get(this.accountCreation.yearDropDown).select(this.dataSigin.yearDropDown)
    cy.get(this.accountCreation.addresFirstNameField).should('have.value', this.dataSigin.addresFirstNameField)
    cy.get(this.accountCreation.addressLastNameField).should('have.value', this.dataSigin.addressLastNameField)
    cy.get(this.accountCreation.companyField).type(this.dataSigin.companyField)
    cy.get(this.accountCreation.addressField).type(this.dataSigin.addressField)
    cy.get(this.accountCreation.addressLine2Field).type(this.dataSigin.addressLine2Field)
    cy.get(this.accountCreation.cityField).type(this.dataSigin.cityField)
    cy.get(this.accountCreation.stateDropDown).select(this.dataSigin.stateDropDown)
    cy.get(this.accountCreation.postCodeField).type(this.dataSigin.postCodeField)
    cy.get(this.accountCreation.countryDropDown).select(this.dataSigincountryDropDown)
    cy.get(this.accountCreation.aditionalInformationField).type(this.dataSigin.aditionalInformationField)
    cy.get(this.accountCreation.homePhoneField).type(this.dataSigin.homePhoneField)
    cy.get(this.accountCreation.mobilePhoneField).type(this.dataSigin.mobilePhoneField)
    cy.get(this.accountCreation.aliasAddressField).type(this.dataSigin.aliasAddressField)
    cy.get(this.accountCreation.registerButton).click()
});