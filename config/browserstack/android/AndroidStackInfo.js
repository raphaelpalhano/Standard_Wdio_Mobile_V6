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
        return 'bs://63bf8b8e7b92fbd50201dd36821ecdc0763506cb'; // pass the apk name
    }

    static name(){
      return 'local_test';
    }
}

module.exports = AndroidStackInfo;
