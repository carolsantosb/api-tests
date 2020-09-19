const testServer = require('../utils/testServer')

const rotaCarrinhos = '/carrinhos'

describe('Listar carrinhos através da rota GET', () => {
    it('Listar carrinhos', async () => {    
        const response = await testServer.get(rotaCarrinhos)
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('quantidade');
        expect(response.body).toHaveProperty('carrinhos');
        expect(response.body.carrinhos[0]).toHaveProperty('produtos');
        expect(response.body.carrinhos[0].produtos[0]).toHaveProperty('idProduto');
        expect(response.body.carrinhos[0].produtos[0]).toHaveProperty('quantidade');
        expect(response.body.carrinhos[0].produtos[0]).toHaveProperty('precoUnitario');
      })

})