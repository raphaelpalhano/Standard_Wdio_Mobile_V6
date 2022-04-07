Feature: Pesquisar produtos pela barra de pesquisa no App Pague Menos

    Rule: Como cliente da Pague menos, quero buscar por produtos na barra de pesquisa

    Background: Acessando o menu Mais
    Given o acesso ao menu Mais
    And que efetua login



  Scenario Outline: Compra de um unico produto
  When buscar pelo produto pela barra "<nome>"
  And acessa os detalhes do produto
  And adiciona o produto no carrinho
  And acessa a cesta
  And segue para forma de entrega
  And seleciona a entrega economica
  And configura o cartao
  When concluir a compra
  Then deve exibir a mensagem de compra com sucesso

  Examples:
  |nome                                     |referencia            |
  |Shampoo Pantene Colageno 175ml           | Referência: 61516    |
  |Shampoo Pantene Restauração 175ml        | Referência: 50211    |

