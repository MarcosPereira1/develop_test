
describe('Verificar todos as funções da tela saldo e resgate', () => {

    /* OBS: CERTIFIQUE-SE QUE EXISTE UM USUÁRIO ZEUSS COM EMAIL: marcos.pereira@zeussapp.com, senha: 123456 
    Ou alterar no codido para um usuário valido */
    
    beforeEach(() => {
        cy.visit('/')
    })

    it('Realizando Acesso a tela de Saldo e resgate', () => {
        cy.login2('marcospereira2024@hotmail.com', '842384');
        cy.get('.MuiPaper-root > :nth-child(2)').click();
        cy.contains('span', 'Carteira').click();
        cy.contains('li', 'Saldo e Resgate').click();
    })

    it.only('verificando elementos na tela de saldo e resgate', () => {
        cy.login2('marcospereira2024@hotmail.com', '842384');
        cy.get('.MuiPaper-root > :nth-child(2)').click();
        cy.contains('span', 'Carteira').click();
        cy.contains('li', 'Saldo e Resgate').click();
        cy.contains('Resgate seu saldo em qualquer caixa convencional nas lojas do grupo Nova Era.').should('be.visible')
        cy.contains('Crédito em Conta').should('be.visible')
        cy.contains('Crédito Pendente').should('be.visible')
        cy.contains('Você já ganhou').should('be.visible')
    })

})