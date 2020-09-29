const testServer = require('../utils/testServer')
const { criarProduto, criarUsuario } = require('../utils/index')

const rotaLogin = '/login'
const rotaUsuarios = '/usuarios'
const rotaProdutos = '/produtos'

describe('Cadastrar produtos através da rota POST', () => {
  let usuario, produto, token
  beforeEach( async () => {
    produto = criarProduto();
    usuario = criarUsuario({ administrador: 'true' });
    await testServer.post(rotaUsuarios).send(usuario)
    const login = await testServer.post(`${rotaLogin}`)
      .send(
        {
        email: usuario.email,
        password: usuario.password
        }) 
     return token = (login.body.authorization)
    });
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