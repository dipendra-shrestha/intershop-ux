/// <reference types="Cypress" />
context('Akademie Live Environment',()=>{
        const userEmailAddress='dipendra.shrestha@tuvsud.com'
        const userEmailPassword='pass12345'
    it('Signin user checkout clickpath',()=>{

        // Loading homepage  
        cy.visit(Cypress.env('baseLiveUrl')+Cypress.env('Akademie-DE-Site'))
        cy.clearLocalStorage();
        
        cy.get('[id="onetrust-accept-btn-handler"]').click();

        cy.log("Click on 'Anmeldung' link");
        cy.get('a[href*="akademie/login"]').click();
        
        cy.log("Provide existing user credential");
        cy.get('[id="ShopLoginForm_Login"]').type(userEmailAddress);
        cy.get('[id="ShopLoginForm_Password"]').type(userEmailPassword);

        cy.log("Click on 'Anmelden' button");
        cy.get('[value="Login"]').click();

        //Click on 'Seminar Management' tab
        cy.get('[data-testing-id="7b9b93ea-fb0b-eb11-9111-0050569a620f-link"]').click({force:true});

        cy.get('a[href*="datenschutzausbildung/1711001"]').first().click();
        
        //Click on 'Seminar buchung' button
        cy.get('[class="btn btn-primary"]').eq(2).click({force:true});

        //Click on 'In den Warenkorb' button
        cy.get('[data-testing-id="addToCartButton"]').eq(1).click({force:true});

        /* cy.get('[name^=productForm_1711001-22-0008]').within(()=>{
            cy.get('button').first().click();
        }) */

        //Fill participant name
        cy.get('[id="EventParticipant0_Salutation"]').select(2);
        cy.get('[id="EventParticipant0_Title"]').select(2);
        cy.get('[id="EventParticipant0_FirstName"]').type("Firstname");
        cy.get('[id="EventParticipant0_LastName"]').type("Lastname");
        //cy.get('[id="EventParticipant0_Email"]').type("test@test.com");

         //Click on as guest checkout option
         cy.get('[name="Continue"]').click();

         //Click on "Zur Kasse" button
        cy.get('[name="checkout"]').click();

        //Click on "Fortsetzen" button
        cy.get('[class="btn btn-primary btn-fullwidth"]').click();
  
        //Accept Terms and conditions
        cy.get('[id="terms-conditions-agree"]').check({force:true});
        
        //Click "Kostenpflichtig Bestellen" button
        cy.get('[class="btn btn-primary btn-fullwidth"]').click();
        
    });
})