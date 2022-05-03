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
        return 'bs://a4c1b31b43bca2431abb0bcc56996056a5968c70'; // pass the apk name
    }

    static name(){
      return 'local_test';
    }
}

module.exports = AndroidStackInfo;
