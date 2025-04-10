// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read  more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('auth', (username, password) => { // FUNCTION OR METHOD --> Then i-call natin sya sa spec or test file natin.
    cy.visit('https://www.saucedemo.com/', {timeout: 240000})
      cy.get('[data-test="username"]').type(username)
      cy.get('[data-test="password"]').type(password)
      cy.get('[data-test="login-button"]').click()
}); // Try to create other Commands - pwedeng yung add to cart at checkout is gagawan natin ng commands
 
Cypress.Commands.add('addToCart', (productSelector, productName) => {
    // Add product to cart
    cy.get(productSelector)
      .should('be.visible')
      .click();
  
    // Verify cart badge appears with 1 item
    cy.get('.shopping_cart_badge').should('contain', '1');
  
    // Optionally, navigate to the cart and verify item is listed
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
    cy.get('.cart_item').should('have.length', 1);
    cy.get('.inventory_item_name').should('contain', productName);
  });
  
Cypress.Commands.add('checkoutItem', (firstName, lastName, postalCode) => {
    // Add the product to the cart before checking out
    cy.addToCart('[data-test="add-to-cart-sauce-labs-backpack"]', 'Sauce Labs Backpack');
  
    // Verify we're on the cart page
    cy.url().should('include', '/cart.html');
    cy.get('[data-test="inventory-item-price"]').should('be.visible');
    cy.get('.cart_item').should('have.length', 1);
  
    cy.get('[data-test="checkout"]').should('be.visible').click();
  
    // User is redirected to check-out step one
    cy.url().should('include', '/checkout-step-one.html');
    cy.get('[data-test="firstName"]').should('be.visible').type(firstName);
    cy.get('[data-test="lastName"]').should('be.visible').type(lastName);
    cy.get('[data-test="postalCode"]').should('be.visible').type(postalCode);
  
    cy.get('[data-test="continue"]').should('be.visible').click();

    // User is redirected to check-out step two
    cy.url().should('include', '/checkout-step-two.html');
    cy.get('[data-test="finish"]')
    .should('be.visible')
    .click()

    // Successful checkout message is displayed
    cy.get('[data-test="checkout-complete-container"]')
    .should('be.visible')
  });
  
Cypress.Commands.add('dynamicScreenshot', (prefix) => {
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    const formattedDate = `${month}-${day}-${year}`;
    const fileName = `${prefix}-${formattedDate}`;
  
    cy.screenshot(fileName);
  });
  
Cypress.Commands.add('parabankRegister', (firstName, lastName, street, city, state, zipCode, phoneNumber, ssn, username, password) => {
    // Navigates to the Parabank Registration/Log-in Website
    cy.visit('https://parabank.parasoft.com/parabank/register.htm')
    // Checks if the PARABANK logo is visible to ensure that user is on the right website
    cy.get('.logo').should('be.visible')
    // Checks if the .form2 (container for the Registration control forms) is visible
    cy.get('.form2').should('be.visible')

    // Enter test data on the input fields
    cy.get('input[id="customer.firstName"]').type(firstName)
    cy.get('input[id="customer.lastName"]').type(lastName)
    cy.get('input[id="customer.address.street"]').type(street)
    cy.get('input[id="customer.address.city"]').type(city)
    cy.get('input[id="customer.address.state"]').type(state)
    cy.get('input[id="customer.address.zipCode"]').type(zipCode)
    cy.get('input[id="customer.phoneNumber"]').type(phoneNumber)
    cy.get('input[id="customer.ssn"]').type(ssn)
    cy.get('input[id="customer.username"]').type(username)
    cy.get('input[id="customer.password"]').type(password)
    cy.get('input[id="repeatedPassword"]').type(password)

    // Click the 'REGISTER' button
    cy.get('[colspan="2"] > .button').click()

    cy.contains("Your account was created successfully. You are now logged in.")
    .should('be.visible')
  });

Cypress.Commands.add('parabankLogin', (username, password) => {
      // Navigates to the Parabank Registration/Log-in Website
     cy.visit('https://parabank.parasoft.com/parabank/register.htm')
      // Checks if the PARABANK logo is visible to ensure that user is on the right website
     cy.get('.logo').should('be.visible')
      // Enter registered username
     cy.get('form > :nth-child(2) > .input').should('be.visible').type(username)
      // Enter registered password
     cy.get(':nth-child(4) > .input').should('be.visible').type(password)
      // Click the 'LOG IN' button
     cy.get(':nth-child(5) > .button').should('be.visible').click()
      // Verify that user is logged-in
     cy.get('.smallText').should('be.visible').contains('Welcome')
  });