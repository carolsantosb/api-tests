const testServer = require('../utils/testServer')
const { criarUsuario } = require('../utils/index')

const rotaUsuarios = '/usuarios'


describe('Editar um usuário através da rota PUT', () => {
  let usuario
  beforeEach( () => {
    usuario = criarUsuario();
  });
  
  it('Editar um usuário com sucesso', async () => {
    const response = await testServer.post(rotaUsuarios)
      .send(usuario)
    expect(response.status).toBe(201)
    const responseEdit = await testServer.put(`${rotaUsuarios}/${response.body._id}`)
      .send(usuario)
    expect(responseEdit.status).toBe(200)
    expect(responseEdit.body.message).toBe('Registro alterado com sucesso')
  })
})