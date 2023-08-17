Feature: Login Aop

    Rule: How client I want access app

    Background: Menu
    Given o acesso ao menu Mais


  @funcionaliOS
  Scenario: Login Menu mais com usuário válido
    Given que acessa a tela de login
    When efetuar login com usuário "valid"
    Then deve exibir a mensagem "Login efetuado com sucesso"


  @funcionaliOS
  Scenario: Login Menu mais com senha e email inválidos
    Given que acessa a tela de login
    When efetuar login com usuário "empty"
    Then deve exibir a mensagem "Por favor, informe um e-mail válido."

  @funcionaliOS
  Scenario:  Login Menu mais com senha inválida
      Given que acessa a tela de login
      When efetuar login com usuário "invalid"
      Then deve exibir a mensagem "E-mail ou senha incorretos."
