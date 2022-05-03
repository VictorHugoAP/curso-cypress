/// <reference types="Cypress" />


Cypress.Commands.add('fillFields', () => {
    const firstName = "Victor";
    const lastName = "Teste";
    const fullName = `${firstName} ${lastName}`;

    cy.get('#first-name').type(firstName);
    cy.get('#last-name').type(lastName);
    cy.get('#email').type("Victorteste@apiki.com");
    cy.get('#requests').type("Vegan");
    cy.get('#signature').type(fullName);
    cy.get('#social-media').check();
    cy.get('#friend').check();
    cy.get('#vip').check();
    cy.get('#agree').check();
    cy.get("#ticket-quantity").select('3');
    cy.checkFields(fullName);
});

Cypress.Commands.add('checkFields', (fullName) => {
    cy.get('#email').clear();
    cy.get('#email').type('emailteste-gmail.com');
    cy.get('#email.invalid').should('exist');

    cy.get('#email').clear();
    
    cy.get('#email').type('email.t@gmail.com');
    cy.get('#email.invalid').should('not.exist');

    cy.get(".agreement p").should("contain", `I, ${fullName}, wish to buy 3 VIP tickets.`);
})

Cypress.Commands.add('fillMandatoryFields', (mandatoryFields) => {
    cy.get('#first-name').type(mandatoryFields.firstName);
    cy.get('#last-name').type(mandatoryFields.lastName);
    cy.get('#email').type(mandatoryFields.email);
    cy.get('#agree').check();

    cy.get('button[type=submit]').should("not.be.disabled");

    cy.get('#agree').uncheck();

    cy.get('button[type=submit]').should("be.disabled");
});