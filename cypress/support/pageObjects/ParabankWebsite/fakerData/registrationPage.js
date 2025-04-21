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

  // Enter test data on the input fields using faker data
  fillRegistrationForm(fakerData) {
    cy.get('input[id="customer.firstName"]').type(fakerData.firstName);
    cy.get('input[id="customer.lastName"]').type(fakerData.lastName);
    cy.get('input[id="customer.address.street"]').type(fakerData.address);
    cy.get('input[id="customer.address.city"]').type(fakerData.city);
    cy.get('input[id="customer.address.state"]').type(fakerData.state);
    cy.get('input[id="customer.address.zipCode"]').type(fakerData.zipCode);
    cy.get('input[id="customer.phoneNumber"]').type(fakerData.phoneNumber);
    cy.get('input[id="customer.ssn"]').type(fakerData.ssn);
    cy.get('input[id="customer.username"]').type(fakerData.username);
    cy.get('input[id="customer.password"]').type(fakerData.password);
    cy.get('input[id="repeatedPassword"]').type(fakerData.password);
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
