const selectorsControl =  require('../../utils/componentControl');

module.exports = {
  celsiusToFahrenheit: {
    TEXTFIELD:(value) => $(`id:editText${value}`),
    CONVERTBUTTONCTOF:() => $('id:btncnvCF'),
    APPMESSAGE:() =>  $('id:message'),
    LATERBUTTON:() => $('id:button3'),
  },
  celsiusToFahrenheitIos:{
    TEXTFIELD:(value) =>
      $(`${selectorsControl.ios().predicate}type == 'XCUIElementTypeSwitch' && name CONTAINS '${value}'`),
    CONVERTBUTTONCTOF:() => $(`${selectorsControl.ios().predicate}type == 'XCUIElementTypeSwitch' && name CONTAINS 'Allow'`),
    APPMESSAGE:() => $(`${selectorsControl.ios().predicate}type == 'XCUIElementTypeSwitch' && name CONTAINS 'Allow'`),
    LATERBUTTON:() => $( `${selectorsControl.ios().predicate}type == 'XCUIElementTypeSwitch' && name CONTAINS 'Allow'`),
  },
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
  },
  headerIos:{
    SEARCHBAR:() => $('~btn-pesquisa'),
    SEARCHINPUT:() => $( '~input-pesquisa'),
    MAGNIFYINGLASS:() => $( '~btn-pesquisar-lupa'),
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
  },
  moreOptionsIos:{
    ENTERBUTTON:() =>  $(`~btn-entrar`),
    EXITBUTTON:() => $( `~btn-sair`),
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
    DETAILS:() => $('~btn-detalhes-produto'),
    ACESSDETAILS:(productText) => $(`//android.widget.TextView[@text="${productText}"]`),
    ZERORESULTS: () => $('//android.widget.TextView[@text="0 produtos"]')
  },
  productSearchResultIos:{
    DETAILS:() => $('//XCUIElementTypeOther[@name="btn-detalhes-produto"]'),
    ACESSDETAILS:(productText) => $(`//XCUIElementTypeButton[contains(@name, "${productText}")]`),
    ZERORESULTS: () => $('//XCUIElementTypeStaticText[@name="0 produtos"]')
  },
  productDetails:{
    PRODUCT:(text) => $(`//android.widget.TextView[@text="${text}"]`)
  },
  productDetailsIos:{
    PRODUCT:(text) => $(`//XCUIElementTypeStaticText[contains(@name, "${text}")]`)
  },

};

// IOS PENDENTE EM RELAÇÃO AO CARD DO PRODUTO NA TELA DE RESULTADO DA BUSCA
