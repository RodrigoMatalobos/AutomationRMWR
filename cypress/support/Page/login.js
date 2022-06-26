
class Login {
    constructor() {
        this.login = '.login';
    }

    clickButton = () =>{
      cy.get(this.login).click();
    }
  }
  
export default new Login;

