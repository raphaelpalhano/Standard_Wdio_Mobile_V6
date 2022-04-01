const selectorDevices = require('./selectors.devices');


module.exports = class ScreenManagerMobile{


  static setCelsiusToFahrenheit(){
    this.selectorsHome = selectorDevices.celsiusToFahrenheit(driver.isAndroid);
  }

  static get celsiusToFahrenheit(){
    return this.selectorsHome;
  }

  static setHome(){
    this.homeElements = selectorDevices.home(driver.isAndroid);
  }

  static setMenu(){
    this.menuElements = selectorDevices.menuApp(driver.isAndroid);
  }


  static setMoreOptions(){
    this.moreElements = selectorDevices.moreOptions(driver.isAndroid);
  }


  static setLogin(){
    this.loginElements = selectorDevices.login(driver.isAndroid);
  }


};


