

describe('login e registro de usuários Zeuss WEB', () => {

  beforeEach(() => {
    cy.visit('https://web.zeussapp.com.br/')
  })


  it('Verifica mensagens de validação em cadastro', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.contains('span', 'Criar minha Conta').click();
    cy.get('input[name="name"]').type('amaral');
    cy.get('input[name="email"]').type('amaral');
    cy.contains('span', 'Continuar').click();
    cy.contains('p', 'Formato de e-mail inválido, verifique e tente novamente').should('be.visible');
    cy.get('input[name="phone"]').type('000000000');
    cy.contains('span', 'Continuar').click();
    cy.contains('p', 'Número de telefone inválido ou incompleto').should('be.visible');

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