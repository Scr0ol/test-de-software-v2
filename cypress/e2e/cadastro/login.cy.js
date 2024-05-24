/// <reference types="Cypress"/>

describe('Test login', () => {
    it('deve realizar o login com sucesso', () => {
        cy.visit("cadastro/cadastro.html ")
        cy.get('#nome').type("ramon")
        cy.get('#senha').type("willa1")
        cy.get('#cpf').type("00000000000")
        cy.get('#email').type("ramon.amaral@gmail.com")
        cy.get('#data').type("01/10/1999")
        cy.get('#cadastrar').click()
        cy.get('#cpf').type("00000000000")
        cy.get('#senha').type("willa1")
        cy.get('#login').click()
        

    });
});