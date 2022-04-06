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
    LOCATIONOPTIONS: (value) => $(`//android.widget.Button[@text="${value}"]`),
  },
  homeIos: {
    UPDATEOPTION:() => $( '//android.widget.TextView[@text="Atualizar mais tarde"]'),
    LISTLOCATION:() => $('android.widget.LinearLayout'),
    LOCATIONOPTIONS: (value) => $(`//android.widget.Button[@text="${value}"]`),

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
  moreOptions:{
    ENTERBUTTON:() => $( '//android.widget.TextView[@text="Entrar"]'),
    EXITBUTTON:() => $( '//android.widget.TextView[@text="Sair"]'),
  },
  login:{
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
  productDetails:{
    PRODUCT:(text) => $(`//android.widget.TextView[@text="${text}"]`)
  },


};



