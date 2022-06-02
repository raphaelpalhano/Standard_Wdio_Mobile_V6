class AndroidInfo {
  static deviceName() {
    return 'emulator-5554'; // pass the udid or devicename
  }

  static platFormVersion() {
    return '12.0'; // pass the platform version
  }

  static appName() {
    return 'pagueMenosTest.apk'; // pass the apk name
  }

  static packageName(){
    return 'br.com.paguemenos.anjodaguarda';
  }

  static activity(){
    return 'br.com.paguemenos.anjodaguarda.MainActivity';
  }

  static locale(){
    return 'br';
  }

  static language(){
    return 'pt';
  }
}

module.exports = AndroidInfo;
