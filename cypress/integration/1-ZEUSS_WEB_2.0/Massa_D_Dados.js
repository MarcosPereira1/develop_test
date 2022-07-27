
describe('TESTE DE DADOS EM MASSA', () => {

  /* TO TAKE THIS TEST, MAKE SURE YOU ARE USING AN ACCOUNT THAT DOES NOT HAVE A REGISTERED PASSWORD 
  This test automatically sends 50 password creation notifications on an exposed web role  */

  beforeEach(() => {
    cy.visit('https://web.zeussapp.com.br/')
  })

  it.only('Push 01..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 02..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 03..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 04..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 05..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 06..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 07..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 08..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 09..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 10..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 11..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 12..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 13..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 14..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 15..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 16..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 17..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 18..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 19..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 20..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 21..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 22..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 23..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 24..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 25..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 26..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 27..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 28..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 29..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 30..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 31..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 32..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 33..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 34..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 35..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 36..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 37..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 38..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 39..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 40..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 41..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 42..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 43..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 44..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 45..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 45..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 46..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 47..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 48..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 49..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

  it('Push 50..', () => {
    cy.get('.MuiPaper-root > :nth-child(2)').click();
    cy.contains('li', 'Entrar').click();
    cy.get('input[name="email"]').type('marcos.pereira@zeussapp.com.br');
    cy.get('input[name="password"]').type('123456');
    cy.contains('span', 'Entrar').click();
    cy.contains('span', 'Enviar email').click();
    cy.contains('span', 'Entendi').click();

  })

})