/// <reference types="Cypress" />

context('Industry Service Edit Environment',()=>{
    it('Checkout Bauabnahme 100 change adress and check the price',()=>{
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
        
        // Click on the pencil to change the data
        cy.get('[class="glyphicon glyphicon-pencil"]').click({force:true})

        // Change the PLZ and city
        cy.get('[id="ConstructionObject_PostalCode"]').clear().type("81547");
        cy.get('[id="ConstructionObject_City"]').clear().type("München");

        // Click "Berechnen & zum Warenkorb hinzufügen"
        cy.get('[name="Continue"]').click();

        // Check that the price changed after changing the PLZ because it is in western Germany now
        cy.get('[class="col-xs-12  list-item column-price"]').within(($columnPrice) =>{
            cy.get('strong').should('have.text','1.485,00 €')
        });


        // Click on "Objekdaten zeigen" to show all the data provided before
        cy.get('[class="text-link arrow-toggle collapsed"]').click()

       
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

        

        cy.get('[class="text-center security-privacy-info"]').within(($securityPrivacyInfo) =>{
            cy.get('a[href*="datenschutzhinweis-store"]').should('be.visible');
        });

        


        

    });
});
