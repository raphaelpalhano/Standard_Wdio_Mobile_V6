
// import cucumberJson from 'wdio-cucumberjs-json-reporter';
import { Before } from 'cucumber';
import { HomeScreen } from '../../../models/screens/HomeScreen';

const ScreenManagerMobile = require('../../../components/native/ScreenManagerMobile');

Before(async () => {
  // const index = ScreenManagerMobile.homeElements.LISTLOCATION('0').getText().includes('Permitir') === true ? '0' : '1';
  // HomeScreen.selectAllow(index);
  if(driver.isAndroid){
    await HomeScreen.selectAllowText('While');
    await HomeScreen.waitHome(4.45);
  }

  if(driver.isIOS){
    await HomeScreen.selectAllowText('Allow');
    if(await (await ScreenManagerMobile.homeElements.LOCATIONOPTIONS('Allow')).waitForDisplayed()){
      await HomeScreen.selectAllowText('Allow');
    }
  }



});



