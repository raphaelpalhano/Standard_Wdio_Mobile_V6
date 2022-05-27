const patternControl = require('../../utils/pattern.control');

module.exports = {
  homeAndroid: {
    UPDATEOPTION:() => $( '//android.widget.TextView[@text="Atualizar mais tarde"]'),
    CANCELOPTION:(index) => $(`//android.widget.Button[@index="${index}"]`),
    LOCATIONOPTIONS: (value) => $(`//android.widget.Button[contains(@text, "${value}")]`),
  },
  homeiOS: {
    UPDATEOPTION:() => $( '//XCUIElementTypeOther[@name="Atualizar mais tarde"]'),
    CANCELOPTION:() => $( `${patternControl.ios().predicate}type == 'XCUIElementTypeButton' && name CONTAINS 'Cancel'`),
    LOCATIONOPTIONS:(text) => $(`//XCUIElementTypeButton[contains(@name, "${text}")]`)
  },
  headerAndroid:{
    SEARCHBAR:() => $('~btn-pesquisa'),
    SEARCHINPUT:() => $('~input-pesquisa'),
    MAGNIFYINGLASS:() => $('~btn-pesquisar-lupa'),
    ORDINATION:(order) => $(`//android.widget.TextView[contains(@text, "${order}")]`),
    ORDENATIONONE:() => $('//android.widget.ScrollView[@index="3"]'),
  },
  headeriOS:{
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
  menuAppiOS:{
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
  moreOptionsiOS:{
    ENTERBUTTON:() =>  $( `${patternControl.ios().predicate}type == 'XCUIElementTypeOther' && name CONTAINS 'Entrar'`),
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
  loginiOS:{
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
    //descendant::android.view.ViewGroup[@index="0"]`),
    ALERTITEMADD: (text) => $(`//android.widget.TextView[@text="${text}"]`),
    BRANDS: (brand) => $(`//android.widget.TextView[contains(@text, "${brand}")]
    //ancestor::android.view.ViewGroup[@index="4"]
    //descendant::android.widget.CheckBox`),
    FILTER: () => $(`//android.widget.TextView[contains(@text, "Filtros")]`)
  },
  productSearchResultiOS:{
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
    BRANDS: (brand) => $(`//android.widget.TextView[contains(@text, "${brand}")]
    //ancestor::android.view.ViewGroup[@index="4"]
    //descendant::android.widget.CheckBox`),
    FILTER: () => $(`//android.widget.TextView[contains(@text, "Filtros")]`)
  },
  productDetails:{
    PRODUCT:(text) => $(`//android.widget.TextView[@text="${text}"]`)
  },
  productDetailsiOS:{
    PRODUCT:(text) => $(`//XCUIElementTypeStaticText[contains(@name, "${text}")]`)
  },

};

// IOS PENDENTE EM RELAÇÃO AO CARD DO PRODUTO NA TELA DE RESULTADO DA BUSCA
