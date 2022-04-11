const selectorDevices = require('./selectors.devices');


module.exports = class ScreenManagerMobile{

  static setHome(){
    this.homeElements = selectorDevices.home(driver.isAndroid);
  }

  static setHeader(){
    this.headerElements = selectorDevices.header(driver.isAndroid);
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

  static setProductSeachResult(){
    this.productsearchResultElements = selectorDevices.productSearchResult(driver.isAndroid);
  }

  static setProductDetails(){
    this.productDetailsElements = selectorDevices.productDetails(driver.isAndroid);
  }

};


