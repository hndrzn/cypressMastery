describe('Parabank Website Registration Test with Faker Data', () => {
    beforeEach(() => {
      cy.generateFakerData();
    });
 
    it('Should successfully register with faker data', () => {
      cy.fixture('fakerData').then((fakerData) => {
        // Navigates to the Parabank Registration/Log-in Website
        cy.visit('https://parabank.parasoft.com/parabank/register.htm')
        // Checks if the PARABANK logo is visible to ensure that user is on the right website
        cy.get('.logo').should('be.visible')
        // Checks if the .form2 (container for the Registration control forms) is visible
        cy.get('.form2').should('be.visible')
 
        // Enter test data on the input fields
        cy.get('input[id="customer.firstName"]').type(fakerData.firstName)
        cy.get('input[id="customer.lastName"]').type(fakerData.lastName)
        cy.get('input[id="customer.address.street"]').type(fakerData.address)
        cy.get('input[id="customer.address.city"]').type(fakerData.city)
        cy.get('input[id="customer.address.state"]').type(fakerData.state)
        cy.get('input[id="customer.address.zipCode"]').type(fakerData.zipCode)
        cy.get('input[id="customer.phoneNumber"]').type(fakerData.phoneNumber)
        cy.get('input[id="customer.ssn"]').type(fakerData.ssn)
        cy.get('input[id="customer.username"]').type(fakerData.username)
        cy.get('input[id="customer.password"]').type(fakerData.password)
        cy.get('input[id="repeatedPassword"]').type(fakerData.password)
 
        // Click the 'REGISTER' button
        cy.get('[colspan="2"] > .button').click()
 
        cy.contains("Your account was created successfully. You are now logged in.")
        .should('be.visible')

        // Take screenshot
        cy.dynamicScreenshot('parabankRegistrationFaker');
      })
    })

    it('Should successfully log-in with faker data', () => {
        cy.fixture('fakerData').then((fakerData) => {
        // Navigates to the Parabank Registration/Log-in Website
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');
          
        // Checks if the PARABANK logo is visible to ensure that user is on the right website
        cy.get('.logo').should('be.visible');
      
        // Enter registered username
        cy.get('form > :nth-child(2) > .input')
        .should('be.visible')
        .type(fakerData.username);
      
        // Enter registered password
        cy.get(':nth-child(4) > .input')
        .should('be.visible')
        .type(fakerData.password);
      
        // Click the 'LOG IN' button
        cy.get(':nth-child(5) > .button')
        .should('be.visible')
        .click();
      
        // Assertion for successful login
        cy.get('.smallText')
        .should('be.visible')
        .contains(`Welcome ${fakerData.firstName} ${fakerData.lastName}`);
      
        // Take screenshot
        cy.dynamicScreenshot('parabankLoginFaker');
      })
    })
  });



 


