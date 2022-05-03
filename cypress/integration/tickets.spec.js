/// <reference types="Cypress" />

describe("Tickts", () => {
    beforeEach(() => cy.visit("https://bit.ly/2XSuwCW"))

    it("fill fields and reset fields", () => {
        cy.fillFields();
        cy.get('button[type=submit]').should("not.be.disabled");
        cy.get('.reset').click();
        cy.get('button[type=submit]').should("be.disabled");
    });

    it("fill fields and submit form", () => {
        cy.fillFields();
        cy.get('button[type=submit]').should("not.be.disabled");
        cy.get('button[type=submit]').click();
    });

    it("fill mandatory fields", () => {
        const mandatoryFields = {
            firstName: "Victor",
            lastName: "Hugo",
            email: "Victor.Hugo@example.com"
        };
        
        cy.fillMandatoryFields(mandatoryFields);
    })

})


