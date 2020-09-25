const testServer = require('../utils/testServer')
const { criarUsuario } = require('../utils/index')

const rotaLogin = '/login'
const rotaUsuarios = '/usuarios'


describe('Realizar o login através da rota POST', () => {
  let usuario
  beforeEach( () => {
    usuario = criarUsuario({ administrador: 'true' });
  });
  
  it('Realizar login com sucesso', async () => {
    const response = await testServer.post(rotaUsuarios)
      .send(usuario)
    expect(response.status).toBe(201)
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