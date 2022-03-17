/// <reference types="Cypress" />
context('DBS Edit Environment',()=>{
      it('Rechnung Checkout clickpath',()=>{

          // Loading homepage  
          cy.visit(Cypress.env('baseEditUrl')+Cypress.env('Datenblattservice-DE-Site'))
          cy.request
          cy.clearLocalStorage();

          //cy.get('[id="onetrust-accept-btn-handler"]').click();

      

          //Select 'Motorbeiblatt' product
          cy.get('a[href*="CategoryName=motorsupplementarysheet&CatalogID=Datenblattservice"]').click();
          
          //Click on 'Datenblatt Bestellen' button
          cy.get('[data-testing-id="addToCartButton"]').eq(1).click();

          // Providing 'Fahrzeugdaten' 
          cy.get('[id="VehicleDatasheetForm_motorsupplementarysheet_Importycountry"]').type("Deutschland");
          cy.get('[id="VehicleDatasheetForm_motorsupplementarysheet_Manufacturer"]').type("Mercedes Benz");
          cy.get('[id="VehicleDatasheetForm_motorsupplementarysheet_Castlabeling"]').type("123456789");
          cy.get('[id="VehicleDatasheetForm_motorsupplementarysheet_Number_of_cylinders"]').type("4");
          cy.get('[id="VehicleDatasheetForm_motorsupplementarysheet_Year"]').type("2019");
          cy.get('[id="VehicleDatasheetForm_motorsupplementarysheet_Engine_typ"]').type("123456789");
          cy.get('[id="VehicleDatasheetForm_motorsupplementarysheet_Remarks"]').type("UI test case");

          //Click on 'Weiter zu schritt 2' button
          cy.get('[name="updateVehicleDatasheetData"]').click();
          
          // Click on "Sichern und zum Warenkorb hinzufügen" button
          cy.get('[class="btn btn-primary pull-right"]').click();

          
          //Click on option "Zum Warenkorb" during pop up
          cy.get('a[href*="Datenblattservice-DE-Site/de_DE/-/EUR/ViewCart-View"][class="view-cart btn btn-primary"]').click();
          
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

         
          // Select payment option as "SofortUberweisung"
          cy.get('[data-testing-id="payment-PAYONE Kreditkarte-element"]').check({force:true});
          
      });
  })