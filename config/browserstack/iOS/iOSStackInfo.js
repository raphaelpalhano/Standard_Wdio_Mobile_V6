class iOSStackInfo {

  static project(){
   return 'Super App Pague menos - iOS'
  }

  static build(){
    return 'browserstack-build-1'
  }

  static deviceName() {
      return ['iPhone 11']; // pass the udid or devicename
  }

  static osVersion() {
      return ['15']; // pass the platform version
  }

  static appName() {
      return 'bs://d5530fccb4cfb63818100e16f5be7158c0505b81'; // pass the apk name
  }

  static name(){
    return 'local_test';
  }
}

module.exports = iOSStackInfo;
