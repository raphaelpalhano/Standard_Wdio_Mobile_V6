class AppCapabilities{

  static setAppId(android, ios){
    this.appId = driver.isAndroid === true ? android : ios;
  }
}

module.exports = AppCapabilities;
