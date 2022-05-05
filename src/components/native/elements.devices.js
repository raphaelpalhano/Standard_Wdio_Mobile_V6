const patternControl = require('../../utils/pattern.control');

module.exports = {
  homeAndroid: {
    UPDATEOPTION:() => $( '//android.widget.TextView[@text="Atualizar mais tarde"]'),
    LISTLOCATION:(index) => $(`//android.widget.Button[@index="${index}"]`),
    LOCATIONOPTIONS: (value) => $(`//android.widget.Button[contains(@text, "${value}")]`),
  },
  homeIos: {
    UPDATEOPTION:() => $( '//XCUIElementTypeOther[@name="Atualizar mais tarde"]'),
    LISTLOCATION:() => $('android.widget.LinearLayout'),
    // LOCATIONOPTIONS: (value) =>
    // $( `${selectorsControl.ios().predicate}type == 'XCUIElementTypeButton' && name CONTAINS '${value}'`),
    LOCATIONOPTIONS:(text) => $(`//XCUIElementTypeButton[contains(@name, "${text}")]`)
  },
  headerAndroid:{
    SEARCHBAR:() => $('~btn-pesquisa'),
    SEARCHINPUT:() => $('~input-pesquisa'),
    MAGNIFYINGLASS:() => $('~btn-pesquisar-lupa'),
    ORDINATION:(order) => $(`//android.widget.TextView[contains(@text, "${order}")]`),
    ORDENATIONONE:() => $('//android.widget.ScrollView[@index="3"]'),
  },
  headerIos:{
    SEARCHBAR:() => $('~btn-pesquisa'),
    SEARCHINPUT:() => $( '~input-pesquisa'),
    MAGNIFYINGLASS:() => $( '~btn-pesquisar-lupa'),
    ORDINATION: (order) => $(`//android.widget.TextView[contains(@text, "${order}")]`),
    ORDENATIONONE:() => $('//android.widget.ScrollView[@index="3"]').$$('android.view.ViewGroup')[2],
  },

  menuApp:{
    HOMETAB:() => $('~Home, tab, 1 of 5'),
    CATEGORIASTAB:() => $( '~Categorias, tab, 2 of 5'),
    LOJASTAB:() => $( '~Lojas, tab, 3 of 5'),
    FAVORITOSTAB:() => $( '~Favoritos, tab, 4 of 5'),
    MORETAB:() => $( '~Mais, tab, 5 of 5'),
  },
  menuAppIos:{
    HOMETAB:() => $('~Home, tab, 1 of 5'),
    CATEGORIASTAB:() => $( '~Categorias, tab, 2 of 5'),
    LOJASTAB:() => $( '~Lojas, tab, 3 of 5'),
    FAVORITOSTAB:() => $( '~Favoritos, tab, 4 of 5'),
    MORETAB:() => $( '~Mais, tab, 5 of 5'),
  },
  moreOptions:{
    ENTERBUTTON:() => $( '//android.widget.TextView[@text="Entrar"]'),
    EXITBUTTON:() => $( '//android.widget.TextView[@text="Sair"]'),
    ALERTMESSAGE:(mensagem) => $(`//android.widget.TextView[@text="${mensagem}"]`)
  },
  moreOptionsIos:{
    ENTERBUTTON:() =>  $(`~btn-entrar`),
    EXITBUTTON:() => $(`~btn-sair`),
    ALERTMESSAGE:(mensagem) =>
      $( `${patternControl.ios().predicate}type == 'XCUIElementTypeStaticText' && name CONTAINS '${mensagem}'`),
  },

  login:{
    EMAIL:() => $('~input-email'),
    PASSWORD:() => $('~input-senha'),
    CONTINUEBUTTON:() => $('~btn-continuar'),
    SIGNBUTTON:() => $('~btn-cadastrar')
  },
  loginIos:{
    EMAIL:() => $('~input-email'),
    PASSWORD:() => $('~input-senha'),
    CONTINUEBUTTON:() => $('~btn-continuar'),
    SIGNBUTTON:() => $('~btn-cadastrar')
  },
  productSearchResult:{
    DETAILS:() => $('//android.view.ViewGroup[@content-desc="btn-detalhes-produto"]'),
    PRODUCTNAME:(productText) =>
      $(`//android.widget.TextView[contains(@text, "${productText}")]`),
    RESULTTEXT: (result) => $(`//android.widget.TextView[@text="${result}"]`),
    ADDBUTTON: (product) => $(`//android.widget.TextView[contains(@text, "${product}")]
    //ancestor::android.view.ViewGroup[@content-desc="btn-detalhes-produto"]
    //descendant::android.view.ViewGroup[@content-desc="btn-add-produto"]`),
    FAVORITEICON: (product) => $(`//android.widget.TextView[contains(@text, "${product}")]
    //ancestor::android.view.ViewGroup[@content-desc="btn-detalhes-produto"]
    //descendant::android.view.ViewGroup[@NAF="true"]`),
    ALERTITEMADD: (text) => $(`//android.widget.TextView[@text="${text}"]`),
  },
  productSearchResultIos:{
    DETAILS:() => $('//XCUIElementTypeOther[@name="btn-detalhes-produto"]'),
    PRODUCTNAME:(productText) => $(`//XCUIElementTypeOther[contains(@name, "btn-detalhes-produto")]
        //descendant::XCUIElementTypeStaticText[contains(@value, "${productText}")]`), // IMPEDIMENTO: NECESSÁRIO ELEMENTO
    RESULTTEXT: (result) => $(`//XCUIElementTypeStaticText[@name="${result}"]`),
    ADDBUTTON: (product) => $(`//android.widget.TextView[contains(@text, "${product}")]
    //ancestor::android.view.ViewGroup[@content-desc="btn-detalhes-produto"]
    //descendant::android.view.ViewGroup[@content-desc="btn-add-produto"]`),
    FAVORITEICON: (product) => $(`//android.widget.TextView[contains(@text, "${product}")]
    //ancestor::android.view.ViewGroup[@content-desc="btn-detalhes-produto"]
    //descendant::android.view.ViewGroup[@NAF="true"]`),
    ALERTITEMADD: () => $('//android.widget.TextView[@text="Item adicionado"]'),
  },
  productDetails:{
    PRODUCT:(text) => $(`//android.widget.TextView[@text="${text}"]`)
  },
  productDetailsIos:{
    PRODUCT:(text) => $(`//XCUIElementTypeStaticText[contains(@name, "${text}")]`)
  },

};

// IOS PENDENTE EM RELAÇÃO AO CARD DO PRODUTO NA TELA DE RESULTADO DA BUSCA
