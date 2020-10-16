const faker = require('faker')
const testServer = require('../utils/testServer')

async function criarUsuario() {
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

async function excluirUsuario() {
  const rotaUsuarios = '/usuarios'
  const usuarioExcluido = await testServer.delete(`${rotaUsuarios}/${usuario._id}`)
      .send(usuario)
    expect(usuarioExcluido.status).toBe(200)
}

function criarProduto (){
  return {
    nome: faker.lorem.words(),
    preco: faker.random.number(),
    descricao: faker.lorem.paragraph(),
    quantidade: faker.random.number()
  }
}

async function excluirProduto() {
  const rotaProdutos = '/produtos'
  const produtoExcluido = await testServer.delete(`${rotaProdutos}/${produto._id}`)
      .send(produto)
    expect(produtoExcluido.status).toBe(200)
}

module.exports = { criarUsuario, criarProduto, excluirUsuario, excluirProduto }
