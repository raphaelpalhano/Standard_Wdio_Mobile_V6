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
        return 'bs://c9df958fb388925a18d80caa3e3761e52664d1c5'; // pass the apk name
    }

    static name(){
      return 'local_test';
    }
}

module.exports = AndroidStackInfo;
