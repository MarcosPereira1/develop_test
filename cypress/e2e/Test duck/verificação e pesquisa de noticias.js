const { it } = require("mocha")

describe('TELA DE LOGIN / VERIFICAÇÃO DE USERS', () => {
    
    beforeEach(() => {
        cy.visit('https://duckduckgo.com/')
    })

    it('busca de pesquisa Bitcoin ', () => {
        cy.get('#search_form_input_homepage')
        .should('be.visible')
        .type('Bitcoin{Enter}')

        cy.get('.results')
        .should('contain', 'Bitcoin')
    })


    

})