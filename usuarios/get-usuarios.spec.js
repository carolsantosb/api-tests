const testServer = require('../utils/testServer')

const rotaUsuarios = '/usuarios'

describe('Listar usuário através da rota GET', () => {
  it.only('Listar usuários', async () => {
    const response = await testServer.get(rotaUsuarios)
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('quantidade')
    expect(response.body).toHaveProperty('usuarios')
    expect(response.body.usuarios[0]).toHaveProperty('nome')
    expect(response.body.usuarios[0]).toHaveProperty('email')
    expect(response.body.usuarios[0]).toHaveProperty('password')
    expect(response.body.usuarios[0]).toHaveProperty('administrador')
    expect(response.body.usuarios[0]).toHaveProperty('_id')
  })
})
