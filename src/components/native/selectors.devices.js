const elementsDevice = require('./elements.devices');

module.exports = {
  celsiusToFahrenheit: async (condition) => {
    if(condition){
      return elementsDevice.celsiusToFahrenheit;
    }
    return elementsDevice.celsiusToFahrenheitIos;
  },

  home: async (condition) => {
    if(condition){
      return elementsDevice.homeAndroid;
    }
    return elementsDevice.homeIos;
  },

  header: async (condition) => {
    if(condition){
      return elementsDevice.headerAndroid;
    }
    return elementsDevice.headerIos;
  },

  menuApp: async (condition) => {
    if(condition){
      return elementsDevice.menuApp;
    }
    return elementsDevice.menuAppIos;
  },

  moreOptions: async (condition) => {
    if(condition){
      return elementsDevice.moreOptions;
    }
    return elementsDevice.moreOptionsIos;

  },

  login: async (condition) => {
    if(condition){
      return elementsDevice.login;
    }
    return elementsDevice.loginIos;

  },
  productSearchResult: async (condition) => {
    if(condition){
      return elementsDevice.productSearchResult;
    }
    return elementsDevice.productSearchResultIos;

  },

  productDetails: async (condition) => {
    if(condition){
      return elementsDevice.productDetails;
    }
    return elementsDevice.productDetailsIos;

  },
};
