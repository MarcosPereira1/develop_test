const { it } = require("mocha");

describe('login e registro de usuários Al', () => {

    beforeEach(() => {

        cy.visit('alura-fotos.herokuapp.com');

        // Primeiro caso de teste de uso
    })
    it('Verifica Mensagens de Validação', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })
    // Segundo caso de teste de uso
    it('Verifica Mensagens de email invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('amaral');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');

    })
    // Terceiro caso de teste de uso
    it('Verifica Mensagens de senha invalida', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');

    })

    it('fazer login de usuário valido', () => {
        cy.login('flavio', '123');
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('fazer login de usuário invalido', () => {
        cy.login('Marcos', '1234')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })

    // testes de dados em massa
    const usuarios = require('..//../fixtures/usuarios.json');
    usuarios.forEach(usuario => {

        it.only (`Registrar novo usuário ${usuario.userName}`, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
        })

    });


})