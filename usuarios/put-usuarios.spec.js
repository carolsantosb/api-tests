const testServer = require('../utils/testServer')
const { criarUsuario } = require('../utils/index')
const usuarioFixo = require('../utils/data.json')

const rotaUsuarios = '/usuarios'

describe('Editar um usuário através da rota PUT', () => {
  let usuario
  beforeAll(async () => {
    usuario = await criarUsuario()
  })

  it('Editar um usuário com sucesso', async () => {
    const responseEdit = await testServer.put(`${rotaUsuarios}/${usuario._id}`)
      .send(usuarioFixo)
    expect(responseEdit.status).toBe(200)
    expect(responseEdit.body.message).toBe('Registro alterado com sucesso')
  })
})
