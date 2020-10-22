const testServer = require('../utils/testServer')
const { criarProduto, criarUsuario } = require('../utils/index')

const rotaLogin = '/login'
const rotaCarrinhos = '/carrinhos'
const rotaProdutos = '/produtos'

describe('Cadastrar carrinho através da rota POST', () => {
  let usuario, produto, token
  beforeAll(async () => {
    usuario = await criarUsuario({ administrador: 'true' })
    const login = await testServer.post(`${rotaLogin}`)
      .send(
        {
          email: usuario.email,
          password: usuario.password
        })
    token = (login.body.authorization)
    return token
  })
  beforeAll(async () => {
    produto = await criarProduto()
    const produtoCriado = await testServer.post(rotaProdutos)
      .set({
        Authorization: token
      })
      .send(produto)
    return produtoCriado
  })
  it('Cadastar carrinho', async () => {
    const response = await testServer.post(rotaCarrinhos)
      .set({
        Authorization: token
      })
      .send({
        produtoCriado: [{
          idProduto: produto._id,
          quantidade: 1
        }]
      })
    expect(response.status).toBe(201)
    expect(response.body.message).toBe('Cadastro realizado com sucesso')
    expect(response.body._id).toBe(response.body._id)
  })
})
