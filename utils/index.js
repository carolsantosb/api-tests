const faker = require('faker')
const testServer = require('../utils/testServer')

async function criarUsuario () {
  const rotaUsuarios = '/usuarios'
  const usuario = {
    nome: faker.name.firstName() + ' ' + faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: `${faker.random.boolean()}`
  }
  const usuarioCriado = await testServer.post(rotaUsuarios)
    .send(usuario)
  expect(usuarioCriado.status).toBe(201)
  const usuarioDados = await testServer.get(rotaUsuarios)
  return usuarioDados.body.usuarios[0]
}

function criarProduto () {
  return {
    nome: faker.lorem.words(),
    preco: faker.random.number(),
    descricao: faker.lorem.paragraph(),
    quantidade: faker.random.number()
  }
}

module.exports = { criarUsuario, criarProduto }
