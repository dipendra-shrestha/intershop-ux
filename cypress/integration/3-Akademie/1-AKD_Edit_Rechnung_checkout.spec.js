/// <reference types="Cypress" />
context('Akademie Edit Environment',()=>{
    it('Rechnung Checkout clickpath',()=>{

        // Loading homepage  
        cy.visit(Cypress.env('preEditBaseUrl')+Cypress.env('Akademie-DE-Site'))
        cy.clearCookies();
        cy.get('[id="onetrust-accept-btn-handler"]').click();

        //cy.get('[id="onetrust-accept-btn-handler"]').click();

        cy.log("Select 'Digital Learnplatform' tab");
        cy.get('a[href*="#cmp_20200609_personenzertifizierung"]').click();

        cy.log("Click on 'Ishikawa E-learning' product")
        cy.get('a[href*="SKU=1111526-2021&CategoryName=elearning&CatalogID=onlinetrainings"]').click();
    
        cy.log("Click on 'Jetzt Buchen' option")
        cy.get('[data-testing-id="addToCartButton"]').eq(1).click();

        cy.get('[id="EventParticipant0_Salutation"]').select(2);
        cy.get('[id="EventParticipant0_Title"]').select(2);
        cy.get('[id="EventParticipant0_FirstName"]').type("Firstname");
        cy.get('[id="EventParticipant0_LastName"]').type("Lastname");
        cy.get('[id="EventParticipant0_Email"]').type("test@test.com");

         //Click on as guest checkout option
         cy.get('[name="Continue"]').click();

         //Click on "Zur Kasse" button
        cy.get('[name="checkout"]').click();

        //Select Private customer radio button
        cy.get('[id="customer-type-private"]').check({force: true});

        //Assert private radio button is checked
        cy.get('[id="customer-type-private"]').should('be.checked');

        //Fill Private customer input
        cy.get('[id="PrivateAddress_Salutation"]').select(2);
        cy.get('[id="PrivateAddress_Title"]').select(1);
        cy.get('[id="PrivateAddress_FirstName"]').type("Muster");
        cy.get('[id="PrivateAddress_LastName"]').type("Mann");
        cy.get('[id="PrivateAddress_Street"]').type("Muster ");
        cy.get('[id="PrivateAddress_StreetNr"]').type("1");
        cy.get('[id="PrivateAddress_PostalCode"]').type("12345");
        cy.get('[id="PrivateAddress_City"]').type("Mustercity");
        cy.get('[id="PrivateAddress_Email"]').type("Mustermann@test.com");
        cy.get('[id="PrivateAddress_EmailConfirmation"]').type("Mustermann@test.com");
        cy.get('[name="PrivateAddress_PhoneMobile"]').type("123456");
        cy.get('[id="PrivateAddress_PhoneBusiness"]').type("123456");
        cy.get('[id="PrivateAddress_Hints"]').type("UI test person");

        //Assert conditions for private customer input data
        cy.get('[id="PrivateAddress_PostalCode"]').should('have.length.lessThan',3);
        
        //Click on as guest checkout option
        cy.get('[name="continue"]').click();

        // Select payment option as "Rechnung"
        cy.get('[data-testing-id="payment-Rechnung-element"]').check({force:true});

        //Click on "Fortsetzen" button
        cy.get('[class="btn btn-primary btn-fullwidth"]').click();
  
        //Accept Terms and conditions
        cy.get('[id="terms-conditions-agree"]').check({force:true});
        
        //Click "Kostenpflichtig Bestellen" button
        cy.get('[class="btn btn-primary btn-fullwidth"]').click();

    });
})