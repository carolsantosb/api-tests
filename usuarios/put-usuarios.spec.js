const testServer = require('../utils/testServer')
const { criarUsuario } = require('../utils/index')

const rotaUsuarios = '/usuarios'


describe('Editar um usuário através da rota PUT', () => {
  let usuario
  beforeEach( async () => {
    usuario = await criarUsuario();
  });
  
  it('Editar um usuário com sucesso', async () => {
    console.log(usuario)
    const responseEdit = await testServer.put(`${rotaUsuarios}/${usuario.body._id}`)
      .send(usuario)
    expect(responseEdit.status).toBe(200)
    expect(responseEdit.body.message).toBe('Registro alterado com sucesso')
  })
})