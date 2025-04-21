class LoginPage {
  // Navigates to the Parabank Registration/Log-in Website
  visit() {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
  }

  // Checks if the PARABANK logo is visible to ensure that user is on the right website
  getLogo() {
    return cy.get('.logo');
  }

  // Enter registered username
  fillLoginForm(credentials) {
    cy.get('form > :nth-child(2) > .input').should('be.visible')
      .type(credentials.username);
    // Enter registered password
    cy.get(':nth-child(4) > .input').should('be.visible')
      .type(credentials.password);
  }

  // Click the 'LOG IN' button
  submitLogin() {
    cy.get(':nth-child(5) > .button').should('be.visible')
      .click();
  }

  // Verify login success message
  verifyLoginSuccess(credentials) {
    cy.get('.smallText').should('be.visible')
      .contains(`Welcome ${credentials.firstName} ${credentials.lastName}`);
  }
}

export default LoginPage;
