const selectorDevices = require('./selectors.devices');


module.exports = class ScreenManagerMobile{

  static async setHome(){
    this.homeElements = await selectorDevices.home(driver.isAndroid);
  }

  static async setHeader(){
    this.headerElements = await selectorDevices.header(driver.isAndroid);
  }

  static async setMenu(){
    this.menuElements = await selectorDevices.menuApp(driver.isAndroid);
  }


  static async setMoreOptions(){
    this.moreElements = await selectorDevices.moreOptions(driver.isAndroid);
  }


  static async setLogin(){
    this.loginElements = await selectorDevices.login(driver.isAndroid);
  }

  static async setProductSeachResult(){
    this.productsearchResultElements = await selectorDevices.productSearchResult(driver.isAndroid);
  }

  static async setProductDetails(){
    this.productDetailsElements = await selectorDevices.productDetails(driver.isAndroid);
  }

};


