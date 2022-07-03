
describe('Sign in automation practice', () => {
  
	beforeEach(function() {
      cy.visit('/')
      cy.readFile('cypress/fixtures/pages/homePage.json').then((homePage) => {this.homePage = homePage})
      cy.readFile('cypress/fixtures/pages/authentication.json').then((authentication) => {this.authentication = authentication})
      cy.readFile('cypress/fixtures/pages/accountCreation.json').then((accountCreation) => {this.accountCreation = accountCreation})
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
        cy.signUpUser('cypress/fixtures/data/dataSigin.json')
        cy.get(this.accountCreation.alertMessage).should('be.visible')
        cy.get(this.accountCreation.alertMessage).should('contain',"The Zip/Postal code you've entered is invalid. It must follow this format: 00000")
  })
})