
describe('Sign in automation practice', () => {
 
      beforeEach(function() {
            cy.visit('/')
            cy.fixture('pages/accountCreation').then((accountCreation) => {this.accountCreation = accountCreation})
            cy.fixture('pages/authentication').then((authentication) => {this.authentication = authentication})
            cy.fixture('pages/homePage').then((homePage) => {this.homePage = homePage})
            cy.randomEmail('data/dataSignIn').then((email) => {this.email= email})
	})
      afterEach(function(){
            cy.updateTestFile('data/dataSignIn', 'Mr.','testName','testLName','Password1234','1','12','1990','testCompany','testAdress','testAdress2','testCity','Alabama','12345','United States','testAditionalInfo','12345678','1112345678','testAlias')
      })
      it('Perform signIn with an invalid postalCode', function() {
            //Cambios en el documento
            cy.changeInformationTest('postCodeField', '1234', 'data/dataSignIn')
            // Estoy en Homepage
            cy.get(this.homePage.signInLink).click()
            // Estoy en authentication page
            cy.url().should('include', 'controller=authentication')
            cy.get(this.authentication.emailAddressField).type(this.email)
            cy.get(this.authentication.createAnAccountButton).click()
            // Estoy en accountCreation page
            cy.url().should('include', '#account-creation')            
            cy.signUpUser('data/dataSignIn')
            cy.get(this.accountCreation.alertMessage).should('be.visible')
            cy.get(this.accountCreation.alertMessage).should('contain',"The Zip/Postal code you've entered is invalid. It must follow this format: 00000")
      })

      it('Perform signIn with an Empty Name', function() {
            cy.changeInformationTest('firstNameField', '{esc}', 'data/dataSignIn')
            cy.changeInformationTest('addresFirstNameField', '', 'data/dataSignIn')
            // Estoy en Homepage
            cy.get(this.homePage.signInLink).click()
            // Estoy en authentication page
            cy.url().should('include', 'controller=authentication')
            cy.get(this.authentication.emailAddressField).type(this.email)
            cy.get(this.authentication.createAnAccountButton).click()
            // Estoy en accountCreation page
            cy.url().should('include', '#account-creation')   
            cy.signUpUser('data/dataSignIn')
            cy.get(this.accountCreation.alertMessage).should('be.visible')
            cy.get(this.accountCreation.alertMessage).should('contain', "firstname is required.")
      })
})