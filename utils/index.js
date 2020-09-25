const faker = require('faker')

function criarUsuario() {
    return   {
        nome: faker.name.firstName() + ' ' + faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        administrador: `${faker.random.boolean()}`
      }
    
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