Feature: Resultado da pesquisa por produtos

    Rule: Como cliente da Pague menos, quero visualizar os produtos que estão relacionados a pesquisa

    Background: Pesquisando por produto
      Given que acessa a tela de login
      When efetuar login com usuário "valid"
      And o acesso a barra de pesquisa



    Scenario: Adicionar ao carrinho durante a result list
      Given When busca pelo produto "Fralda Pampers Confort Sec P 50 Unidades"
      When clicar no campo "Adicionar" do produto na result list
      Then deve exibir uma mensagem "Item adicionado"


