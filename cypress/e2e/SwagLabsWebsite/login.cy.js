describe('Log-in Form Test', () => {
  it('Verify Successful Valid Credential Log-in', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.contains("Swag Labs").should('be.visible')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', 'https://www.saucedemo.com/inventory.html')
  })

  it('Verify Unsuccessful Invalid Credential Log-in', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.contains("Swag Labs").should('be.visible')
    cy.get('[data-test="username"]').type("Henderson")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service')
    cy.url().should('not.include', 'https://www.saucedemo.com/inventory.html')
  })
})

/* describe() block is a test suite,
a collection of test cases */ 
