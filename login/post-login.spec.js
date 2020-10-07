const testServer = require('../utils/testServer')
const { criarUsuario } = require('../utils/index')

const rotaLogin = '/login'

describe('Realizar o login através da rota POST', () => {
  let usuario
  beforeAll(async () => {
    usuario = await criarUsuario({ administrador: 'true' })
  })

  it('Realizar login com sucesso', async () => {
    const login = await testServer.post(`${rotaLogin}`)
      .send(
        {
          email: usuario.email,
          password: usuario.password
        })
    expect(login.status).toBe(200)
    expect(login.body.message).toBe('Login realizado com sucesso')
    expect(login.body.authorization).toBe(login.body.authorization)
  })
})
