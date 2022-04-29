class AndroidStackInfo {

    static project(){
     return 'Super App Pague menos - Android'
    }

    static build(){
      return 'browserstack-build-1'
    }

    static deviceName() {
        return ['Samsung Galaxy S21']; // pass the udid or devicename
    }

    static osVersion() {
        return ['12.0']; // pass the platform version
    }

    static appName() {
        return 'bs://e8559a3a5210eccd623e36441183752127694e0a'; // pass the apk name
    }

    static name(){
      return 'local_test';
    }
}

module.exports = AndroidStackInfo;
