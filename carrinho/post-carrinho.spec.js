const testServer = require('../utils/testServer')
const { criarProduto, criarUsuario } = require('../utils/index')

const rotaLogin = '/login'
const rotaCarrinhos = '/carrinhos'

describe('Cadastrar carrinho através da rota POST', () => {
  let usuario, produto, token
  beforeEach(async () => {
    produto = await criarProduto()
    usuario = await criarUsuario()
    const login = await testServer.post(`${rotaLogin}`)
      .send(
        {
          email: usuario.email,
          password: usuario.password
        })
    token = (login.body.authorization)
    return token
  })
  it('Cadastar carrinho', async () => {
    const response = await testServer.post(rotaCarrinhos)
      .set({
        Authorization: token
      })
      .send({
        produto: [{
            idProduto: produto._id,
            quantidade: 1
      }]})
    expect(response.status).toBe(201)
    expect(response.body.message).toBe('Cadastro realizado com sucesso')
    expect(response.body._id).toBe(response.body._id)
  })
})
