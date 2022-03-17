/// <reference types="Cypress" />

describe("Check all storefront status",()=>{
    it("Gothrough all intershop shops",()=>{
        
        //Check DatenblattService-DE-Site storefront online status
        cy.request({
            url: Cypress.env('baseLiveUrl') + Cypress.env('Datenblattservice-DE-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })

        //Check DatenblattService-DE-Site storefront online status
        cy.request({
            url: Cypress.env('baseEditUrl') + Cypress.env('Datenblattservice-DE-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })    
        
        //Check Akademie-DE-Site storefront online status
        cy.request({
            url: Cypress.env('baseLiveUrl') + Cypress.env('Akademie-DE-Site'),
            followRedirect: true,
            timeout:90000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })    
        
        //Check Akademie-DE-Site storefront online status
        cy.request({
            url: Cypress.env('baseEditUrl') + Cypress.env('Akademie-DE-Site'),
            followRedirect: true,
            timeout:90000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })

        //Check Advimo-DE-Site storefront online status
        cy.request({
            url: Cypress.env('baseLiveUrl') + Cypress.env('Advimo-DE-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })
            
        //Check Advimo-DE-Site storefront online status
        cy.request({
            url: Cypress.env('baseEditUrl') + Cypress.env('Advimo-DE-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })
        //Check Aufzugspruefung-AT-Site storefront online status
        cy.request({
            url: Cypress.env('baseLiveUrl') + Cypress.env('Aufzugspruefung-AT-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })
        
        //Check Aufzugspruefung-AT-Site storefront online status
        cy.request({
            url: Cypress.env('baseEditUrl') + Cypress.env('Aufzugspruefung-AT-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })

        //Check WesternEurope-IT-Site storefront online status
        cy.request({
            url: Cypress.env('baseLiveUrl') + Cypress.env('WesternEurope-IT-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })

        //Check WesternEurope-IT-Site storefront online status
        cy.request({
            url: Cypress.env('baseEditUrl') + Cypress.env('WesternEurope-IT-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })

        //Check Akademie-BusinessAssurance-Site storefront online status
        cy.request({
            url: Cypress.env('baseLiveUrl') + Cypress.env('Akademie-BusinessAssurance-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })

        //Check Akademie-BusinessAssurance-Site storefront online status
        cy.request({
            url: Cypress.env('baseEditUrl') + Cypress.env('Akademie-BusinessAssurance-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })
    
        //Check ISRI-IndustrieService-Site storefront online status
        cy.request({
            url: Cypress.env('baseLiveUrl') + Cypress.env('ISRI-IndustrieService-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })

        //Check ISRI-IndustrieService-Site storefront online status
        cy.request({
            url: Cypress.env('baseEditUrl') + Cypress.env('ISRI-IndustrieService-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })

        //Check Datenblattservice-AutoService-DE-Site storefront online status
        cy.request({
            url: Cypress.env('baseLiveUrl') + Cypress.env('Datenblattservice-AutoService-DE-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })

        //Check Datenblattservice-AutoService-DE-Site storefront online status
        cy.request({
            url: Cypress.env('baseEditUrl') + Cypress.env('Datenblattservice-AutoService-DE-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })

        //Check Datenblattservice-TuevHanse-DE-Site storefront online status
        cy.request({
            url: Cypress.env('baseLiveUrl') + Cypress.env('Datenblattservice-TuevHanse-DE-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })

        //Check Datenblattservice-TuevHanse-DE-Site storefront online status
        cy.request({
            url: Cypress.env('baseEditUrl') + Cypress.env('Datenblattservice-TuevHanse-DE-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })
        
        //Check Asia-China-Site storefront online status
        cy.request({
            url: Cypress.env('baseLiveUrl') + Cypress.env('Asia-China-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })

        //Check Asia-China-Site storefront online status
        cy.request({
            url: Cypress.env('baseEditUrl') + Cypress.env('Asia-China-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })

        //Check Asia-India-Site storefront online status
        cy.request({
            url: Cypress.env('baseLiveUrl') + Cypress.env('Asia-India-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })

        //Check Asia-India-Site storefront online status
        cy.request({
            url: Cypress.env('baseEditUrl') + Cypress.env('Asia-India-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })

        //Check Asia-Singapore-Site storefront online status
        cy.request({
            url: Cypress.env('baseLiveUrl') + Cypress.env('Asia-Singapore-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })

        //Check Asia-Singapore-Site storefront online status
        cy.request({
            url: Cypress.env('baseEditUrl') + Cypress.env('Asia-Singapore-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })

        //Check EasternEurope-Austria-Site storefront online status
        cy.request({
            url: Cypress.env('baseLiveUrl') + Cypress.env('EasternEurope-Austria-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })

        //Check EasternEurope-Austria-Site storefront online status
        cy.request({
            url: Cypress.env('baseEditUrl') + Cypress.env('EasternEurope-Austria-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })
        
        //Check UnitedStates-US-Site storefront online status
        cy.request({
            url: Cypress.env('baseLiveUrl') + Cypress.env('UnitedStates-US-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })
        
        //Check UnitedStates-US-Site storefront online status
        cy.request({
            url: Cypress.env('baseEditUrl') + Cypress.env('UnitedStates-US-Site'),
            followRedirect: true,
            timeout:30000})
           .then((response)=>{
                expect(response.status).to.eq(200);
            })
    
    })
});

