class RegistrationPage {
  // Navigates to the Parabank Registration/Log-in Website
  visit() {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
  }

  // Checks if the PARABANK logo is visible to ensure that user is on the right website
  getLogo() {
    return cy.get('.logo');
  }

  // Checks if the .form2 (container for the Registration control forms) is visible
  getForm() {
    return cy.get('.form2');
  }

  // Enter test data on the input fields
  fillRegistrationForm(credentials) {
    cy.get('input[id="customer.firstName"]').type(credentials.firstName);
    cy.get('input[id="customer.lastName"]').type(credentials.lastName);
    cy.get('input[id="customer.address.street"]').type(credentials.address.street);
    cy.get('input[id="customer.address.city"]').type(credentials.address.city);
    cy.get('input[id="customer.address.state"]').type(credentials.address.state);
    cy.get('input[id="customer.address.zipCode"]').type(credentials.address.zipCode);
    cy.get('input[id="customer.phoneNumber"]').type(credentials.phoneNumber);
    cy.get('input[id="customer.ssn"]').type(credentials.ssn);
    cy.get('input[id="customer.username"]').type(credentials.username);
    cy.get('input[id="customer.password"]').type(credentials.password);
    cy.get('input[id="repeatedPassword"]').type(credentials.password);
  }

  // Click the 'REGISTER' button
  submitRegistration() {
    cy.get('[colspan="2"] > .button').click();
  }

  // Verify registration success message
  verifyRegistrationSuccess() {
    cy.contains("Your account was created successfully. You are now logged in.")
      .should('be.visible');
  }
}

export default RegistrationPage;
