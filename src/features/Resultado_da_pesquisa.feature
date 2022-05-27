Feature: Resultado da pesquisa por produtos

    Rule: Como cliente da Pague menos, quero visualizar os produtos que estão relacionados a pesquisa

    Background: Pesquisando por produto
      Given o acesso ao menu Mais
      When que acessa a tela de login
      * efetuar login com usuário "valid"
      * acessa o Home
      * o acesso a barra de pesquisa

    @funcionalAndroid
    Scenario: Adicionar o produto ao carrinho durante a result list
      Given busca pelo produto "Fralda Pampers Confort Sec P 50 Unidades"
      When clicar no botao Adicionar do produto "Fralda Pampers Confort Sec P 50 Unidades" na result list
      Then deve exibir uma mensagem "Item adicionado"


    @funcionalAndroid
    Scenario: Adicionar ao favorito durante a result list
      Given busca pelo produto "Máscara Para Tratamento Pantene Bambu"
      When clicar no icone favoritar do produto "Máscara Para Tratamento Pantene Bambu" na result list
      Then deve exibir uma mensagem "Item removido dos favoritos"


    Scenario: Filtrar por marca específica
      Given busca pelo produto "Água Termal"
      When clicar no icone favoritar do produto "Máscara Para Tratamento Pantene Bambu" na result list
      Then deve exibir uma mensagem "Item removido dos favoritos"


    Scenario: Filtrar por marca da Pague Menos
      Given busca pelo produto "Soro Fisiológico Pague Menos"
      When acessar os filtros

      And clicar no icone favoritar do produto "Soro Fisiológico Pague Menos" na result list
      Then deve exibir uma mensagem "Item removido dos favoritos"


