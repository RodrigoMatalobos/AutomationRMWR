
describe('Sign in automation practice', () => {
  
	beforeEach(function() {
      cy.visit('/')
      cy.readFile('cypress/fixtures/homePage.json').then((homePage) => {this.homePage = homePage})
      cy.readFile('cypress/fixtures/authentication.json').then((authentication) => {this.authentication = authentication})
      cy.readFile('cypress/fixtures/accountCreation.json').then((accountCreation) => {this.accountCreation = accountCreation})
      cy.randomEmail().then((email) => {this.email= email})
		})
  
  it('Perform a sign in', function() {
        // Estoy en Homepage
        cy.get(this.homePage.signInLink).click()
        // Estoy en authentication page
       // cy.randomEmail().then(email => { cy.get(this.authentication.emailAddressField).type(email)}) 
        cy.get(this.authentication.emailAddressField).type(this.email)
        cy.get(this.authentication.createAnAccountButton).click()
        // Estoy en accountCreation page
        cy.get(this.accountCreation.mrRadioButton).should('be.visible').check()
        cy.get(this.accountCreation.firstNameField).type("test")
        cy.get(this.accountCreation.lastNameField).type("test")
        cy.get(this.accountCreation.emailField).should('have.value',this.email)
        cy.get(this.accountCreation.passwordField).type("test123")
        cy.get(this.accountCreation.dayDropDown).select("1")
        cy.get(this.accountCreation.monthDropDown).select("January")
        cy.get(this.accountCreation.yearDropDown).select("1990")
        cy.get(this.accountCreation.addresFirstNameField).should('have.value',"test")
        cy.get(this.accountCreation.addressLastNameField).should('have.value',"test")
        cy.get(this.accountCreation.companyField).type("test")
        cy.get(this.accountCreation.addressField).type("calle falsa 123")
        cy.get(this.accountCreation.addressLine2Field).type("siempreviva 742")
        cy.get(this.accountCreation.cityField).type("test")
        cy.get(this.accountCreation.stateDropDown).select("Florida")
        cy.get(this.accountCreation.postCodeField).type("1234")
        cy.get(this.accountCreation.countryDropDown).select("United States")
        cy.get(this.accountCreation.aditionalInformationField).type("Estaba asi cuando llegue")
        cy.get(this.accountCreation.homePhoneField).type("43031360")
        cy.get(this.accountCreation.mobilePhoneField).type("1130220555")
        cy.get(this.accountCreation.aliasAddressField).type("test")
        cy.get(this.accountCreation.registerButton).click()
        cy.get(this.accountCreation.alertMessage).should('be.visible')
        cy.get(this.accountCreation.alertMessage).should('contain',"The Zip/Postal code you've entered is invalid. It must follow this format: 00000")
  })
})