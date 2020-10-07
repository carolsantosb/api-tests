const testServer = require('../utils/testServer')
const { criarUsuario } = require('../utils/index')

const rotaUsuarios = '/produtos'

describe('Realizar edição de produto através da rota PUT', () => {
  let usuario
  beforeEach(() => {
    usuario = criarUsuario({ administrador: 'true' })
  })

  it('Realizar edição de produto com sucesso', async () => {
    const response = await testServer.post(rotaUsuarios)
      .send(usuario)
    expect(response.status).toBe(201)
    // const autenticação = await testServer.post(`${rotaLogin}`)
      .send()
  })
})
