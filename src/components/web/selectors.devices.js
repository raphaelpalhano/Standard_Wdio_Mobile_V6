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



};


