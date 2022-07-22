Cypress.Commands.add('login', (nome, senha)=> {
    cy.get('input[formcontrolname="userName"]').type(nome);
    cy.get('input[formcontrolname="password"]').type(senha);
    cy.get('button[type="submit"]').click();
})

Cypress.Commands.add('login2', (nome2, senha2)=> {
    cy.get('input[name="email"]').type(nome2);
    cy.get('input[name="password"]').type(senha2);
    cy.get('button[type="submit"]').click();
})