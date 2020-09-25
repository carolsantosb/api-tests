const faker = require('faker')
const testServer = require('../utils/testServer')

const rotaUsuarios = '/usuarios'

const usuario = {
  nome: faker.name.firstName() + ' ' + faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  administrador: `${faker.random.boolean()}`
}

describe('Excluir um usuário através da rota DELETE', () => {
  it('Excluir um usuário com sucesso', async () => {
    const response = await testServer.post(rotaUsuarios)
      .send(usuario)
    expect(response.status).toBe(201)
    const responseDelete = await testServer.delete(`${rotaUsuarios}/${response.body._id}`)
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