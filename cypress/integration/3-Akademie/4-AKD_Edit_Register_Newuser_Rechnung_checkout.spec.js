/// <reference types="Cypress" />
context('Akademie Edit Environment',()=>{
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const testEmailAddress = `TestUI${id}@tuvsud.com`
        
        it('Register new user checkout clickpath',()=>{
            
        // Loading homepage  
        cy.visit(Cypress.env('baseEditUrl')+Cypress.env('Akademie-DE-Site'))
        cy.clearLocalStorage();
        cy.log("Used email address is: "+testEmailAddress)
            
        cy.log("Click on 'Anmeldung' link");
        cy.get('a[href*="ViewUserAccount-ShowLogin"]').click();
        
        cy.get('[class="prg-redirect btn btn-primary btn-fullwidth"]').click();
       
        cy.get('[id="RegisterUserFullEmail_EmailConfirmation"]').type(testEmailAddress);
        cy.get('[id="RegisterUserFullEmail_Login"]').type(testEmailAddress);
        cy.get('[id="RegisterUserFullEmail_Password"]').type("test12345");
        cy.get('[id="RegisterUserFullEmail_PasswordConfirmation"]').type("test12345");
        
        //Select Private customer radio button
        cy.get('[id="customer-type-private"]').check({force: true});
        
        //Fill Private customer input
        cy.get('[id="PrivateAddress_Salutation"]').select(2);
        cy.get('[id="PrivateAddress_Title"]').select(1);
        cy.get('[id="PrivateAddress_FirstName"]').type("Muster");
        cy.get('[id="PrivateAddress_LastName"]').type("Mann");
        cy.get('[id="PrivateAddress_Street"]').type("Muster ");
        cy.get('[id="PrivateAddress_StreetNr"]').type("1");
        cy.get('[id="PrivateAddress_PostalCode"]').type("12345");
        cy.get('[id="PrivateAddress_City"]').type("Mustercity");
        
        //Click on 'konto anlegen'
        cy.get('[name="CreateAccount"]').click();
        
        //Click on 'Seminar Management' tab
        cy.get('[data-testing-id="7b9b93ea-fb0b-eb11-9111-0050569a620f-link"]').click({force:true});
        
        cy.get('a[href*="SKU=1711001-2022&CategoryName=datenschutz&CatalogID=onlinetrainings"]').first().click();
        
        //Click on 'Seminar buchung' button
        cy.get('[class="btn btn-primary"]').eq(2).click({force:true});

        //Click on 'In den Warenkorb' button
        cy.get('[name^=productForm_1711001-22-0002_]').within(()=>{
            cy.get('button').first().click({force:true});
        })

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

        //cy.get('[type="submit"][name="addProduct"][title="In den Warenkorb"][data-testing-id="addToCartButton"]').click();

    });
})