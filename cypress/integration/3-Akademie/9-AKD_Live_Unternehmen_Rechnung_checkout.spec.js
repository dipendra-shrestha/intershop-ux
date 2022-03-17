/// <reference types="Cypress" />
context('Akademie Live Environment',()=>{
    const emailAddress='test@test.com';
    
    it('Rechnung Checkout clickpath',()=>{

        // Loading homepage  
        cy.visit(Cypress.env('baseLiveUrl')+Cypress.env('Akademie-DE-Site'))
        cy.clearLocalStorage();

        //cy.get('[id="onetrust-accept-btn-handler"]').click();

        cy.log("Select 'Digital Learnplatform' tab");
        cy.get('a[href*="#cmp_20200609_personenzertifizierung"]').click();

        cy.get('[id="onetrust-accept-btn-handler"]').click();

        cy.log("Click on 'Ishikawa E-learning' product")
        cy.get('[data-dynamic-block-product-sku="1111526-2021"]').click();
    
        cy.log("Click on 'Jetzt Buchen' option")
        cy.get('[data-testing-id="addToCartButton"]').eq(1).click();

        //cy.get('[id="onetrust-accept-btn-handler"]').click();

        cy.get('[id="EventParticipant0_Salutation"]').select(2);
        cy.get('[id="EventParticipant0_Title"]').select(2);
        cy.get('[id="EventParticipant0_FirstName"]').type("Firstname");
        cy.get('[id="EventParticipant0_LastName"]').type("Lastname");
        cy.get('[id="EventParticipant0_Email"]').type("test@test.com");

         //Click on as guest checkout option
         cy.get('[name="Continue"]').click();

         //Click on "Zur Kasse" button
        cy.get('[name="checkout"]').click();

         //Select 'unternehmen' customer radio button
         cy.get('[id="customer-type-smb"]').check({force: true});

         //Assert 'unternehmen' radio button is checked
        cy.get('[id="customer-type-smb"]').should('be.checked');
        
        //Fill Corporate customer parameters
        cy.get('[id="AccountDataForm_CompanyName"]').type("Test GmbH");
        cy.get('[id="AccountDataForm_CompanyName2"]').type("UI testing factory");
        cy.get('[id="AccountDataForm_Street"]').type("Teststrasse");
        cy.get('[id="AccountDataForm_StreetNr"]').type(1);
        cy.get('[id="AccountDataForm_PostalCode"]').type("12345");
        cy.get('[id="AccountDataForm_City"]').type("Munich");
        cy.get('[id="AccountDataForm_CountryCode"]').select('DE');

        //Fill Ansprechpartner der firma parameters
        cy.get('[id="CheckoutAddressCompanyInformationForm_Salutation"]').select(2);
        cy.get('[id="CheckoutAddressCompanyInformationForm_Title"]').select(2);
        cy.get('[name="CheckoutAddressCompanyInformationForm_FirstName"]').type("Mustermann");
        cy.get('[id="CheckoutAddressCompanyInformationForm_LastName"]').type("Muller");
        cy.get('[id="EmailSignupForm_Email"]').type(emailAddress);
        cy.get('[id="EmailSignupForm_EmailConfirmation"]').type(emailAddress);

        //Fill Rechnung Address parameters

        cy.get('[id="InvoiceAddress_Active"]').check({force:true});
        cy.get('[id="InvoiceAddress_CompanyName"]').type("Test GmbH");
        cy.get('[id="InvoiceAddress_CompanyName2"]').type("UI testing factory");
        cy.get('[id="InvoiceAddress_Street"]').type("Test strasse");
        cy.get('[id="InvoiceAddress_StreetNr"]').type(1);
        cy.get('[id="InvoiceAddress_PostalCode"]').type(12345);
        cy.get('[id="InvoiceAddress_City"]').type("Munchen");
        cy.get('[id="AccountDataForm_CountryCode"]').select('DE');
        
        
        
        //Assert conditions for private customer input data
        cy.get('[id="PrivateAddress_PostalCode"]').should('have.length.lessThan',6);
        
        //Click on as guest checkout option
        cy.get('[name="continue"]').click();

        // Select payment option as "Rechnung"
        cy.get('[data-testing-id="payment-Rechnung-element"]').check({force:true});

        //cy.get('[id="onetrust-accept-btn-handler"]').click();

        //Click on "Fortsetzen" button
        cy.get('[class="btn btn-primary btn-fullwidth"]').click();
  
        //Accept Terms and conditions
        cy.get('[id="terms-conditions-agree"]').check({force:true});

        //cy.get('[id="onetrust-accept-btn-handler"]').click();
        
        //Click "Kostenpflichtig Bestellen" button
        cy.get('[class="btn btn-primary btn-fullwidth"]').click();

        //cy.get('[id="onetrust-accept-btn-handler"]').click();

    });
})