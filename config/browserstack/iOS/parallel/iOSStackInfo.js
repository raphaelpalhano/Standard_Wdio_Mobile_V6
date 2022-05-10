class iOSStackInfo{
  static project(){
    return 'Webdriverio Parallel Android Project'
  }

  static build(){
    return 'Webdriverio Android Parallel'
  }

  static deviceName() {
       return ['iPhone 11', 'iPhone 11']; // pass the udid or devicename
  }

  static osVersion() {
       return ['15', '15']; // pass the platform version
  }

  static appName() {
       return 'bs://d5530fccb4cfb63818100e16f5be7158c0505b81'; // pass the apk name
  }

  static name(){
    return 'local_test';
  }
}

module.exports = iOSStackInfo;
