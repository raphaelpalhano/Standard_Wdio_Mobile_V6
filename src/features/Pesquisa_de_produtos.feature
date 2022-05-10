Feature: Pesquisa de produtos

    Rule: Como cliente da Pague menos, quero buscar por produtos por meio da barra de pesquisa

    Background: Acessando a barra de pesquisa
      Given o acesso a barra de pesquisa

    @funcionalAndroid
    Scenario: Pesquisa válida de produtos
      When busca pelo produto "Fralda Pampers Confort Sec P 50 Unidades"
      Then deve exibir o produto "Fralda Pampers Confort Sec P 50 Unidades..."

    @funcionalAndroid
    Scenario: Pesquisa inválida de produtos
      When busca pelo produto "XCW"
      Then deve exibir o valor "0 produtos"

    @funcionalAndroid
    Scenario: Pesquisa por código de referencia
      When busca pelo codigo de referencia "48023"
      Then deve exibir o produto "Fralda Pampers Confort Sec P 50 Unidades..."


