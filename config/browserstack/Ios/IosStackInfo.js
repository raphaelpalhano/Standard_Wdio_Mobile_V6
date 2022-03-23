class IosStackInfo {

    static project(){
     return 'First Webdriverio Android Project'
    }

    static build(){
      return 'browserstack-build-1'
    }

    static deviceName() {
        return 'iPhone XS'; // pass the udid or devicename
    }

    static osVersion() {
        return '12'; // pass the platform version
    }

    static appName() {
        return 'bs://27ab507b404cae38095dd35c1d682515398fd24f'; // pass the apk name
    }

    static name(){
      return 'local_test';
    }
}

module.exports = IosStackInfo;
