const faker = require('faker')
const testServer = require('../utils/testServer')

async function criarUsuario() {
    const rotaUsuarios = '/usuarios'
    let usuario = {
        nome: faker.name.firstName() + ' ' + faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        administrador: `${faker.random.boolean()}`
      }
    const usuarioCriado = await testServer.post(rotaUsuarios)
      .send(usuario)
  //expect(usuarioCriado.status).toBe(201)
    return usuarioCriado
  }

function criarProduto() {
  return {
    nome: faker.lorem.words(),
    preco: faker.random.number(),
    descricao: faker.lorem.paragraph(),
    quantidade: faker.random.number()
  }
}


  module.exports = { criarUsuario, criarProduto} 