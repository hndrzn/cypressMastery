describe('Data Tables Website Testing' , () => {

    beforeEach(() => {
        cy.visit('https://datatables.net/');
        cy.url().should('include', 'datatables.net');
    });
    it('Should successfully access the website',() => {
        
    });

    it('Should successfully display the website',() => {
        cy.contains('DataTables');
    });

    it('Should successfully display the table with column headers',() => {
        // Verify that the table exists and is displayed
        cy.get('.hero-callout')
          .should('exist')
          .should('be.visible');

        // Verify that the 'Name' column header is displayed
        cy.get('.dt-ordering-asc > .dt-column-header > .dt-column-title')
          .should('exist')
          .should('be.visible')
          .should('have.text', 'Name');

        // Verify that the 'Position' column header is displayed
        cy.get('[data-dt-column="1"] > .dt-column-header > .dt-column-title')
          .should('exist')
          .should('be.visible')
          .should('have.text', 'Position');

        // Verify that the 'Office' column header is displayed
        cy.get('[data-dt-column="2"] > .dt-column-header > .dt-column-title')
          .should('exist')
          .should('be.visible')
          .should('have.text', 'Office');
        
        // Verify that the 'Age' column header is displayed
        cy.get('[data-dt-column="3"] > .dt-column-header > .dt-column-title')
          .should('exist')
          .should('be.visible')
          .should('have.text', 'Age');

        // Verify that the 'Start date' column header is displayed
        cy.get('.dt-right > .dt-column-header > .dt-column-title')
          .should('exist')
          .should('be.visible')
          .should('have.text', 'Start date');
        
        // Verify that the 'Salary' column header is displayed
        // cy.get('[data-dt-column="5"] > .dt-column-header > .dt-column-title')
        //   .should('exist')
        //   .should('be.visible')
        //   .should('have.text', 'Salary');
    });

    it('Should successfully display 10 rows of data when "10 entries per page" is selected',() => {
        // Verify that the sorting dropdown list box exists in the table container
        cy.get('.hero-callout').should('exist').should('be.visible')
          .find('#dt-length-0');

        // Select value "10" in the dropdown list box
        cy.get('#dt-length-0').select("10").should('have.value', "10");
        
        // Verify that 10 rows are displayed in the table
        cy.get('#example tbody tr').should('have.length', 10);        

        cy.get('#example_info').should('have.text', "Showing 1 to 10 of 57 entries");
    });


    it('Should successfully display 10 rows per table page when "10 entries per page" is selected',() => {
      // Verify that the sorting dropdown list box exists in the table container
      cy.get('.hero-callout').should('exist').should('be.visible')
        .find('#dt-length-0');

      // Select value "10" in the dropdown list box
      cy.get('#dt-length-0').select("10").should('have.value', "10");
      
      // Verify that 10 rows are displayed in the table
      cy.get('#example tbody tr').should('have.length', 10);        

      cy.get('#example_info').should('have.text', "Showing 1 to 10 of 57 entries");

      // Click on the second table page
      cy.get('[data-dt-idx="1"]').should('exist').should('be.visible').click();

      // Verify that 10 rows are displayed in the table page
      cy.get('#example tbody tr').should('have.length', 10);        

      cy.get('#example_info').should('have.text', "Showing 11 to 20 of 57 entries");

      // Click on the third table page
      cy.get('[data-dt-idx="2"]').should('exist').should('be.visible').click();

      // Verify that 10 rows are displayed in the table page
      cy.get('#example tbody tr').should('have.length', 10);        

      cy.get('#example_info').should('have.text', "Showing 21 to 30 of 57 entries");

      // Click on the fourth table page
      cy.get('[data-dt-idx="3"]').should('exist').should('be.visible').click();

      // Verify that 10 rows are displayed in the table page
      cy.get('#example tbody tr').should('have.length', 10);        

      cy.get('#example_info').should('have.text', "Showing 31 to 40 of 57 entries");

      // Click on the fifth table page
      cy.get('[data-dt-idx="4"]').should('exist').should('be.visible').click();

      // Verify that 10 rows are displayed in the table page
      cy.get('#example tbody tr').should('have.length', 10);        

      cy.get('#example_info').should('have.text', "Showing 41 to 50 of 57 entries");

      // Click on the last table page
      cy.get('[data-dt-idx="5"]').should('exist').should('be.visible').click();

      // Verify that 10 rows are displayed in the table page
      cy.get('#example tbody tr').should('have.length', 7);        

      cy.get('#example_info').should('have.text', "Showing 51 to 57 of 57 entries");
    });

    it('Should successfully display 25 rows of data when "25 entries per page" is selected',() => {
        // Verify that the sorting dropdown list box exists in the table container
        cy.get('.hero-callout').should('exist').should('be.visible')
          .find('#dt-length-0');

        // Select value "25" in the dropdown list box
        cy.get('#dt-length-0').select("25").should('have.value', "25");
        
        // Verify that 25 rows are displayed in the table
        cy.get('#example tbody tr').should('have.length', 25);        

        cy.get('#example_info').should('have.text', "Showing 1 to 25 of 57 entries");
    });

    it('Should successfully display 25 rows per table page when "25 entries per page" is selected',() => {
      // Verify that the sorting dropdown list box exists in the table container
      cy.get('.hero-callout').should('exist').should('be.visible')
        .find('#dt-length-0');

      // Select value "25" in the dropdown list box
      cy.get('#dt-length-0').select("25").should('have.value', "25");
      
      // Verify that 25 rows are displayed in the table
      cy.get('#example tbody tr').should('have.length', 25);        

      cy.get('#example_info').should('have.text', "Showing 1 to 25 of 57 entries");

      // Click on the second table page
      cy.get('[data-dt-idx="1"]').should('exist').should('be.visible').click();

      // Verify that 10 rows are displayed in the table page
      cy.get('#example tbody tr').should('have.length', 25);        

      cy.get('#example_info').should('have.text', "Showing 26 to 50 of 57 entries");

      // Click on the last table page
      cy.get('[data-dt-idx="2"]').should('exist').should('be.visible').click();

      // Verify that 10 rows are displayed in the table page
      cy.get('#example tbody tr').should('have.length', 7);        

      cy.get('#example_info').should('have.text', "Showing 51 to 57 of 57 entries");
    });

    it('Should successfully display 50 rows of data when "50 entries per page" is selected',() => {
        // Verify that the sorting dropdown list box exists in the table container
        cy.get('.hero-callout').should('exist').should('be.visible')
          .find('#dt-length-0');

        // Select value "50" in the dropdown list box
        cy.get('#dt-length-0').select("50").should('have.value', "50");
        
        // Verify that 50 rows are displayed in the table
        cy.get('#example tbody tr').should('have.length', 50);        

        cy.get('#example_info').should('have.text', "Showing 1 to 50 of 57 entries");
    });

    it('Should successfully display 50 rows per table page when "50 entries per page" is selected',() => {
      // Verify that the sorting dropdown list box exists in the table container
      cy.get('.hero-callout').should('exist').should('be.visible')
        .find('#dt-length-0');

      // Select value "50" in the dropdown list box
      cy.get('#dt-length-0').select("50").should('have.value', "50");
      
      // Verify that 50 rows are displayed in the table
      cy.get('#example tbody tr').should('have.length', 50);        

      cy.get('#example_info').should('have.text', "Showing 1 to 50 of 57 entries");

      // Click on the second/last table page
      cy.get('[data-dt-idx="1"]').should('exist').should('be.visible').click();

      // Verify that 10 rows are displayed in the table page
      cy.get('#example tbody tr').should('have.length', 7);        

      cy.get('#example_info').should('have.text', "Showing 51 to 57 of 57 entries");
    });

    it('Should successfully display all rows of data when "100 entries per page" is selected',() => {
        // Verify that the sorting dropdown list box exists in the table container
        cy.get('.hero-callout').should('exist').should('be.visible')
          .find('#dt-length-0');

        // Select value "100" in the dropdown list box
        cy.get('#dt-length-0').select("100").should('have.value', "100");
        
        // Verify that 57 rows are displayed in the table
        cy.get('#example tbody tr').should('have.length', 57);        

        cy.get('#example_info').should('have.text', "Showing 1 to 57 of 57 entries");
    });
    
    it('Should successfully return search result when searching by first name',() => {
      // First name starting with 'A'
      cy.get('#dt-search-0').should('exist').should('be.visible').clear()
        .type('Airi').should('have.value', 'Airi');
      
      cy.get('.dtr-control').should('have.text', 'Airi Satou');

      // First name starting with 'B'
      cy.get('#dt-search-0').should('exist').should('be.visible').clear()
        .type('Brenden').should('have.value', 'Brenden');
      
      cy.get('.dtr-control').should('have.text', 'Brenden Wagner');

      // First name starting with 'C'
      cy.get('#dt-search-0').should('exist').should('be.visible').clear()
        .type('Cara').should('have.value', 'Cara');
      
      cy.get('.dtr-control').should('have.text', 'Cara Stevens');

      // First name starting with 'D'
      cy.get('#dt-search-0').should('exist').should('be.visible').clear()
        .type('Donna').should('have.value', 'Donna');
      
      cy.get('.dtr-control').should('have.text', 'Donna Snider');

      // First name starting with 'S'
      cy.get('#dt-search-0').should('exist').should('be.visible').clear()
        .type('Sakura').should('have.value', 'Sakura');
      
      cy.get('.dtr-control').should('have.text', 'Sakura Yamamoto');
    });

    it('Should successfully return search result when searching by surname',() => {
      // Surname starting with 'A'
      cy.get('#dt-search-0').should('exist').should('be.visible').clear()
        .type('Acosta').should('have.value', 'Acosta');
      
      cy.get('.dtr-control').should('have.text', 'Jennifer Acosta');

      // Surname starting with 'G'
      cy.get('#dt-search-0').should('exist').should('be.visible').clear()
        .type('Green').should('have.value', 'Green');
      
      cy.get('.dtr-control').should('have.text', 'Fiona Green');

      // Surname starting with 'M'
      cy.get('#dt-search-0').should('exist').should('be.visible').clear()
        .type('Mccray').should('have.value', 'Mccray');
      
      cy.get('.dtr-control').should('have.text', 'Martena Mccray');

      // First name starting with 'S'
      cy.get('#dt-search-0').should('exist').should('be.visible').clear()
        .type('Serrano').should('have.value', 'Serrano');
      
      cy.get('.dtr-control').should('have.text', 'Zorita Serrano');

      // Surname starting with 'W'
      cy.get('#dt-search-0').should('exist').should('be.visible').clear()
        .type('Williamson').should('have.value', 'Williamson');
      
      cy.get('.dtr-control').should('have.text', 'Brielle Williamson');
    });


});