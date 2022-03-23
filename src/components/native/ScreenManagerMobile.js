const selectorDevices = require('./selectors.devices');


module.exports = class ScreenManagerMobile{

  static setCelsiusToFahrenheit(){
    this.selectorsHome = selectorDevices.celsiusToFahrenheit(driver.isAndroid);
  }

  static get celsiusToFahrenheit(){
    return this.selectorsHome;
  }

};


