class HomePage {
    visit() {
      cy.visit('http://automationexercise.com');
    }
  
    // Verify we're on the right website
    verifyLogo() {
      cy.get('a > img').should('be.visible');
    }
  
    // Verify that the Website Banner is visible
    verifyBanner() {
      cy.get('#slider').should('be.visible');
    }
  
    // Verify that the product is visible
    addProductToCart(productIndex = 29) {
      cy.get(`:nth-child(${productIndex}) > .product-image-wrapper > .single-products > .productinfo`)
        .should('be.visible');
  
      // Verify that the 'Add to cart' button is visible for the product, and click
      cy.get(`:nth-child(${productIndex}) > .product-image-wrapper > .single-products > .productinfo > .btn`)
        .should('be.visible')
        .click();
    }
  
    // Verify that the 'Cart' message is displayed
    openCart() {
      cy.get('u').should('be.visible').click();
    }

    verifyLoggedInUsername(username) {
      cy.get('.shop-menu > .nav > :nth-child(10) > a') 
        .should('be.visible')
        .should('contain', `Logged in as ${username}`);
    }
  }
  
  export default new HomePage();
  