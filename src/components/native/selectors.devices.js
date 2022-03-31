const elementsDevice = require('./elements.devices');

module.exports = {
  celsiusToFahrenheit:(condition) => {
    if(condition){
      return elementsDevice.celsiusToFahrenheit;
    }
    return elementsDevice.celsiusToFahrenheitIos;
  },

  menuApp:(condition) => {
    if(condition){
      return elementsDevice.menuApp;
    }
    return '';
  },

  maisOpcoes:(condition) => {
    if(condition){
      return elementsDevice.maisOpcoes;
    }
    return '';

  },

  login:(condition) => {
    if(condition){
      return elementsDevice.login;
    }
    return '';

  }

};
