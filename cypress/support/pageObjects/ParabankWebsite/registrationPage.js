class RegistrationPage {
  // Navigates to the Parabank Registration/Log-in Website
  visit() {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
  }

  // Checks if the PARABANK logo is visible to ensure that user is on the right website
  verifyLogo() {
    cy.get('.logo').should('be.visible');
  }

  // Checks if the .form2 (container for the Registration control forms) is visible
  verifyForm() {
    cy.get('.form2').should('be.visible');
  }

  // Enter test data on the input fields using either fixture or faker data
  fillRegistrationForm(data) {
    cy.get('input[id="customer.firstName"]').type(data.firstName);
    cy.get('input[id="customer.lastName"]').type(data.lastName);
    cy.get('input[id="customer.address.street"]').type(data.address);
    cy.get('input[id="customer.address.city"]').type(data.city);
    cy.get('input[id="customer.address.state"]').type(data.state);
    cy.get('input[id="customer.address.zipCode"]').type(data.zipCode);
    cy.get('input[id="customer.phoneNumber"]').type(data.phoneNumber);
    cy.get('input[id="customer.ssn"]').type(data.ssn);
    cy.get('input[id="customer.username"]').type(data.username);
    cy.get('input[id="customer.password"]').type(data.password);
    cy.get('input[id="repeatedPassword"]').type(data.password);
  }

  // Click the 'REGISTER' button
  submit() {
    cy.get('[colspan="2"] > .button').click();
  }

  // Verify registration success message
  verifySuccessMessage() {
    cy.contains("Your account was created successfully. You are now logged in.")
      .should('be.visible');
  }
}

export default RegistrationPage;
