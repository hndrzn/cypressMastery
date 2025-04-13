describe('Automation Execise Website - Checkout Functionality', () => {
    beforeEach(() => {
      cy.visit('https://automationexercise.com/');
      cy.generateCheckoutData();
    });
  
    it('Should Place Order: Register while Checkout', () => {
      cy.fixture('fakerData').then((fakerData) => {
        cy.url().should('include', 'automationexercise.com');
        cy.get('a > img').should('be.visible');
        cy.get('#slider').should('be.visible');
        cy.get('body > :nth-child(3)').should('be.visible');
  
        cy.get(':nth-child(29) > .product-image-wrapper > .single-products > .productinfo').should('be.visible');
        cy.get(':nth-child(29) > .product-image-wrapper > .single-products > .productinfo > .btn')
          .should('be.visible')
          .click();
  
        cy.get('.modal-content')
          .should('be.visible')
          .should('contain', 'Added!')
          .should('contain', 'Your product has been added to cart.');
  
        cy.get('u').should('be.visible').click();
        cy.url().should('include', '/view_cart');
  
        cy.get('.col-sm-6 > .btn').should('be.visible').click();
        cy.get('.modal-content')
          .should('be.visible')
          .should('contain', 'Register / Login account to proceed on checkout.');
  
        cy.get('.modal-body > :nth-child(2) > a > u').should('be.visible').click();
        cy.url().should('include', 'login');
  
        cy.get('[data-qa="signup-name"]').type(fakerData.username);
        cy.get('[data-qa="signup-email"]').type('angealasil@djas.com');
        cy.get('[data-qa="signup-button"]').should('be.visible').click();
        cy.url().should('include', 'signup');
  
        cy.get(':nth-child(3) > .top > [data-qa="title"]').should('be.visible').click();
        cy.get('[data-qa="password"]').should('be.visible').type(fakerData.password);
        cy.get('[data-qa="days"]').should('be.visible').select('10');
        cy.get('[data-qa="months"]').should('be.visible').select('March');
        cy.get('[data-qa="years"]').should('be.visible').select('2001');
        cy.get('[data-qa="first_name"]').should('be.visible').type(fakerData.firstName);
        cy.get('[data-qa="last_name"]').should('be.visible').type(fakerData.lastName);
        cy.get('[data-qa="company"]').should('be.visible').type('RandomCompany');
        cy.get('[data-qa="address"]').should('be.visible').type('3210 Random Muna 123');
        cy.get('[data-qa="address2"]').should('be.visible').type('N/A');
        cy.get('[data-qa="country"]').should('be.visible').select('Singapore');
        cy.get('[data-qa="state"]').should('be.visible').type('sdawdwa');
        cy.get('[data-qa="city"]').should('be.visible').type('sdawdwa');
        cy.get('[data-qa="zipcode"]').should('be.visible').type('3019');
        cy.get('[data-qa="mobile_number"]').should('be.visible').type('02131923912');
        cy.get('[data-qa="create-account"]').should('be.visible').click();
  
        cy.url().should('include', 'account_created');
        cy.get('[data-qa="continue-button"]').should('be.visible').click();
  
        cy.get('.shop-menu > .nav > :nth-child(3) > a').should('be.visible').click({ force: true });
        cy.url().should('include', '/view_cart');
        cy.get('.col-sm-6 > .btn').should('be.visible').click();
        cy.url().should('include', '/checkout');
        cy.get(':nth-child(7) > .btn').should('be.visible').click();
        cy.url().should('include', '/payment');
  
        cy.get('[data-qa="name-on-card"]').should('be.visible').type('Henderson');
        cy.get('[data-qa="card-number"]').should('be.visible').type('01010100101');
        cy.get('[data-qa="cvc"]').should('be.visible').type('200');
        cy.get('[data-qa="expiry-month"]').should('be.visible').type('12');
        cy.get('[data-qa="expiry-year"]').should('be.visible').type('2099');
        cy.get('[data-qa="pay-button"]').should('be.visible').click();
  
        cy.url().should('include', 'payment_done');
        cy.get('[data-qa="continue-button"]').should('be.visible').click({ force: true });
  
        cy.get('.shop-menu > .nav > :nth-child(5) > a').should('be.visible').click({ force: true });
        cy.url().should('include', 'delete_account');
      });
    });
  
    it('Should Place Order: Register before Checkout', () => {
      cy.fixture('fakerData').then((fakerData) => {
        cy.url().should('include', 'automationexercise.com');
        cy.get('a > img').should('be.visible');
        cy.get('#slider').should('be.visible');
        cy.get('body > :nth-child(3)').should('be.visible');
  
        cy.get('.shop-menu > .nav > :nth-child(4) > a').should('be.visible').click();
        cy.url().should('include', 'login');
  
        cy.get('[data-qa="signup-name"]').type(fakerData.username);
        cy.get('[data-qa="signup-email"]').type('angealasil@djas.com');
        cy.get('[data-qa="signup-button"]').should('be.visible').click();
        cy.url().should('include', 'signup');
  
        cy.get(':nth-child(3) > .top > [data-qa="title"]').should('be.visible').click();
        cy.get('[data-qa="password"]').should('be.visible').type(fakerData.password);
        cy.get('[data-qa="days"]').should('be.visible').select('10');
        cy.get('[data-qa="months"]').should('be.visible').select('March');
        cy.get('[data-qa="years"]').should('be.visible').select('2001');
        cy.get('[data-qa="first_name"]').should('be.visible').type(fakerData.firstName);
        cy.get('[data-qa="last_name"]').should('be.visible').type(fakerData.lastName);
        cy.get('[data-qa="company"]').should('be.visible').type('RandomCompany');
        cy.get('[data-qa="address"]').should('be.visible').type('3210 Random Muna 123');
        cy.get('[data-qa="address2"]').should('be.visible').type('N/A');
        cy.get('[data-qa="country"]').should('be.visible').select('Singapore');
        cy.get('[data-qa="state"]').should('be.visible').type('sdawdwa');
        cy.get('[data-qa="city"]').should('be.visible').type('sdawdwa');
        cy.get('[data-qa="zipcode"]').should('be.visible').type('3019');
        cy.get('[data-qa="mobile_number"]').should('be.visible').type('02131923912');
        cy.get('[data-qa="create-account"]').should('be.visible').click();
  
        cy.url().should('include', 'account_created');
        cy.get('[data-qa="continue-button"]').should('be.visible').click();
  
        cy.get(':nth-child(29) > .product-image-wrapper > .single-products > .productinfo').should('be.visible');
        cy.get(':nth-child(29) > .product-image-wrapper > .single-products > .productinfo > .btn')
          .should('be.visible')
          .click();
  
        cy.get('.modal-content')
          .should('be.visible')
          .should('contain', 'Added!')
          .should('contain', 'Your product has been added to cart.');
  
        cy.get('u').should('be.visible').click();
        cy.url().should('include', '/view_cart');
        cy.get('.col-sm-6 > .btn').should('be.visible').click();
        cy.get(':nth-child(7) > .btn').should('be.visible').click();
        cy.url().should('include', '/payment');
  
        cy.get('[data-qa="name-on-card"]').should('be.visible').type('Henderson');
        cy.get('[data-qa="card-number"]').should('be.visible').type('01010100101');
        cy.get('[data-qa="cvc"]').should('be.visible').type('200');
        cy.get('[data-qa="expiry-month"]').should('be.visible').type('12');
        cy.get('[data-qa="expiry-year"]').should('be.visible').type('2099');
        cy.get('[data-qa="pay-button"]').should('be.visible').click();
  
        cy.url().should('include', 'payment_done');
        cy.get('[data-qa="continue-button"]').should('be.visible').click({ force: true });
  
        cy.get('.shop-menu > .nav > :nth-child(5) > a').should('be.visible').click({ force: true });
        cy.url().should('include', 'delete_account');
      });
    });
});