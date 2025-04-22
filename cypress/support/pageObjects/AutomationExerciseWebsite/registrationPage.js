class RegistrationPage {
    // Enter registration details from dynamic 'data'
    enterRegistrationDetails(data) {
      cy.get('[data-qa="signup-name"]').type(data.username).should('have.value', data.username);
      cy.get('[data-qa="signup-email"]').type(data.email).should('have.value', data.email);
    }
  
    // Verify that the 'Signup' button is displayed, then click
    submitSignup() {
      cy.get('[data-qa="signup-button"]').should('be.visible').click();
    }
  
    // Verifying control forms visibility and entering data
    selectGender() {
      const genderSelectors = [
        ':nth-child(3) > .top > [data-qa="title"]', 
        ':nth-child(4) > .top > [data-qa="title"]'
      ];
  
      // Selecting either of the two radio buttons
      cy.get(genderSelectors[Math.floor(Math.random() * genderSelectors.length)])
        .should('be.visible')
        .click(); 
    }
  
    fillPersonalDetails(data) {
      // Verifying visibility and entering data
      cy.get('[data-qa="password"]').should('be.visible').type(data.password).should('have.value', data.password);
  
      // Selecting random days, months, years
      this.selectRandomDate('days');
      this.selectRandomDate('months');
      this.selectRandomDate('years');
      
      // Filling personal information
      cy.get('[data-qa="first_name"]').type(data.firstName);
      cy.get('[data-qa="last_name"]').type(data.lastName);
      cy.get('[data-qa="company"]').type(data.company);
      cy.get('[data-qa="address"]').type(data.address);
      cy.get('[data-qa="address2"]').type(data.address2);
    }
  
    // Helper function to select a random date value
    selectRandomDate(field) {
      cy.get(`[data-qa="${field}"] option`)
        .should('be.visible')
        .then((options) => {
          const randomIndex = Math.floor(Math.random() * options.length);
          cy.get(`[data-qa="${field}"]`).select(options[randomIndex].value).should('have.value', options[randomIndex].value);
        });
    }
  
    // Fill address details dynamically
    fillAddressDetails(data) {
      // Selecting random country
      cy.get('[data-qa="country"]').selectRandomCountry();
      cy.get('[data-qa="state"]').type(data.state);
      cy.get('[data-qa="city"]').type(data.city);
      cy.get('[data-qa="zipcode"]').type(data.zipCode);
      cy.get('[data-qa="mobile_number"]').type(data.phoneNumber);
    }
  
    // Verify and submit account creation
    createAccount() {
      cy.get('[data-qa="create-account"]').click();
    }
  }
  
  export default new RegistrationPage();
  