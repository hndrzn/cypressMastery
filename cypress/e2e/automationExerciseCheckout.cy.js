describe('Automation Execise Website - Checkout Functionality', () => {
    beforeEach(() => {
     cy.visit('https://automationexercise.com/')
     cy.generateCheckoutData();
    });
    it('Should Place Order: Register while Checkout', () => {
     cy.fixture('fakerData').then((fakerData) => {
     // Verify we're on the right website
     cy.url().should('include', 'automationexercise.com')
     // Verify that the Website Logo is visible
     cy.get('a > img').should('be.visible')
     // Verify that the Website Banner is visible
     cy.get('#slider').should('be.visible')
     // Verify that the body container for all the products are visible
     cy.get('body > :nth-child(3)').should('be.visible')
     

     // Verify that the product is visible
     cy.get(':nth-child(29) > .product-image-wrapper > .single-products > .productinfo').should('be.visible')
     // Verify that the 'Add to cart' button is visible for the product, and click
     cy.get(':nth-child(29) > .product-image-wrapper > .single-products > .productinfo > .btn')
    .should('be.visible')  
    .click();  
    
    // Verify that the 'Cart' message is displayed
    cy.get('.modal-content').should('be.visible')
    .should('contain', 'Added!')
    .should('contain', 'Your product has been added to cart.')
    
    // Verify that the 'View Cart' hypertext link is displayed, in order to proceed to chekout
    cy.get('u')
    .should('be.visible')
    .click()
    
    // Verify that we are on the 'View Cart' webpage
    cy.url().should('include', '/view_cart')

    // Verify that the 'Proceed to Checkout' button is visible, then click
    cy.get('.col-sm-6 > .btn')
    .should('be.visible')
    .click()

    // Verify that the 'Checkout' message is displayed
    cy.get('.modal-content').should('be.visible')
    .should('contain', 'Register / Login account to proceed on checkout.')

    // Verify that the 'Register/Login' Hypertext link is visible, then click
    cy.get('.modal-body > :nth-child(2) > a > u')
    .should('be.visible')
    .click()

    // Verify that we are on the Registration/Login webpage
    cy.url().should('include', 'login')

    cy.get('[data-qa="signup-name"]').type(fakerData.username)
    cy.get('[data-qa="signup-email"]').type('angealasil@djas.com')

    // Verify that the 'Signup' button is displayed, then click
    cy.get('[data-qa="signup-button"]')
    .should('be.visible')
    .click()

    // Verify that we are on the 'Signup' Webpage
    cy.url().should('include', 'signup')

    // Verifying control forms functionality and entering data

    cy.get(':nth-child(3) > .top > [data-qa="title"]')
    .should('be.visible')
    .click()

    cy.get('[data-qa="password"]')
    .should('be.visible')
    .type(fakerData.password)

    cy.get('[data-qa="days"]')
    .should('be.visible')
    .select('10')

    cy.get('[data-qa="months"]')
    .should('be.visible')
    .select('March')

    cy.get('[data-qa="years"]')
    .should('be.visible')
    .select('2001')

    cy.get('[data-qa="first_name"]')
    .should('be.visible')
    .type(fakerData.firstName)

    cy.get('[data-qa="last_name"]')
    .should('be.visible')
    .type(fakerData.lastName)

    cy.get('[data-qa="company"]')
    .should('be.visible')
    .type('RandomCompany')

    cy.get('[data-qa="address"]')
    .should('be.visible')
    .type('3210 Random Muna 123')

    cy.get('[data-qa="address2"]')
    .should('be.visible')
    .type('N/A')

    cy.get('[data-qa="country"]')
    .should('be.visible')
    .select('Singapore')

    cy.get('[data-qa="state"]')
    .should('be.visible')
    .type('sdawdwa')

    cy.get('[data-qa="city"]')
    .should('be.visible')
    .type('sdawdwa')

    cy.get('[data-qa="zipcode"]')
    .should('be.visible')
    .type('3019')

    cy.get('[data-qa="mobile_number"]')
    .should('be.visible')
    .type('02131923912')
    
    // Verify that 'Create Account' button is visible, then click
    cy.get('[data-qa="create-account"]')
    .should('be.visible')
    .click()


    // Verify that account is successfuly created
    cy.url().should('include', 'account_created')
    
    // Verify that 'Continue' button is visible, then click
    cy.get('[data-qa="continue-button"]')
    .should('be.visible')
    .click()

    // Locate the 'Cart' tab, then click
    cy.get('.shop-menu > .nav > :nth-child(3) > a')
    .should('be.visible')
    .click({force: true})

    // Verify that we are on the 'View Cart' webpage
    cy.url().should('include', '/view_cart')

    // Verify that the 'Proceed to Checkout' button is visible, then click
    cy.get('.col-sm-6 > .btn')
    .should('be.visible')
    .click()

    // Verify that we are on the 'Checkout' webpage
    cy.url().should('include', '/checkout')

    // Verify that the 'Place Order' is visible, then click
    cy.get(':nth-child(7) > .btn')
    .should('be.visible')
    .click()

    // Verify that we are on the 'Payment' webpage
    cy.url().should('include', '/payment')

    cy.get('[data-qa="name-on-card"]')
    .should('be.visible')
    .type('Henderson')

    cy.get('[data-qa="card-number"]')
    .should('be.visible')
    .type('01010100101')

    cy.get('[data-qa="cvc"]')
    .should('be.visible')
    .type('200')

    cy.get('[data-qa="expiry-month"]')
    .should('be.visible')
    .type('12')

    cy.get('[data-qa="expiry-year"]')
    .should('be.visible')
    .type('2099')

    cy.get('[data-qa="pay-button"]')
    .should('be.visible')
    .click()

    // Verify that payment is successful
    cy.url().should('include', 'payment_done')

    // Locate the 'Continue' button and click
    cy.get('[data-qa="continue-button"]')
    .should('be.visible')
    .click({force: true})

    // Locate the 'Delete Account' in the navbar, then click
    cy.get('.shop-menu > .nav > :nth-child(5) > a')
    .should('be.visible')
    .click({force: true})

    // Verify that account is successfully deleted
    cy.url().should('include', 'delete_account')  

     });
    });

    it('Should Place Order: Register before Checkout', () => {

    cy.fixture('fakerData').then((fakerData) => {
         // Verify we're on the right website
         cy.url().should('include', 'automationexercise.com')
         // Verify that the Website Logo is visible
         cy.get('a > img').should('be.visible')
         // Verify that the Website Banner is visible
         cy.get('#slider').should('be.visible')
         // Verify that the body container for all the products are visible
         cy.get('body > :nth-child(3)').should('be.visible')

        // Locate the Signup/Login on the navbar, then click
        cy.get('.shop-menu > .nav > :nth-child(4) > a')
        .should('be.visible')
        .click()

                    
        // Verify that we are on the Registration/Login webpage
        cy.url().should('include', 'login')

        cy.get('[data-qa="signup-name"]').type(fakerData.username)
        cy.get('[data-qa="signup-email"]').type('angealasil@djas.com')

        // Verify that the 'Signup' button is displayed, then click
        cy.get('[data-qa="signup-button"]')
        .should('be.visible')
        .click()

        // Verify that we are on the 'Signup' Webpage
        cy.url().should('include', 'signup')

        // Verifying control forms functionality and entering data

        cy.get(':nth-child(3) > .top > [data-qa="title"]')
        .should('be.visible')
        .click()

        cy.get('[data-qa="password"]')
        .should('be.visible')
        .type(fakerData.password)

        cy.get('[data-qa="days"]')
        .should('be.visible')
        .select('10')

        cy.get('[data-qa="months"]')
        .should('be.visible')
        .select('March')

        cy.get('[data-qa="years"]')
        .should('be.visible')
        .select('2001')

        cy.get('[data-qa="first_name"]')
        .should('be.visible')
        .type(fakerData.firstName)

        cy.get('[data-qa="last_name"]')
        .should('be.visible')
        .type(fakerData.lastName)

        cy.get('[data-qa="company"]')
        .should('be.visible')
        .type('RandomCompany')

        cy.get('[data-qa="address"]')
        .should('be.visible')
        .type('3210 Random Muna 123')

        cy.get('[data-qa="address2"]')
        .should('be.visible')
        .type('N/A')

        cy.get('[data-qa="country"]')
        .should('be.visible')
        .select('Singapore')

        cy.get('[data-qa="state"]')
        .should('be.visible')
        .type('sdawdwa')

        cy.get('[data-qa="city"]')
        .should('be.visible')
        .type('sdawdwa')

        cy.get('[data-qa="zipcode"]')
        .should('be.visible')
        .type('3019')

        cy.get('[data-qa="mobile_number"]')
        .should('be.visible')
        .type('02131923912')
    
        // Verify that 'Create Account' button is visible, then click
        cy.get('[data-qa="create-account"]')
        .should('be.visible')
        .click()

        // Verify that account is successfuly created
        cy.url().should('include', 'account_created')
    
        // Verify that 'Continue' button is visible, then click
        cy.get('[data-qa="continue-button"]')
        .should('be.visible')
        .click()

        // Verify that the product is visible
        cy.get(':nth-child(29) > .product-image-wrapper > .single-products > .productinfo').should('be.visible')
        // Verify that the 'Add to cart' button is visible for the product, and click
        cy.get(':nth-child(29) > .product-image-wrapper > .single-products > .productinfo > .btn')
        .should('be.visible')  
        .click();  
    
        // Verify that the 'Cart' message is displayed
        cy.get('.modal-content').should('be.visible')
        .should('contain', 'Added!')
        .should('contain', 'Your product has been added to cart.')
    
        // Verify that the 'View Cart' hypertext link is displayed, in order to proceed to chekout
        cy.get('u')
        .should('be.visible')
        .click()
    
        // Verify that we are on the 'View Cart' webpage
        cy.url().should('include', '/view_cart')

        // Verify that the 'Proceed to Checkout' button is visible, then click
        cy.get('.col-sm-6 > .btn')
        .should('be.visible')
        .click()

         // Verify that the 'Place Order' is visible, then click
        cy.get(':nth-child(7) > .btn')
        .should('be.visible')
        .click()

        // Verify that we are on the 'Payment' webpage
        cy.url().should('include', '/payment')

        cy.get('[data-qa="name-on-card"]')
        .should('be.visible')
        .type('Henderson')

        cy.get('[data-qa="card-number"]')
        .should('be.visible')
        .type('01010100101')

        cy.get('[data-qa="cvc"]')
        .should('be.visible')
        .type('200')

        cy.get('[data-qa="expiry-month"]')
        .should('be.visible')
        .type('12')

        cy.get('[data-qa="expiry-year"]')
        .should('be.visible')
        .type('2099')

        cy.get('[data-qa="pay-button"]')
        .should('be.visible')
        .click()

        // Verify that payment is successful
        cy.url().should('include', 'payment_done')

        // Locate the 'Continue' button and click
        cy.get('[data-qa="continue-button"]')
        .should('be.visible')
        .click({force: true})

        // Locate the 'Delete Account' in the navbar, then click
        cy.get('.shop-menu > .nav > :nth-child(5) > a')
        .should('be.visible')
        .click({force: true})

        // Verify that account is successfully deleted
        cy.url().should('include', 'delete_account')
    })

    });

    // it('Should Place Order: Login while Checkout', () => {

    // });


});