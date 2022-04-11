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
        return 'bs://f8c513002028cc105881ed3156a200c9ab4842dd'; // pass the apk name
    }

    static name(){
      return 'local_test';
    }
}

module.exports = AndroidStackInfo;
