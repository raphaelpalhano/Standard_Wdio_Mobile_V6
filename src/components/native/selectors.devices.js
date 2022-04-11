const elementsDevice = require('./elements.devices');

module.exports = {
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
    return elementsDevice.menuAppIos;
  },

  moreOptions:(condition) => {
    if(condition){
      return elementsDevice.moreOptions;
    }
    return elementsDevice.moreOptionsIos;

  },

  login:(condition) => {
    if(condition){
      return elementsDevice.login;
    }
    return elementsDevice.loginIos;

  },
  productSearchResult:(condition) => {
    if(condition){
      return elementsDevice.productSearchResult;
    }
    return elementsDevice.productSearchResultIos;

  },

  productDetails:(condition) => {
    if(condition){
      return elementsDevice.productDetails;
    }
    return elementsDevice.productDetailsIos;

  },
};
