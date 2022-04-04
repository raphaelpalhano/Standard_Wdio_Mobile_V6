class AndroidInfo {
    static deviceName() {
        return 'emulator-5554'; // pass the udid or devicename
    }

    static platFormVersion() {
        return '10.0'; // pass the platform version
    }

    static appName() {
        return 'Farmácias Pague Menos_31.17_apkcombo.com.apk'; // pass the apk name
    }

    static packageName(){
      return 'com.google.android.apps.nexuslauncher';
    }

    static activity(){
      return 'com.google.android.apps.nexuslauncher.NexusLauncherActivity';
    }
}

module.exports = AndroidInfo;
