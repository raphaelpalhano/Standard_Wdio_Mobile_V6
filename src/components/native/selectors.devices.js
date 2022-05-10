const elementsDevice = require('./elements.devices');

module.exports = {
  home:(condition) => {
    if(condition){
      return elementsDevice.homeAndroid;
    }
    return elementsDevice.homeiOS;
  },

  header:(condition) => {
    if(condition){
      return elementsDevice.headerAndroid;
    }
    return elementsDevice.headeriOS;
  },

  menuApp:(condition) => {
    if(condition){
      return elementsDevice.menuApp;
    }
    return elementsDevice.menuAppiOS;
  },

  moreOptions:(condition) => {
    if(condition){
      return elementsDevice.moreOptions;
    }
    return elementsDevice.moreOptionsiOS;

  },

  login:(condition) => {
    if(condition){
      return elementsDevice.login;
    }
    return elementsDevice.loginiOS;

  },
  productSearchResult:(condition) => {
    if(condition){
      return elementsDevice.productSearchResult;
    }
    return elementsDevice.productSearchResultiOS;

  },

  productDetails:(condition) => {
    if(condition){
      return elementsDevice.productDetails;
    }
    return elementsDevice.productDetailsiOS;

  },
};
