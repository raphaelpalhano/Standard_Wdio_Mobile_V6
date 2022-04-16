const elementsWeb = require('./elements.web');

module.exports = {
  home:() => {
    return elementsWeb.homeAndroid;
  },

  header:() => {
    return elementsWeb.homeAndroid;
  },

  menuApp:() => {
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
