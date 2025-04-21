describe('Parabank Website Registration and Log-in Test', () => {
 
    it('Should successfully register', () => {
        // Call the user-defined command for the Registration function
        cy.parabankRegister(
             'Chesca', 'Lapid', '32 Havana 1234', 'Makati', 'N/A', '3019', '09222222222', '12345678', 'CHELSCA_2001', 'parabankAccHel1231'
         )

        // Take a screenshot
        cy.dynamicScreenshot('parabankRegistration')
    });

    it("Should successfully log-in registered credentials", () => {
        // Call the user-defined command for the Login function
        cy.parabankLogin('CHELSCA_2001', 'parabankAccHel1231')

        // Take a screenshot
        cy.dynamicScreenshot('parabankLogin')
    });

    it("Should successfully log-out", () => {
        // Call the user-defined command for the Login function in order to log-out
        cy.parabankLogin('CHELSCA_2001', 'parabankAccHel1231')

        cy.get('#leftPanel > ul > :nth-child(8) > a').should('be.visible')
        .click()

        // "Customer Login" static text should be visible
        cy.get('h2').should('be.visible')

        // Take a screenshot
        cy.dynamicScreenshot('parabankLogout')
    });
  
  }); 