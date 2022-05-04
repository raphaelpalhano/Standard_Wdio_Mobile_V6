class AndroidParallel{
  static project(){
    return 'Webdriverio Parallel Android Project'
   }

   static build(){
     return 'Webdriverio Android Parallel'
   }

   static deviceName() {
       return ['Google Pixel 3', 'Google Pixel 3a']; // pass the udid or devicename
   }

   static osVersion() {
       return ['9.0', '9.0']; // pass the platform version
   }

   static appName() {
       return 'bs://d5530fccb4cfb63818100e16f5be7158c0505b81'; // pass the apk name
   }

   static name(){
     return 'local_test';
   }
}

module.exports = AndroidParallel;
