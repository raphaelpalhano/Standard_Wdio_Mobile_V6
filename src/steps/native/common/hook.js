
// import cucumberJson from 'wdio-cucumberjs-json-reporter';
import { Before } from 'cucumber';
import { HomeScreen } from '../../../models/screens/HomeScreen';


Before(async () => {
  if(driver.isAndroid){
    await HomeScreen.waitHome(1);

  }

  if(driver.isIOS){
    await HomeScreen.selectAllowText('Allow');
    await HomeScreen.selectAllowText('Allow');

  }



});



