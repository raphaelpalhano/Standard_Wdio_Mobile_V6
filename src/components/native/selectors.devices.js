const elementsDevice = require('./elements.devices');

module.exports = {
  celsiusToFahrenheit:(condition) => {
    if(condition){
      return elementsDevice.celsiusToFahrenheit;
    }
    return elementsDevice.celsiusToFahrenheitIos;
  },

  home:(condition) => {
    if(condition){
      return elementsDevice.homeAndroid;
    }
    return elementsDevice.homeIos;
  },

  header:(condition) => {
    if(condition){
      return elementsDevice.headerAndroid;
    }
    return elementsDevice.headerIos;
  },

  menuApp:(condition) => {
    if(condition){
      return elementsDevice.menuApp;
    }
    return elementsDevice.menuApp;
  },

  moreOptions:(condition) => {
    if(condition){
      return elementsDevice.moreOptions;
    }
    return elementsDevice.moreOptions;

  },

  login:(condition) => {
    if(condition){
      return elementsDevice.login;
    }
    return elementsDevice.login;

  },
  productSearchResult:(condition) => {
    if(condition){
      return elementsDevice.productSearchResult;
    }
    return elementsDevice.productSearchResult;

  },

  productDetails:(condition) => {
    if(condition){
      return elementsDevice.productDetails;
    }
    return elementsDevice.productDetails;

  },
};
