describe('Parabank Website Registration and Log-in Test with Fixtures', () => {
  it('Should successfully register with fixtures data', () => {
    cy.fixture('ParabankWebsite/parabankCredentials').then((credentials) => {
      // Navigates to the Parabank Registration/Log-in Website
      cy.visit('https://parabank.parasoft.com/parabank/register.htm')
      // Checks if the PARABANK logo is visible to ensure that user is on the right website
      cy.get('.logo').should('be.visible')
      // Checks if the .form2 (container for the Registration control forms) is visible
      cy.get('.form2').should('be.visible')

      // Enter test data on the input fields
      cy.get('input[id="customer.firstName"]').type(credentials.firstName)
      cy.get('input[id="customer.lastName"]').type(credentials.lastName)
      cy.get('input[id="customer.address.street"]').type(credentials.address.street)
      cy.get('input[id="customer.address.city"]').type(credentials.address.city)
      cy.get('input[id="customer.address.state"]').type(credentials.address.state)
      cy.get('input[id="customer.address.zipCode"]').type(credentials.address.zipCode)
      cy.get('input[id="customer.phoneNumber"]').type(credentials.phoneNumber)
      cy.get('input[id="customer.ssn"]').type(credentials.ssn)
      cy.get('input[id="customer.username"]').type(credentials.username)
      cy.get('input[id="customer.password"]').type(credentials.password)
      cy.get('input[id="repeatedPassword"]').type(credentials.password)

      // Click the 'REGISTER' button
      cy.get('[colspan="2"] > .button').click()

      cy.contains("Your account was created successfully. You are now logged in.")
      .should('be.visible')

      cy.dynamicScreenshot('parabankRegistrationFixtures')
    })
  })

  it('Should succesfully log-in with fixtures data', () => {

    cy.fixture('ParabankWebsite/parabankCredentials').then((credentials) => {
      // Navigates to the Parabank Registration/Log-in Website
      cy.visit('https://parabank.parasoft.com/parabank/register.htm')
      // Checks if the PARABANK logo is visible to ensure that user is on the right website
      cy.get('.logo').should('be.visible')

      // Enter registered username
      cy.get('form > :nth-child(2) > .input').should('be.visible')
      .type(credentials.username)
      // Enter registered password
      cy.get(':nth-child(4) > .input').should('be.visible')
      .type(credentials.password)

      // Click the 'LOG IN' button
      cy.get(':nth-child(5) > .button').should('be.visible')
      .click()

      cy.get('.smallText').should('be.visible')
      .contains(`Welcome ${credentials.firstName} ${credentials.lastName}`)

      cy.dynamicScreenshot('parabankLoginFixtures')
  })
});
});
