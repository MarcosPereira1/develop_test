
describe('Teste de API', () => {

    it('API Zeusscidades/getall', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.dev2.zeussapp.com.br/zeusscidades/getall'
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
          //  expect(res.body[0]).to.have.property('description')
         //  expect(res.body[0].description).to.be.equal('sucess')
        }
        
        )
    })

    it.only('Fazer login do Marcos', () => {
        cy.request({
            method: 'POST',
            url: 'https://web.zeussapp.com.br/login',
            body: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')
            expect(res.body.id).to.be.equal(1)
            expect(res.body).to.have.property('user')
            expect(res.body.user).to.be.equal('marcos.pereira@zeussapp.com.br')
        }
        
        )
    })


})