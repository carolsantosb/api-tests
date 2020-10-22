const testServer = require('../utils/testServer')
const { criarProduto, criarUsuario, excluirProduto } = require('../utils/index')

const rotaLogin = '/login'
const rotaProdutos = '/produtos'

describe('Cadastrar produtos através da rota POST', () => {
  let usuario, produto, token 
  beforeEach(async () => {
    produto = await criarProduto()
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
  afterEach(async () => {
    produtoExcluido = await excluirProduto()
  })

  it('Cadastar produtos', async () => {
    const response = await testServer.post(rotaProdutos)
      .set({
        Authorization: token
      })
      .send(produto)
    expect(response.status).toBe(201)
    expect(response.body.message).toBe('Cadastro realizado com sucesso')
    expect(response.body._id).toBe(response.body._id)
  })
})
