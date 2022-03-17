/// <reference types="Cypress" />

context('Lift Service Edit Environment',()=>{
    it('Person lift Checkout 5 stops as unregistered company user',()=>{
        cy.visit(Cypress.env('intEditBaseUrl')+"/INTERSHOP/web/WFS/EasternEurope-AustriaLI-Site/de_AT/-/EUR/ViewHomepage-Start");

        // Setting file path to upload
        const filepath='/upload/template.pdf'

        //cy.clearCookies();
        //cy.get('[id="onetrust-accept-btn-handler"]').click();

        //Select 'Bauabnahme' product
        cy.get('a[href*="CatalogID=LiftInspection"]').eq(1).click(); 

        //Select 'Personen- und lastenaufzug' product
        cy.get('[data-tracking-product-short-sku="S41-705-10-RI0104-01-0001"]').click();
       
        cy.get('[name="VariationAttribute_Stops"]').eq(1).select("11-15", {force:true});

        cy.get('[class="current-price "]').should('include.text', '372,00 €')
        
        //cy.get('a[role="button"]').eq(1).click(); 
        
        
        // Click "zur Bestellung" button
        cy.get('[class="btn btn-primary btn-fullwidth"]').eq(0).click({force:true});

        //Fill in the data of the building object - Inspection date is set for today
        
        cy.get('[id="ConstructionObject_Street"]').type("Teststrasse");
        cy.get('[id="ConstructionObject_StreetNr"]').type("25");
        cy.get('[id="ConstructionObject_PostalCode"]').type("6900");
        cy.get('[id="ConstructionObject_City"]').type("Bregenz");
        cy.get('[id="ConstructionObject_ContactPerson"]').type("Olaf Scholz");
        cy.get('[id="ConstructionObject_PhoneHome"]').type("0170499555");
        cy.get('[id="ConstructionObject_Email"]').type("olaf@byom.de");
        cy.get('[data-testing-id="DesiredDateFrom"]').click();        
        cy.get('[class="day"]').eq(0).click({force:true});
        cy.get('[data-testing-id="DesiredDateTo"]').click();        
        cy.get('[class="day"]').eq(0).click({force:true});
        cy.get('[data-testing-id="DesiredTimeFrom"]').click();
        cy.get('[class="ui-corner-all"]').eq(0).click({force:true});  
        

        

        // Click "Berechnen & zum Warenkorb hinzufügen"
        cy.get('[name="Continue"]').click();


        //Attachment of pdf file
        cy.get('[id="LiftInspectionExistingCertificates_PreviousAuditCompanyCertificate_form"]').attachFile(filepath);

        // Click "Bestellen und Warenkorb aktualiseren" button
        cy.get('[id="submitFormButton"]').click();
        

        // Click on "Objekdaten zeigen" to show all the data provided before
        cy.get('[class="text-link arrow-toggle collapsed"]').click()

        //Check that the data in the table is as provided before
        cy.contains('Hausnummer')
        .parent('tr')
        .within(() => {            
        cy.get('td').eq(1).should('have.text', '25')
        })

        cy.contains('Straße')
        .parent('tr')
        .within(() => {            
        cy.get('td').eq(1).should('have.text', 'Teststrasse')
        })

        cy.contains('PLZ')
        .parent('tr')
        .within(() => {            
        cy.get('td').eq(1).should('have.text','6900')
        })

        cy.contains('Stadt')
        .parent('tr')
        .within(() => {            
        cy.get('td').eq(1).should('have.text','Bregenz')
        })

        cy.contains('Ansprechperson')
        .parent('tr')
        .within(() => {            
        cy.get('td').eq(1).should('have.text','Olaf Scholz')
        })

        cy.contains('Hersteller')
        .parent('tr')
        .within(() => {            
        cy.get('td').eq(1).should('have.text','AUFZUEGE FRIEDL')
        })

        //Check that Fahrtkosten = 0
        cy.get('[class="col-xs-3 col-sm-2 nopadding travelexpenses-value"]').should('have.text', '503,45 €')

        cy.get('[name="checkout"]').click();

         //Select company customer radio button
         cy.get('[id="customer-type-smb"]').check({force: true});

         //Assert comany radio button is checked
        cy.get('[id="customer-type-smb"]').should('be.checked');
        
        //Fill in Corporate customer parameters
        cy.get('[id="AccountDataForm_CompanyName"]').type("Test GmbH");
        cy.get('[id="AccountDataForm_CompanyName2"]').type("UI testing factory");
        cy.get('[id="AccountDataForm_Street"]').type("Teststrasse");
        cy.get('[id="AccountDataForm_StreetNr"]').type(1);
        cy.get('[id="AccountDataForm_PostalCode"]').type("1031");
        cy.get('[id="AccountDataForm_City"]').type("Wien");
        cy.get('[id="AccountDataForm_TaxationID"]').type("2128506");

        //Fill in Ansprechpartner der Firma parameters
        cy.get('[id="CheckoutAddressCompanyInformationForm_Salutation"]').select(2);
        cy.get('[id="CheckoutAddressCompanyInformationForm_Title"]').select(2);
        cy.get('[name="CheckoutAddressCompanyInformationForm_FirstName"]').type("Mustermann");
        cy.get('[id="CheckoutAddressCompanyInformationForm_LastName"]').type("Muller");
        const uniqueSeed = Date.now().toString();
        let customerEmail;
        customerEmail = uniqueSeed+"@test.com"
        cy.get('[id="EmailSignupForm_Email"]').type(customerEmail);

        //Click on as guest checkout option
        cy.get('[name="continue"]').click();

        // Select payment option as "Rechnung"
        cy.get('[data-testing-id="payment-Rechnung-element"]').check({force:true});

        //Click on "Fortsetzen" button
        cy.get('[class="btn btn-primary btn-fullwidth"]').click();
  
        //Accept Terms and conditions
        cy.get('[id="terms-conditions-agree_ins_apartment"]').check({force:true});
        
        //Click "Kostenpflichtig Bestellen" button
        cy.get('[class="btn btn-primary btn-fullwidth"]').click();


       // Check the Thank you message at  the end of the checkout
        cy.get('[class="cart-header"]').within(($cartHeader) =>{
            cy.get('span').eq(1).should('have.text','Vielen Dank für Ihre Bestellung!')
        });
        
        // Check that the customer email is shown at the Thank you page correctly
        cy.get('[class="section"]').within(($section) =>{
            cy.get('strong').should('include.text', customerEmail);
        })


        

    });
});
