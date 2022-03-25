Feature: Pesquisar produtos pela barra de pesquisa no App Pague Menos

    Role:
    Como cliente da Pague menos
    Quero buscar por produtos


  Background: Acessando o App com usuário padrão
  Given que efetua login


  Scenario Outline: Buscando por Shampoo Pantene
  Given acessa a Home
  When buscar pelo produto "<nome>"
  And acessa os detalhes do produto "<nome>"
  Then deve exibir o titulo "<referencia>"

  Examples:
  |nome                                     |referencia|
  |Shampoo Pantene Colageno 175ml           | 61516    |
  |Shampoo Pantene Restauração 175ml        | 50211    |
  |Shampoo Pantene Hidro-Cauterização 175ml | 50210    |

