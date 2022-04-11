Feature: Pesquisar produtos pela barra de pesquisa no App Pague Menos

    Rule: Como cliente da Pague menos, quero buscar por produtos na barra de pesquisa

    Background: Acessando o menu Mais
    Given o acesso ao menu Mais


  @regressivoAndroid @regressivoIos
  Scenario Outline: Buscando por produto com usuario valido
  Given que efetua login
  When buscar pelo produto "<nome>"
  And acessa os detalhes do produto
  Then deve exibir o titulo "<nome>"

  Examples:
  |nome                                     |
  |Shampoo Pantene Colageno 175ml           |



  @regressivoAndroid @regressivoIos
  Scenario Outline: Buscando por produto com usuario deslogado
  Given que não esteja logado
  When buscar pelo produto "<nome>"
  And acessa os detalhes do produto
  Then deve exibir o titulo "<referencia>"

  Examples:
  |nome                                     |referencia            |
  |Suplevit Mulher Com 30 Cápsulas          |Referência: 59280    |

