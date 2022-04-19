class IosStackInfo {

  static project(){
   return 'Super App Pague menos - Ios'
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
      return 'bs://213be455224db4aa3c4d58130798555c43c5c3ae'; // pass the apk name
  }

  static name(){
    return 'local_test';
  }
}

module.exports = IosStackInfo;
