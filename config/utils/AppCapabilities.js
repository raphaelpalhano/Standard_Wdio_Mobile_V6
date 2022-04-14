class AppCapabilities{

  static setAppId(android, Ios){
    this.appId = driver.isAndroid === true ? android : Ios
    ;
  }

}

module.exports = AppCapabilities;


