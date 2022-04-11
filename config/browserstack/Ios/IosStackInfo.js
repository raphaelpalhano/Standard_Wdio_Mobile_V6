class IosStackInfo {

    static project(){
     return 'Super App Pague menos - Android'
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
        return 'bs://de9c3195cb7370806800b1bf55fbe48a46dc84f0'; // pass the apk name
    }

    static name(){
      return 'local_test';
    }
}

module.exports = IosStackInfo;
