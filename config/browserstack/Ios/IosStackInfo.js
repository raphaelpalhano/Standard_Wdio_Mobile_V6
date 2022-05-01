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
      return 'bs://162bb635252b7b22c0f701551d1420cd9264efb6'; // pass the apk name
  }

  static name(){
    return 'local_test';
  }
}

module.exports = iOSStackInfo;
