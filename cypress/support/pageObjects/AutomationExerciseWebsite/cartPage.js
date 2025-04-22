class CartPage {
    // Verify that we are on the 'View Cart' webpage
    verifyCartPage() {
      cy.url().should('include', '/view_cart');
    }
  
    // Verify that the 'Proceed to Checkout' button is visible, then click
    proceedToCheckout() {
      cy.get('.col-sm-6 > .btn').should('be.visible').click();
    }
  
    // Verify that the 'Checkout' message is displayed
    openCheckout() {
      cy.get('.modal-content').should('be.visible').should('contain', 'Register / Login account to proceed on checkout.');
    }
  
    // Verify that the 'Register/Login' Hypertext link is visible, then click
    clickRegisterLoginLink() {
      cy.get('.modal-body > :nth-child(2) > a > u').should('be.visible').click();
    }
  }
  
  export default new CartPage();
  