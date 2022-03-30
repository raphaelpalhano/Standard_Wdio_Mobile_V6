const selectorsControl =  require('../../utils/componentControl');

module.exports = {
  celsiusToFahrenheit:(condition) => {
    if(condition){
      return {
        TEXTFIELDCELSIUS: $('id:editTextC'),
        TEXTFIELDFAHRENHEIT: $('id:editTextF'),
        CONVERTBUTTONCTOF: $('id:btncnvCF'),
        APPMESSAGE: $('id:message'),
        LATERBUTTON: $('id:button3'),
      };
    }
    return {
      TEXTFIELDCELSIUS: $(`${selectorsControl.ios().predicate}type == 'XCUIElementTypeSwitch' && name CONTAINS 'Allow'`),
      CONVERTBUTTONCTOF: $(`${selectorsControl.ios().predicate}type == 'XCUIElementTypeSwitch' && name CONTAINS 'Allow'`),
      APPMESSAGE:  $(`${selectorsControl.ios().predicate}type == 'XCUIElementTypeSwitch' && name CONTAINS 'Allow'`),
      LATERBUTTON: $(`${selectorsControl.ios().predicate}type == 'XCUIElementTypeSwitch' && name CONTAINS 'Allow'`)
    };
  },

  menuApp:(condition) => {
    if(condition){
      return {
        HOMETAB: $('~Home, tab, 1 of 5'),
        CATEGORIASTAB: $('~Categorias, tab, 2 of 5'),
        LOJASTAB: $('~Lojas, tab, 3 of 5'),
        FAVORITOSTAB: $('~Favoritos, tab, 4 of 5'),
        MAISTAB: $('Mais, tab, 5 of 5'),
      };
    }
    return '';
  },

  maisOpcoes:(condition) => {
    if(condition){
      return {
        ENTRAR: $('~btn-entrar')
      };
    }
    return '';

  },

  login:(condition) => {
    if(condition){
      return {
        EMAIL: $('~input-email'),
        PASSWORD: $('~input-senha'),
        CONTINUAR: $('~btn-continuar'),
        CADASTRAR: $('~btn-cadastrar')
      };
    }
    return '';

  }

};

