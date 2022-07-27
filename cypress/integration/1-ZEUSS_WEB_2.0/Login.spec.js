
describe('TELA DE LOGIN / VERIFICAÇÃO DE USER VALIDO', () => {

    /* OBS: CERTIFIQUE-SE QUE EXISTE UM USUÁRIO ZEUSS COM EMAIL: marcos.pereira@zeussapp.com, senha: 123456 
    Ou alterar no codido para um usuário valido */
    
    beforeEach(() => {
        cy.visit('https://web.zeussapp.com.br/')
    })

    it('fazer login de usuário valido', () => {
        cy.get('.MuiPaper-root > :nth-child(2)').click();
        cy.contains('li', 'Entrar').click();
        cy.login2('marcos.pereira@zeussapp.com.br', '123456');

    })

    it('fazer login de usuário invalido', () => {
        cy.get('.MuiPaper-root > :nth-child(2)').click();
        cy.contains('li', 'Entrar').click();
        cy.login2('marcos.pereira@ze', '1234');

    })

})