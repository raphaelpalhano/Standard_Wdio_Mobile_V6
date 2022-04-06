class IosInfo {
    static deviceName() {
        return 'iPhone Simulator'; // pass the device name
    }

    static platFormVersion() {
        return '12.4'; // pass the platform version
    }

    static appName() {
        return 'paguemenosapp.ipa'; // pass the bundleid or ipa name
    }

    static locale(){
      return 'BR';
    }

    static language(){
      return 'pt';
    }
}

module.exports = IosInfo;
