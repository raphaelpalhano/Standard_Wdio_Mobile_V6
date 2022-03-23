const selectorDevices = require('./selectors.devices');


module.exports = class ScreenManagerWeb{

  static setCelsiusToFahrenheit(){
    this.selectorsHome = selectorDevices.celsiusToFahrenheit(driver.isAndroid);
  }

  static get celsiusToFahrenheit(){
    return this.selectorsHome;
  }

};


