
// import cucumberJson from 'wdio-cucumberjs-json-reporter';
import { Before } from 'cucumber';
import { HomeScreen } from '../../../models/screens/HomeScreen';


Before(async () => {
  // const index = ScreenManagerMobile.homeElements.LISTLOCATION('0').getText().includes('Permitir') === true ? '0' : '1';
  // HomeScreen.selectAllow(index);
  if(driver.isAndroid){
    await HomeScreen.waitHome(7);

  }

  if(driver.isIOS){
    await HomeScreen.selectAllowText('Allow');
    await HomeScreen.waitAllow('Allow', 4);
    await HomeScreen.selectAllowText('Allow');




  }



});



