const testServer = require('../utils/testServer')
const { criarUsuario, excluirUsuario } = require('../utils/index')
const usuarioFixo = require('../utils/data.json')

const rotaUsuarios = '/usuarios'

describe('Editar um usuário através da rota PUT', () => {
  let usuario, usuarioExcluido
  beforeAll(async () => {
    usuario = await criarUsuario()
  })
  afterAll(async () => {
    usuarioExcluido = await excluirUsuario()
  })

  it('Editar um usuário com sucesso', async () => {
    const responseEdit = await testServer.put(`${rotaUsuarios}/${usuario._id}`)
      .send(usuarioFixo)
    expect(responseEdit.status).toBe(200)
    expect(responseEdit.body.message).toBe('Registro alterado com sucesso')
  })
})
