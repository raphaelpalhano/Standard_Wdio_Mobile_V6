
// import cucumberJson from 'wdio-cucumberjs-json-reporter';
import { After, Before } from 'cucumber';
import ScreenManagerMobile from '../../../components/native/ScreenManagerMobile';
import { HomeScreen } from '../../../models/screens/HomeScreen';


Before(() => {
  if(driver.isAndroid){
    HomeScreen.updateLater();
    HomeScreen.selectAllowText('Permitir');
    HomeScreen.waitHome(4);
  }

  if(driver.isIOS){
    HomeScreen.selectAllowText('Allow');
    HomeScreen.updateLater();
    if(ScreenManagerMobile.homeElements.LOCATIONOPTIONS('Allow').isDisplayed()){
      HomeScreen.selectAllowText('Allow');
    }
  }



});

After(() => {
  HomeScreen.launchApp();
  driver.pause(1500);
});


