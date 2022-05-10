
// import cucumberJson from 'wdio-cucumberjs-json-reporter';
import { Before } from 'cucumber';
import { HomeScreen } from '../../../pageobject/screens/HomeScreen';


Before(async () => {
  if(driver.isAndroid){
    await HomeScreen.waitHome(1);

  }

  if(driver.isIOS){
    await HomeScreen.selectAllowText('Allow');
    await HomeScreen.selectCancelOption();
    await HomeScreen.waitAllow(7);
    await HomeScreen.selectAllowText('Allow');

  }



});



