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
      return 'bs://3fea675981c26b02a3e64c0aee83850352d3cb1b'; // pass the apk name
  }

  static name(){
    return 'local_test';
  }
}

module.exports = iOSStackInfo;
