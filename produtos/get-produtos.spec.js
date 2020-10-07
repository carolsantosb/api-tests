const testServer = require('../utils/testServer')

const rotaProdutos = '/produtos'

describe('Listar produtos através da rota GET', () => {
  it('Listar produtos', async () => {
    const response = await testServer.get(rotaProdutos)
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('quantidade')
    expect(response.body).toHaveProperty('produtos')
    expect(response.body.produtos[0]).toHaveProperty('nome')
    expect(response.body.produtos[0]).toHaveProperty('preco')
    expect(response.body.produtos[0]).toHaveProperty('descricao')
    expect(response.body.produtos[0]).toHaveProperty('quantidade')
    expect(response.body.produtos[0]).toHaveProperty('_id')
  })
})
