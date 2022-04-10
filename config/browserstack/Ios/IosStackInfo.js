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
        return 'bs://3e67a172a928e90f4a3a6751ca824b4dbc974d54'; // pass the apk name
    }

    static name(){
      return 'local_test';
    }
}

module.exports = IosStackInfo;
