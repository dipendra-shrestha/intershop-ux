/// <reference types="Cypress" />

context('Industry Service Edit Environment',()=>{
    it('Checkout Bauabnahme 100 East without transportation costs for an unregistered company user',()=>{
        cy.visit(Cypress.env('preEditBaseUrl')+"/INTERSHOP/web/WFS/ISRI-IndustrieService-Site/de_DE/-/EUR/Default-Start");

        cy.clearCookies();
        cy.get('[id="onetrust-accept-btn-handler"]').click();

        //Select 'Bauabnahme' product
        cy.get('a[href*="bauabnahme"]').eq(1).click(); 

        //Select 'Bauabnahme bis 100 m²' product
        cy.get('a[href*="bauabnahme/BA-100"]').click(); 

        // Check that the initial price is 1420 euros
        cy.get('[class*="product-event-price-value"]').should('include.text', '1.420,00 €');

        // Click "zur Bestellung" button
        cy.get('[class="btn btn-primary btn-fullwidth"]').eq(0).click({force:true});

        //Fill in the data of the building object - Inspection date is set for today
        cy.get('[data-testing-id="InspectionDate"]').click();        
        cy.get('[class="today day"]').click({force:true});
        cy.get('[id="ConstructionObject_Street"]').type("Teststrasse");
        cy.get('[id="ConstructionObject_StreetNr"]').type("25");
        cy.get('[id="ConstructionObject_PostalCode"]').type("01067");
        cy.get('[id="ConstructionObject_City"]').type("Dresden");
        cy.get('[id="ConstructionObject_Position"]').type("4.OG links");
        cy.get('[id="ConstructionObject_ObjectSize"]').type("88");
        cy.get('[id="ConstructionObject_Notes"]').type("Meine kleine Bemerkung");

        // Click "Berechnen & zum Warenkorb hinzufügen"
        cy.get('[name="Continue"]').click();

        // Check that the price didn't change after entering the PLZ because it is in eastern Germany
        cy.get('[class="col-xs-12  list-item column-price"]').within(($columnPrice) =>{
            cy.get('strong').should('have.text','1.420,00 €')
        });
        

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
        cy.get('td').eq(1).should('have.text','01067')
        })

        cy.contains('Stadt')
        .parent('tr')
        .within(() => {            
        cy.get('td').eq(1).should('have.text','Dresden')
        })

        cy.contains('Wohnfläche')
        .parent('tr')
        .within(() => {            
        cy.get('td').eq(1).should('have.text','88')
        })

        cy.contains('Ihre Bemerkungen')
        .parent('tr')
        .within(() => {            
        cy.get('td').eq(1).should('have.text','Meine kleine Bemerkung')
        })

        //Check that Fahrtkosten = 0
        cy.get('[class="col-xs-3 col-sm-2 nopadding travelexpenses-value"]').should('have.text', '0,00 €')

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
        cy.get('[id="AccountDataForm_PostalCode"]').type("12345");
        cy.get('[id="AccountDataForm_City"]').type("Munich");
        cy.get('[id="AccountDataForm_CountryCode"]').select('DE');

        //Fill in Ansprechpartner der Firma parameters
        cy.get('[id="CheckoutAddressCompanyInformationForm_Salutation"]').select(2);
        cy.get('[id="CheckoutAddressCompanyInformationForm_Title"]').select(2);
        cy.get('[name="CheckoutAddressCompanyInformationForm_FirstName"]').type("Mustermann");
        cy.get('[id="CheckoutAddressCompanyInformationForm_LastName"]').type("Muller");
        const uniqueSeed = Date.now().toString();
        let customerEmail;
        customerEmail = uniqueSeed+"@test.com"
        cy.get('[id="EmailSignupForm_Email"]').type(customerEmail);
        

        //Fill in Rechnungaddresse parameters

        cy.get('[id="InvoiceAddress_Active"]').check({force:true});
        cy.get('[id="InvoiceAddress_CompanyName"]').type("Test GmbH");
        cy.get('[id="InvoiceAddress_CompanyName2"]').type("UI testing factory");
        cy.get('[id="InvoiceAddress_Street"]').type("Test strasse");
        cy.get('[id="InvoiceAddress_StreetNr"]').type(1);
        cy.get('[id="InvoiceAddress_PostalCode"]').type(12345);
        cy.get('[id="InvoiceAddress_City"]').type("Munchen");
        cy.get('[id="AccountDataForm_CountryCode"]').select('DE');
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
