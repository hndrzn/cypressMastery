describe('E-Commerce Test Flow', () => {
   beforeEach(() => {
     cy.auth('standard_user', 'secret_sauce')
   });
 
   it('Should successfully login', () => {
     // Verify we're on the inventory page after login
     cy.url().should('include', '/inventory.html')
     cy.get('.inventory_list').should('be.visible')

     // Take a screenshot with the prefix 'login'
    cy.dynamicScreenshot('login');

   });
 
   it('Should successfully add to cart', () => {
    // Call the user-defined command for the addToCart function
    cy.addToCart('[data-test="add-to-cart-sauce-labs-backpack"]', 'Sauce Labs Backpack');
    
    // Take a screenshot with the prefix 'addToCart'
    cy.dynamicScreenshot('addToCart');

   });


   it('Should be able to check-out item', () => {
    // Call the user-defined command for the checkout function
    cy.checkoutItem('Chesca', 'Lapid', '1902'); 

    // Take a screenshot with the prefix 'checkout'
    cy.dynamicScreenshot('checkout');

  });

});


