import Login from '../../support/Page/login'

describe('Sing in automation practice', () => {
  before( function() {
    
  });
  beforeEach( function() {
    cy.visit('http://automationpractice.com')
    cy.get('.logo.img-responsive').should('exist')
    // Get updated data fron a fixture file (not using a cy.fixture because add outdated data)
    // https://github.com/cypress-io/cypress/issues/4716
    cy.userRandomizer()
    cy.readFile('cypress/fixtures/userSign.json').then(userData => {
      this.userData = userData
    });
    
  });

  after( function() {

  });
  afterEach( function() {
    

  });

  it('Sing in pass', function() {
    Login.clickButton();

   /* cy.get('.page-heading').contains('Authentication').should('exist')
    // Choose form sing up
    cy.get('form[id="create-account_form"]').within(() => {
      // Add email
      cy.get('.is_required.validate.account_input.form-control').type(this.userData.email)
      //click on Create an account button
      cy.get('button[id="SubmitCreate"]').click()
    })
    // verify change off screen
    cy.get('.page-heading').contains('Create an account')
    // get personal information form
 */
})

})