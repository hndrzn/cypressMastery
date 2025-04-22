class CheckoutPage {
    // Verify that the Address details are correct
    verifyAddressDetails(data) {
      cy.get('#address_delivery').should('be.visible')
        .then(($el) => {
          const text = $el.text();
          // Assert that all the expected address fields are present
          expect(text).to.include(data.firstName);
          expect(text).to.include(data.lastName);
          expect(text).to.include(data.address);
          expect(text).to.include(data.city);
          expect(text).to.include(data.state);
          expect(text).to.include(data.zipCode);
          expect(text).to.include(data.phoneNumber);
        });
    }
  
    // Enter text/comment on the comment text area
    addComment(comment) {
      cy.get('.form-control').type(comment);
    }
  
    // Verify that the 'Place Order' is visible, then click
    placeOrder() {
      cy.get(':nth-child(7) > .btn').should('be.visible').click();
    }
  }
  
  export default new CheckoutPage();
  