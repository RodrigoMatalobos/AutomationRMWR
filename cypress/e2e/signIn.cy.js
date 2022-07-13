
describe('Sign in automation practice', () => {
 
      beforeEach(function() {
            cy.visit('/')
            cy.fixture('pages/accountCreation').then((accountCreation) => {this.accountCreation = accountCreation})
            cy.fixture('pages/authentication').then((authentication) => {this.authentication = authentication})
            cy.fixture('pages/homePage').then((homePage) => {this.homePage = homePage})
            cy.randomEmail('data/dataSignIn').then((email) => {this.email= email})
	})
  
      it('Perform a sign in', function() {
            // Estoy en Homepage
            cy.get(this.homePage.signInLink).click()
            // Estoy en authentication page
            cy.get(this.authentication.emailAddressField).type(this.email)
            cy.get(this.authentication.createAnAccountButton).click()
            // Estoy en accountCreation page
            cy.signUpUser('data/dataSignIn')
            cy.get(this.accountCreation.alertMessage).should('be.visible')
            cy.get(this.accountCreation.alertMessage).should('contain',"The Zip/Postal code you've entered is invalid. It must follow this format: 00000")
      })
})