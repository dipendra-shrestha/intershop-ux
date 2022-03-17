/// <reference types="Cypress" />

context('DBS Product Search',()=>{
    it('Product search',()=>{
        cy.visit(Cypress.env('baseLiveUrl')+"/INTERSHOP/web/WFS/Datenblattservice-DE-Site/de_DE/-/EUR/Default-Start");
        cy.clearLocalStorage();

        cy.get('[id="onetrust-accept-btn-handler"]').click();

        //Get search input field
        cy.get('[class="form-control searchTerm"]').eq(1).type("PKW",{force:true});

        cy.get('[class="btn-search btn btn-primary"]').eq(1).click({force:true});

        //cy.get('[id="onetrust-accept-btn-handler"]').click();

        cy.log("--> Check 'Suchergebnisse' text availibility")
        cy.get('.col-xs-12>h1').first().should("contain","Suchergebnisse");


    });
});