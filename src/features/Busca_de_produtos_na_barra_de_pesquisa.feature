
Feature: Pesquisar produtos pela barra de pesquisa no App Pague Menos

    Role:
    Como cliente da Pague menos
    Quero buscar por produtos na barra de pesquisa

  @androidApp
  Background: Acessando o App com usuário padrão
  Given acessa o menu mais
  When acessa a tela login
  And efetua login


  Scenario Outline: Buscando por Shampoo Pantene
  Given acessa o home
  When buscar pelo produto "<nome>"
  And acessa os detalhes do produto "<nome>"
  Then deve exibir o titulo "<referencia>"

  Examples:
  |nome                                     |referencia|
  |Shampoo Pantene Colageno 175ml           | 61516    |
  |Shampoo Pantene Restauração 175ml        | 50211    |
  |Shampoo Pantene Hidro-Cauterização 175ml | 50210    |

