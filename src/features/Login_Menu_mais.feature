Feature: Login do Super app

    Rule: Como cliente da Pague menos, quero acessar o App por meio de uma tela de Login

    Background: Acessando o menu Mais
    Given o acesso ao menu Mais


   @regressivoAndroid @regressivoIos
  Scenario: Login Menu mais com usuário válido
    Given que acessa a tela de login
    When efetuar login com usuário "valid"
    Then deve exibir a mensagem "Login efetuado com sucesso"


  @regressivoAndroid
  Scenario: Realizar o login com email inválido
    Given que acessa a tela de login
    When efetuar login com usuário "empty"
    Then deve exibir a mensagem "Por favor, informe um e-mail válido."

  @regressivoAndroid
  Scenario:  Realizar o login com conta normal com usuário inválido
      Given que acessa a tela de login
      When efetuar login com usuário "invalid"
      Then deve exibir a mensagem "E-mail ou senha incorretos."
