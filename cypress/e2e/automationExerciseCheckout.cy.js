describe('Automation Exercise Website - Place Order - Checkout Functionality (Test Cases 14, 15, and 16)', () => {
    beforeEach(() => {
      cy.placeOrderProcess();
    });
    
    // Test Case 14: Place Order: Register while Checkout
    it('Should Place Order: Register while Checkout', () => {
      cy.readFile('cypress/fixtures/placeOrderData.json').then((fakerData) => {
        // Verify we're on the right website
        cy.url().should('include', 'automationexercise.com');
  
        // Verify that the Website Logo is visible
        cy.get('a > img').should('be.visible');
  
        // Verify that the Website Banner is visible
        cy.get('#slider').should('be.visible');
  
        // Verify that the body container for all the products are visible
        cy.get('body > :nth-child(3)').should('be.visible');
  
        // Verify that the product is visible
        cy.get(':nth-child(29) > .product-image-wrapper > .single-products > .productinfo').should('be.visible');
        
        // Verify that the 'Add to cart' button is visible for the product, and click
        cy.get(':nth-child(29) > .product-image-wrapper > .single-products > .productinfo > .btn')
          .should('be.visible')
          .click();
  
        // Verify that the 'Cart' message is displayed
        cy.get('.modal-content')
          .should('be.visible')
          .should('contain', 'Added!')
          .should('contain', 'Your product has been added to cart.');
  
        // Verify that the 'View Cart' hypertext link is displayed, in order to proceed to checkout
        cy.get('u').should('be.visible').click();
  
        // Verify that we are on the 'View Cart' webpage
        cy.url().should('include', '/view_cart');
  
        // Verify that the 'Proceed to Checkout' button is visible, then click
        cy.get('.col-sm-6 > .btn').should('be.visible').click();
  
        // Verify that the 'Checkout' message is displayed
        cy.get('.modal-content')
          .should('be.visible')
          .should('contain', 'Register / Login account to proceed on checkout.');
  
        // Verify that the 'Register/Login' Hypertext link is visible, then click
        cy.get('.modal-body > :nth-child(2) > a > u').should('be.visible').click();
  
        // Verify that we are on the Registration/Login webpage
        cy.url().should('include', 'login');
  
        // Enter registration details 
        cy.get('[data-qa="signup-name"]').type(fakerData.username).should('have.value', fakerData.username);
        cy.get('[data-qa="signup-email"]').type(fakerData.email).should('have.value', fakerData.email);
  
        // Verify that the 'Signup' button is displayed, then click
        cy.get('[data-qa="signup-button"]').should('be.visible').click();
  
        // Verify that we are on the 'Signup' Webpage
        cy.url().should('include', 'signup');

        // Verifying control forms visibility and entering data
  
        // Selecting 'Title' 
        const genderSelectors = [
          ':nth-child(3) > .top > [data-qa="title"]', 
          ':nth-child(4) > .top > [data-qa="title"]'  
        ];

        // Selecting either of the two radio buttons
        cy.get(genderSelectors[Math.floor(Math.random() * genderSelectors.length)])
          .should('be.visible')
          .click(); 
        
        cy.get('[data-qa="password"]').should('be.visible').type(fakerData.password).should('have.value', fakerData.password);
        
        cy.get('[data-qa="days"] option')
          .should('be.visible')
          .then((options) => {
          const randomIndex = Math.floor(Math.random() * options.length); 
          cy.get('[data-qa="days"]').select(options[randomIndex].value)
            .should('have.value', options[randomIndex].value);
        });
        
        cy.get('[data-qa="months"] option')
          .should('be.visible')
          .then((options) => {
          const randomIndex = Math.floor(Math.random() * options.length); 
          cy.get('[data-qa="months"]').select(options[randomIndex].value)
            .should('have.value', options[randomIndex].value);
        });
        
        cy.get('[data-qa="years"] option')
          .should('be.visible')
          .then((options) => {
          const randomIndex = Math.floor(Math.random() * options.length); 
          cy.get('[data-qa="years"]').select(options[randomIndex].value)
            .should('have.value', options[randomIndex].value);
        });
        
        cy.get('[data-qa="first_name"]').should('be.visible').type(fakerData.firstName).should('have.value', fakerData.firstName);
        cy.get('[data-qa="last_name"]').should('be.visible').type(fakerData.lastName).should('have.value', fakerData.lastName);
        cy.get('[data-qa="company"]').should('be.visible').type(fakerData.company).should('have.value', fakerData.company);
        cy.get('[data-qa="address"]').should('be.visible').type(fakerData.address).should('have.value', fakerData.address);
        cy.get('[data-qa="address2"]').should('be.visible').type(fakerData.address2).should('have.value', fakerData.address2);
        
        cy.get('[data-qa="country"]')
          .should('be.visible')
          .find('option')
          .then((options) => {
          const randomCountry = options[Math.floor(Math.random() * options.length)].value;
          cy.get('[data-qa="country"]').select(randomCountry)
            .should('have.value', randomCountry);
        });      
        
        cy.get('[data-qa="state"]').should('be.visible').type(fakerData.state).should('have.value', fakerData.state);
        cy.get('[data-qa="city"]').should('be.visible').type(fakerData.city).should('have.value', fakerData.city);
        cy.get('[data-qa="zipcode"]').should('be.visible').type(fakerData.zipCode).should('have.value', fakerData.zipCode);
        cy.get('[data-qa="mobile_number"]').should('be.visible').type(fakerData.phoneNumber).should('have.value', fakerData.phoneNumber);
  
        // Verify that 'Create Account' button is visible, then click
        cy.get('[data-qa="create-account"]').should('be.visible').click();
  
        // Verify that account is successfuly created
        cy.url().should('include', 'account_created');

        // Verify 'Account Created!' message is displayed
        cy.contains('Account Created!');

        // Verify that 'Continue' button is visible, then click
        cy.get('[data-qa="continue-button"]').should('be.visible').click();

        // Verify 'Logged in as Username' message
        cy.get(':nth-child(10) > a').should('be.visible')
          .should('contain', `Logged in as ${fakerData.username}`);

        // Take Screenshot
        cy.dynamicScreenshot('Automation_Exercise_Website_TC-14_Login-Success');
  
        // Locate the 'Cart' tab, then click
        cy.get('.shop-menu > .nav > :nth-child(3) > a').should('be.visible').click({ force: true });
  
        // Verify that we are on the 'View Cart' webpage
        cy.url().should('include', '/view_cart');
  
        // Verify that the 'Proceed to Checkout' button is visible, then click
        cy.get('.col-sm-6 > .btn').should('be.visible').click();
  
        // Verify that we are on the 'Checkout' webpage
        cy.url().should('include', '/checkout');
  
        // Verify that the Address details are correct
        cy.get('#address_delivery')
        .should('be.visible')
        .then(($el) => {
          const text = $el.text();
          expect(text).to.include(fakerData.firstName);
          expect(text).to.include(fakerData.lastName);
          expect(text).to.include(fakerData.company);
          expect(text).to.include(fakerData.address);
          expect(text).to.include(fakerData.address2);
          expect(text).to.include(fakerData.city);
          expect(text).to.include(fakerData.state);
          expect(text).to.include(fakerData.zipCode);
          expect(text).to.include(fakerData.phoneNumber);
        });

        // Enter text/comment on the comment text area
        cy.get('.form-control').type('Handle Product with Care');

        // Verify that the 'Place Order' is visible, then click
        cy.get(':nth-child(7) > .btn').should('be.visible').click();
  
        // Verify that we are on the 'Payment' webpage
        cy.url().should('include', '/payment');

        // Enter payment details
        cy.get('[data-qa="name-on-card"]').should('be.visible').type(fakerData.fullName).should('have.value', fakerData.fullName);
        cy.get('[data-qa="card-number"]').should('be.visible').type(fakerData.cardNumber).should('have.value', fakerData.cardNumber);
        cy.get('[data-qa="cvc"]').should('be.visible').type(fakerData.cvc).should('have.value', fakerData.cvc);
        cy.get('[data-qa="expiry-month"]').should('be.visible').type(fakerData.expiryMonth).should('have.value', fakerData.expiryMonth);
        cy.get('[data-qa="expiry-year"]').should('be.visible').type(fakerData.expiryYear).should('have.value', fakerData.expiryYear);
        cy.get('[data-qa="pay-button"]').should('be.visible').click();

        // // Verify 'Your order has been placed successfully!' message is displayed
        // cy.get('#success_message > .alert-success').should('be.visible')
        //   .should('contain', 'Your order has been placed successfully!');
  
        // Verify that payment is successful
        cy.url().should('include', 'payment_done');

        // Take Screenshot
        cy.dynamicScreenshot('Automation_Exercise_Website_TC-14_Payment-Successful');
  
        // Locate the 'Continue' button and click
        cy.get('[data-qa="continue-button"]').should('be.visible').click({ force: true });
  
        // Locate the 'Delete Account' in the navbar, then click
        cy.get('.shop-menu > .nav > :nth-child(5) > a').should('be.visible').click({ force: true });
  
        // Verify that account is successfully deleted
        cy.url().should('include', 'delete_account');

        // Verify 'Account Created!' message is displayed
        cy.contains('Account Deleted!');

        // Take screenshot
        cy.dynamicScreenshot('Automation_Exercise_Website_TC-14_Account-Deleted');

        // Click the 'Continue' button
        cy.get('[data-qa="continue-button"]').should('be.visible')
          .click();

        // Take screenshot
        cy.dynamicScreenshot('Automation_Exercise_Website_TC-14_End');
      });
    });

    // Test Case 15: Place Order: Register before Checkout
    it('Should Place Order: Register before Checkout', () => {
      cy.readFile('cypress/fixtures/placeOrderData.json').then((fakerData) => {
        // Verify we're on the right website
        cy.url().should('include', 'automationexercise.com');
  
        // Verify that the Website Logo is visible
        cy.get('a > img').should('be.visible');
  
        // Verify that the Website Banner is visible
        cy.get('#slider').should('be.visible');
  
        // Verify that the body container for all the products are visible
        cy.get('body > :nth-child(3)').should('be.visible');

        // Verify that the 'Signup/Login' Hypertext link is visible, then click
        cy.get('.shop-menu > .nav > :nth-child(4) > a').should('be.visible').click();
  
        // Verify that we are on the Registration/Login webpage
        cy.url().should('include', 'login');
  
        // Enter registration details
        cy.get('[data-qa="signup-name"]').type(fakerData.username).should('have.value', fakerData.username);
        cy.get('[data-qa="signup-email"]').type(fakerData.email).should('have.value', fakerData.email);
  
        // Verify that the 'Signup' button is displayed, then click
        cy.get('[data-qa="signup-button"]').should('be.visible').click();
  
        // Verify that we are on the 'Signup' Webpage
        cy.url().should('include', 'signup');

        // Verifying control forms visibility and entering data
  
        // Selecting 'Title' 
        const genderSelectors = [
          ':nth-child(3) > .top > [data-qa="title"]', 
          ':nth-child(4) > .top > [data-qa="title"]'  
        ];

        // Selecting either of the two radio buttons
        cy.get(genderSelectors[Math.floor(Math.random() * genderSelectors.length)])
          .should('be.visible')
          .click(); 
        
        cy.get('[data-qa="password"]').should('be.visible').type(fakerData.password).should('have.value', fakerData.password);
        
        cy.get('[data-qa="days"] option')
          .should('be.visible')
          .then((options) => {
          const randomIndex = Math.floor(Math.random() * options.length); 
          cy.get('[data-qa="days"]').select(options[randomIndex].value)
            .should('have.value', options[randomIndex].value);
        });
        
        cy.get('[data-qa="months"] option')
          .should('be.visible')
          .then((options) => {
          const randomIndex = Math.floor(Math.random() * options.length); 
          cy.get('[data-qa="months"]').select(options[randomIndex].value)
            .should('have.value', options[randomIndex].value);
        });
        
        cy.get('[data-qa="years"] option')
          .should('be.visible')
          .then((options) => {
          const randomIndex = Math.floor(Math.random() * options.length); 
          cy.get('[data-qa="years"]').select(options[randomIndex].value)
            .should('have.value', options[randomIndex].value); 
        });
        
        cy.get('[data-qa="first_name"]').should('be.visible').type(fakerData.firstName).should('have.value', fakerData.firstName);
        cy.get('[data-qa="last_name"]').should('be.visible').type(fakerData.lastName).should('have.value', fakerData.lastName);
        cy.get('[data-qa="company"]').should('be.visible').type(fakerData.company).should('have.value', fakerData.company);
        cy.get('[data-qa="address"]').should('be.visible').type(fakerData.address).should('have.value', fakerData.address);
        cy.get('[data-qa="address2"]').should('be.visible').type(fakerData.address2).should('have.value', fakerData.address2);
        
        cy.get('[data-qa="country"]')
          .should('be.visible')
          .find('option')
          .then((options) => {
          const randomCountry = options[Math.floor(Math.random() * options.length)].value;
          cy.get('[data-qa="country"]').select(randomCountry)
            .should('have.value', randomCountry);
        });      
        
        cy.get('[data-qa="state"]').should('be.visible').type(fakerData.state).should('have.value', fakerData.state);
        cy.get('[data-qa="city"]').should('be.visible').type(fakerData.city).should('have.value', fakerData.city);
        cy.get('[data-qa="zipcode"]').should('be.visible').type(fakerData.zipCode).should('have.value', fakerData.zipCode);
        cy.get('[data-qa="mobile_number"]').should('be.visible').type(fakerData.phoneNumber).should('have.value', fakerData.phoneNumber);
  
        // Verify that 'Create Account' button is visible, then click
        cy.get('[data-qa="create-account"]').should('be.visible').click();
  
        // Verify that account is successfuly created
        cy.url().should('include', 'account_created');

        // Verify 'Account Created!' message is displayed
        cy.contains('Account Created!');

        // Verify that 'Continue' button is visible, then click
        cy.get('[data-qa="continue-button"]').should('be.visible').click();

        // Verify 'Logged in as Username' message
        cy.get(':nth-child(10) > a').should('be.visible')
          .should('contain', `Logged in as ${fakerData.username}`);

        // Take Screenshot
        cy.dynamicScreenshot('Automation_Exercise_Website_TC-15_Login-Success');

        // Verify that the product is visible
        cy.get(':nth-child(29) > .product-image-wrapper > .single-products > .productinfo').should('be.visible');
  
        // Verify that the 'Add to cart' button is visible for the product, and click
        cy.get(':nth-child(29) > .product-image-wrapper > .single-products > .productinfo > .btn')
          .should('be.visible')
          .click();
  
        // Verify that the 'Cart' message is displayed
        cy.get('.modal-content')
          .should('be.visible')
          .should('contain', 'Added!')
          .should('contain', 'Your product has been added to cart.');
  
        // Verify that the 'View Cart' hypertext link is displayed, in order to proceed to checkout
        cy.get('u').should('be.visible').click();
  
        // Verify that we are on the 'View Cart' webpage
        cy.url().should('include', '/view_cart');
  
        // Verify that the 'Proceed to Checkout' button is visible, then click
        cy.get('.col-sm-6 > .btn').should('be.visible').click();

        // Verify that we are on the 'Checkout' webpage
        cy.url().should('include', '/checkout');
  
        // Verify that the Address details are correct
        cy.get('#address_delivery')
        .should('be.visible')
        .then(($el) => {
           const text = $el.text();
           expect(text).to.include(fakerData.firstName);
           expect(text).to.include(fakerData.lastName);
           expect(text).to.include(fakerData.company);
           expect(text).to.include(fakerData.address);
           expect(text).to.include(fakerData.address2);
           expect(text).to.include(fakerData.city);
           expect(text).to.include(fakerData.state);
           expect(text).to.include(fakerData.zipCode);
           expect(text).to.include(fakerData.phoneNumber);
         });
 
        // Enter text/comment on the comment text area
        cy.get('.form-control').type('Handle Product with Care');
 
        // Verify that the 'Place Order' is visible, then click
        cy.get(':nth-child(7) > .btn').should('be.visible').click();
   
        // Verify that we are on the 'Payment' webpage
        cy.url().should('include', '/payment');
 
        // Enter payment details
        cy.get('[data-qa="name-on-card"]').should('be.visible').type(fakerData.fullName).should('have.value', fakerData.fullName);
        cy.get('[data-qa="card-number"]').should('be.visible').type(fakerData.cardNumber).should('have.value', fakerData.cardNumber);
        cy.get('[data-qa="cvc"]').should('be.visible').type(fakerData.cvc).should('have.value', fakerData.cvc);
        cy.get('[data-qa="expiry-month"]').should('be.visible').type(fakerData.expiryMonth).should('have.value', fakerData.expiryMonth);
        cy.get('[data-qa="expiry-year"]').should('be.visible').type(fakerData.expiryYear).should('have.value', fakerData.expiryYear);
        cy.get('[data-qa="pay-button"]').should('be.visible').click();
 
         // // Verify 'Your order has been placed successfully!' message is displayed
         // cy.get('#success_message > .alert-success').should('be.visible')
         //   .should('contain', 'Your order has been placed successfully!');
   
        // Verify that payment is successful
        cy.url().should('include', 'payment_done');

        // Take Screenshot
        cy.dynamicScreenshot('Automation_Exercise_Website_TC-15_Payment-Successful');
   
        // Locate the 'Continue' button and click
        cy.get('[data-qa="continue-button"]').should('be.visible').click({ force: true });
   
        // Locate the 'Delete Account' in the navbar, then click
        cy.get('.shop-menu > .nav > :nth-child(5) > a').should('be.visible').click({ force: true });
   
        // Verify that account is successfully deleted
        cy.url().should('include', 'delete_account');

        // Verify 'Account Created!' message is displayed
        cy.contains('Account Deleted!');

        // Take screenshot
        cy.dynamicScreenshot('Automation_Exercise_Website_TC-15_Account-Deleted');

        // Click the 'Continue' button
        cy.get('[data-qa="continue-button"]').should('be.visible')
          .click();
      });

      // Take screenshot
      cy.dynamicScreenshot('Automation_Exercise_Website_TC-15_End');
    });
    
    // Test Case 16: Place Order: Login before Checkout
    it('Should Place Order: Login before Checkout', () => {
      cy.readFile('cypress/fixtures/placeOrderData.json').then((fakerData) => {
        // Verify we're on the right website
        cy.url().should('include', 'automationexercise.com');
  
        // Verify that the Website Logo is visible
        cy.get('a > img').should('be.visible');
  
        // Verify that the Website Banner is visible
        cy.get('#slider').should('be.visible');
  
        // Verify that the body container for all the products are visible
        cy.get('body > :nth-child(3)').should('be.visible');

        // Verify that the 'Signup/Login' Hypertext link is visible, then click
        cy.get('.shop-menu > .nav > :nth-child(4) > a').should('be.visible').click();
  
        // Verify that we are on the Registration/Login webpage
        cy.url().should('include', 'login');

        // Enter Login Credentials
        cy.get('[data-qa="login-email"]').should('be.visible').type(fakerData.loginEmail).should('have.value', fakerData.loginEmail);
        cy.get('[data-qa="login-password"]').should('be.visible').type(fakerData.loginPass).should('have.value', fakerData.loginPass);

        // Verify that the "Login" button is visible, then click
        cy.get('[data-qa="login-button"]').should('be.visible').click()

        // Verify 'Logged in as Username' message
        cy.get(':nth-child(10) > a').should('be.visible')
          .should('contain', `Logged in as ${fakerData.loginUsername}`);
        
        // Take Screenshot
        cy.dynamicScreenshot('Automation_Exercise_Website_TC-16_Login-Success');

        // Verify that the product is visible
        cy.get(':nth-child(29) > .product-image-wrapper > .single-products > .productinfo').should('be.visible');

        // Verify that the 'Add to cart' button is visible for the product, and click
        cy.get(':nth-child(29) > .product-image-wrapper > .single-products > .productinfo > .btn')
          .should('be.visible')
          .click();

        // Verify that the 'Cart' message is displayed
        cy.get('.modal-content')
          .should('be.visible')
          .should('contain', 'Added!')
          .should('contain', 'Your product has been added to cart.');

        // Verify that the 'View Cart' hypertext link is displayed, in order to proceed to checkout
        cy.get('u').should('be.visible').click();

        // Verify that we are on the 'View Cart' webpage
        cy.url().should('include', '/view_cart');

        // Verify that the 'Proceed to Checkout' button is visible, then click
        cy.get('.col-sm-6 > .btn').should('be.visible').click();

        // Verify that we are on the 'Checkout' webpage
        cy.url().should('include', '/checkout');

        // Verify that the Address details are correct
        cy.get('#address_delivery')
        .should('be.visible')
        .then(($el) => {
           const text = $el.text();
           expect(text).to.include(fakerData.loginFirstName);
           expect(text).to.include(fakerData.loginLastName);
           expect(text).to.include(fakerData.loginCompany);
           expect(text).to.include(fakerData.loginAddress);
           expect(text).to.include(fakerData.loginAddress2);
           expect(text).to.include(fakerData.loginCity);
           expect(text).to.include(fakerData.loginState);
           expect(text).to.include(fakerData.loginZipCode);
           expect(text).to.include(fakerData.loginPhoneNumber);
         });
        // Enter text/comment on the comment text area
        cy.get('.form-control').type('Handle Product with Care');
 
        // Verify that the 'Place Order' is visible, then click
        cy.get(':nth-child(7) > .btn').should('be.visible').click();
   
        // Verify that we are on the 'Payment' webpage
        cy.url().should('include', '/payment');
 
        // Enter payment details
        cy.get('[data-qa="name-on-card"]').should('be.visible').type(fakerData.loginFullName).should('have.value', fakerData.loginFullName);
        cy.get('[data-qa="card-number"]').should('be.visible').type(fakerData.cardNumber).should('have.value', fakerData.cardNumber);
        cy.get('[data-qa="cvc"]').should('be.visible').type(fakerData.cvc).should('have.value', fakerData.cvc);
        cy.get('[data-qa="expiry-month"]').should('be.visible').type(fakerData.expiryMonth).should('have.value', fakerData.expiryMonth);
        cy.get('[data-qa="expiry-year"]').should('be.visible').type(fakerData.expiryYear).should('have.value', fakerData.expiryYear);
        cy.get('[data-qa="pay-button"]').should('be.visible').click();

        // // Verify 'Your order has been placed successfully!' message is displayed
        // cy.get('#success_message > .alert-success').should('be.visible')
        //   .should('contain', 'Your order has been placed successfully!');
   
        // Verify that payment is successful
        cy.url().should('include', 'payment_done');

        // Take Screenshot
        cy.dynamicScreenshot('Automation_Exercise_Website_TC-16_Payment-Successful');
   
        // Locate the 'Continue' button and click
        cy.get('[data-qa="continue-button"]').should('be.visible').click({ force: true });
   
        // Locate the 'Delete Account' in the navbar, then click
        cy.get('.shop-menu > .nav > :nth-child(5) > a').should('be.visible').click({ force: true });
   
        // Verify that account is successfully deleted
        cy.url().should('include', 'delete_account');

        // Verify 'Account Created!' message is displayed
        cy.contains('Account Deleted!');

        // Take screenshot
        cy.dynamicScreenshot('Automation_Exercise_Website_TC-16_Account-Deleted');

        // Click the 'Continue' button
        cy.get('[data-qa="continue-button"]').should('be.visible')
          .click();

        // Take screenshot
        cy.dynamicScreenshot('Automation_Exercise_Website_TC-16_End');
      });
    });
  });