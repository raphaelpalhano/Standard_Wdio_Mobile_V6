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
        return 'bs://bef6388a43f9b5266f85c5ba1b16674b92446260'; // pass the apk name
    }

    static name(){
      return 'local_test';
    }
}

module.exports = AndroidStackInfo;
