class PaymentPage {
  enterPaymentDetails(fakerData) {
    cy.get('[data-qa="name-on-card"]').type(fakerData.fullName);
    cy.get('[data-qa="card-number"]').type(fakerData.cardNumber);
    cy.get('[data-qa="cvc"]').type(fakerData.cvc);
    cy.get('[data-qa="expiry-month"]').type(fakerData.expiryMonth);
    cy.get('[data-qa="expiry-year"]').type(fakerData.expiryYear);
  }

  completePayment() {
    cy.get('[data-qa="pay-button"]').click();
    cy.url().should('include', 'payment_done');
  }
}

export default new PaymentPage();
