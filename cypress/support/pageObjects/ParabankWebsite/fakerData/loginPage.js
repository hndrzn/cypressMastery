class LoginPage {
  // Navigates to the Parabank Registration/Log-in Website
  visit() {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
  }

  // Checks if the PARABANK logo is visible to ensure that user is on the right website
  verifyLogo() {
    cy.get('.logo').should('be.visible');
  }

  // Enter registered username and password using faker data
  fillLoginForm(fakerData) {
    cy.get('form > :nth-child(2) > .input').should('be.visible').type(fakerData.username);
    cy.get(':nth-child(4) > .input').should('be.visible').type(fakerData.password);
  }

  // Click the 'LOG IN' button
  submit() {
    cy.get(':nth-child(5) > .button').should('be.visible').click();
  }

  // Verify login success message
  verifyWelcomeMessage(fakerData) {
    cy.get('.smallText').should('be.visible').contains(`Welcome ${fakerData.firstName} ${fakerData.lastName}`);
  }
}

export default LoginPage;
