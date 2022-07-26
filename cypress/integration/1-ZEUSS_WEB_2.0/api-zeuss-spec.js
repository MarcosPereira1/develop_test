
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


})