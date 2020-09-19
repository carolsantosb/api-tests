const faker = require('faker')
const testServer = require('../utils/testServer')

const rotaUsuarios = '/usuarios'

const usuario = {
  nome: faker.name.firstName() + ' ' + faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  administrador: `${faker.random.boolean()}`
}

describe('Editar um usuário através da rota PUT', () => {
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