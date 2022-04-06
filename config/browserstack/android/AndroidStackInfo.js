class AndroidStackInfo {

    static project(){
     return 'Super App Pague menos - Android'
    }

    static build(){
      return 'browserstack-build-1'
    }

    static deviceName() {
        return ['Samsung Galaxy S10']; // pass the udid or devicename
    }

    static osVersion() {
        return ['9.0']; // pass the platform version
    }

    static appName() {
        return 'bs://1966616cf520f9b4a5a8e30c43cbae94792b1551'; // pass the apk name
    }

    static name(){
      return 'local_test';
    }
}

module.exports = AndroidStackInfo;
