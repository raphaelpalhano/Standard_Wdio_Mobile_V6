const elementsWeb = require('./elements.web');

module.exports = {
  home:() => {
    return elementsWeb.homeAndroid;
  },

  header:() => {
    return elementsWeb.homeAndroid;
  },


  login:(condition) => {
    if(condition){
      return elementsDevice.login;
    }
    return elementsDevice.loginIos;

  },

};
