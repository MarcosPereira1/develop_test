
describe('TELA DE CADASTRO', () => {

    beforeEach(() => {
      cy.visit('/')
    })

    it('Verifica mensagens de validação em cadastro', () => {
      //  cy.get('.MuiPaper-root > :nth-child(2)').click();
        //cy.contains('li', 'Entrar').click();
        cy.contains('span', 'Criar minha Conta').click();
        cy.get('input[name="name"]').type('amaral');
        cy.get('input[name="email"]').type('amaral');
        cy.contains('span', 'Continuar').click();
        cy.contains('p', 'Formato de e-mail inválido, verifique e tente novamente').should('be.visible');
        cy.get('input[name="phone"]').type('000000000');
        cy.contains('span', 'Continuar').click();
        cy.contains('p', 'Número de telefone inválido ou incompleto').should('be.visible');
    
      })

})