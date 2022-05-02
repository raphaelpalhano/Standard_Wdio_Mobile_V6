
// import cucumberJson from 'wdio-cucumberjs-json-reporter';
import { Before } from 'cucumber';
import { HomeScreen } from '../../../models/screens/HomeScreen';


Before(async () => {
  if(driver.isAndroid){
    await HomeScreen.waitHome(7);

  }

  if(driver.isIOS){
    await HomeScreen.selectAllowText('Allow');
    await HomeScreen.waitAllow('Allow', 4);
    await HomeScreen.selectAllowText('Allow');




  }



});



