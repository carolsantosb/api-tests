const testServer = require('../utils/testServer')
const { criarUsuario } = require('../utils/index')

const rotaUsuarios = '/usuarios'

describe('Excluir um usuário através da rota DELETE', () => {
  let usuario
  beforeEach(async () => {
    usuario = await criarUsuario()
  })
  it('Excluir um usuário com sucesso', async () => {
    const responseDelete = await testServer.delete(`${rotaUsuarios}/${usuario._id}`)
      .send(usuario)
    expect(responseDelete.status).toBe(200)
    expect(responseDelete.body.message).toBe('Registro excluído com sucesso')
  })

  it('Nenhum usuário excluído', async () => {
    const response = await testServer.delete(`${rotaUsuarios}/nada`)
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('Nenhum registro excluído')
  })
})
