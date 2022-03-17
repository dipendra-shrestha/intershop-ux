/// <reference types="Cypress" />

context('Industry Service Edit Environment',()=>{
    it('Bauabnahme 70 Checkout without transportation costs',()=>{
        cy.visit(Cypress.env('preEditBaseUrl')+"/INTERSHOP/web/WFS/ISRI-IndustrieService-Site/de_DE/-/EUR/Default-Start");

        cy.clearCookies();
        cy.get('[id="onetrust-accept-btn-handler"]').click();

        //Select 'Bauabnahme' product
        cy.get('a[href*="bauabnahme"]').eq(1).click(); 

        //Select 'Bauabnahme unter 70 m²' product
        cy.get('a[href*="bauabnahme/BA-70"]').click(); 

        // Click "zur Bestellung" button
        cy.get('[class="btn btn-primary btn-fullwidth"]').eq(0).click({force:true});

        //Fill in the data of the building object - Inspection date is set for today
        cy.get('[data-testing-id="InspectionDate"]').click();        
        cy.get('[class="today day"]').click({force:true});
        cy.get('[id="ConstructionObject_Street"]').type("Teststrasse");
        cy.get('[id="ConstructionObject_StreetNr"]').type("25",{force:true});
        cy.get('[id="ConstructionObject_PostalCode"]').type("81547",{force:true});
        cy.get('[id="ConstructionObject_City"]').type("München",{force:true});
        cy.get('[id="ConstructionObject_Position"]').type("4.OG links",{force:true});
        cy.get('[id="ConstructionObject_ObjectSize"]').type("67",{force:true});
        cy.get('[id="ConstructionObject_Notes"]').type("Meine kleine Bemerkung",{force:true});

        // Click "Berechnen & zum Warenkorb hinzufügen"
        cy.get('[name="Continue"]').click({force:true});

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
        cy.get('td').eq(1).should('have.text','81547')
        })

        cy.contains('Stadt')
        .parent('tr')
        .within(() => {            
        cy.get('td').eq(1).should('have.text','München')
        })

        cy.contains('Wohnfläche')
        .parent('tr')
        .within(() => {            
        cy.get('td').eq(1).should('have.text','67')
        })

        cy.contains('Ihre Bemerkungen')
        .parent('tr')
        .within(() => {            
        cy.get('td').eq(1).should('have.text','Meine kleine Bemerkung')
        })

        //Check that Fahrtkosten = 0
        cy.get('[class="col-xs-3 col-sm-2 nopadding travelexpenses-value"]').should('have.text', '0,00 €')

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
        cy.get('[id="PrivateAddress_Street"]').type("Musterstrasse");
        cy.get('[id="PrivateAddress_StreetNr"]').type("1");
        cy.get('[id="PrivateAddress_PostalCode"]').type("12345");
        cy.get('[id="PrivateAddress_City"]').type("Mustercity");
        const uniqueSeed = Date.now().toString();
        let customerEmail;
        customerEmail = uniqueSeed+"@test.com"
        cy.get('[id="PrivateAddress_Email"]').type(customerEmail);
        cy.get('[name="PrivateAddress_PhoneMobile"]').type("123456");
        cy.get('[id="PrivateAddress_PhoneBusiness"]').type("1234567");
        cy.get('[id="PrivateAddress_Hints"]').type("UI test person");

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
