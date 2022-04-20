const faker = require('faker-br');

export class Factory {

  static getUserToLogin(loginType){
    switch (loginType) {
    case 'valid':
      return {
        email: 'paguemenosAutomacao@gmail.com',
        password: 'Asp66523'
      };

    case 'empty':
      return {
        email: 'pague',
        password: 'pague'
      };
    case 'invalid':
      return {
        email: faker.internet.email(),
        password: faker.internet.password()
      };
    default:
      return 'o parametro passado é inválido!';
    }
  }

  static getUser(type, admin = true){
    const nomeCompleto = faker.name.findName().split(' ').length ;
    const nomecontroll = nomeCompleto.length > 3 ? nomeCompleto.splice(0,1) : nomeCompleto;
    switch (type) {
    case 'valid':
      return {
        cpf: faker.br.cpf(),
        nome: nomecontroll[0],
        sobrenome: nomecontroll[1],
        email: faker.internet.email(),
        password: faker.internet.password(),
        'administrador': admin.toString(),
      };
    case 'invalid':
      return {
        'nome': 'Fulano da Silva',
        'email': 'beltrano@qa.com.br',
        'password': 'teste',
        'administrador': 'true'
      };
    case 'empty':
      return {
        'nome': '',
        'email': '',
        'password': '',
        'administrador': admin.toString()
      };
    default:
      return { notfound:'The user type was not found, please verify!' };
    }
  }
}
