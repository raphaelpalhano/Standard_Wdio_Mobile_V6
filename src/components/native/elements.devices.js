const selectorsControl =  require('../../utils/componentControl');

module.exports = {
  celsiusToFahrenheit: {
    TEXTFIELDCELSIUS: 'id:editTextC',
    TEXTFIELDFAHRENHEIT: 'id:editTextF',
    CONVERTBUTTONCTOF: 'id:btncnvCF',
    APPMESSAGE: 'id:message',
    LATERBUTTON: 'id:button3',
  },
  celsiusToFahrenheitIos:{
    TEXTFIELDCELSIUS: `${selectorsControl.ios().predicate}type == 'XCUIElementTypeSwitch' && name CONTAINS 'Allow'`,
    CONVERTBUTTONCTOF: `${selectorsControl.ios().predicate}type == 'XCUIElementTypeSwitch' && name CONTAINS 'Allow'`,
    APPMESSAGE:  `${selectorsControl.ios().predicate}type == 'XCUIElementTypeSwitch' && name CONTAINS 'Allow'`,
    LATERBUTTON: `${selectorsControl.ios().predicate}type == 'XCUIElementTypeSwitch' && name CONTAINS 'Allow'`
  },
  homeAndroid: {
    UPDATEOPTION: '//android.widget.TextView[@text="Atualizar mais tarde"]',
  },
  homeIos: {
    UPDATEOPTION: '//android.widget.TextView[@text="Atualizar mais tarde"]',
  },
  menuApp:{
    HOMETAB: '~Home, tab, 1 of 5',
    CATEGORIASTAB: '~Categorias, tab, 2 of 5',
    LOJASTAB: '~Lojas, tab, 3 of 5',
    FAVORITOSTAB: '~Favoritos, tab, 4 of 5',
    MORETAB: '~Mais, tab, 5 of 5',
  },
  moreOptions:{
    ENTERBUTTON: '~btn-entrar'
  },
  login:{
    EMAIL: '~input-email',
    PASSWORD: '~input-senha',
    CONTINUEBUTTON: '~btn-continuar',
    SIGNBUTTON: '~btn-cadastrar'
  }

};


