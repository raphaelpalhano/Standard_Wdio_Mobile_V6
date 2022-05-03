Feature: Resultado da pesquisa por produtos

    Rule: Como cliente da Pague menos, quero visualizar os produtos que estão relacionados a pesquisa

    Background: Pesquisando por produto
      Given o acesso ao menu Mais
      When que acessa a tela de login
      * efetuar login com usuário "valid"
      * acessa o Home
      * o acesso a barra de pesquisa


    @funcionalAndroid
    Scenario: Adicionar ao carrinho durante a result list
      Given busca pelo produto "Fralda Pampers Confort Sec P 50 Unidades"
      When clicar no botao Adicionar do produto "Fralda Pampers Confort Sec P 50 Unidades" na result list
      Then deve exibir uma mensagem "Item adicionado"

