
// import cucumberJson from 'wdio-cucumberjs-json-reporter';
import { After, Before } from 'cucumber';
import { HomeScreen } from '../../../models/screens/HomeScreen';

const ScreenManagerMobile = require('../../../components/native/ScreenManagerMobile');

Before(async () => {
  // const index = ScreenManagerMobile.homeElements.LISTLOCATION('0').getText().includes('Permitir') === true ? '0' : '1';
  // HomeScreen.selectAllow(index);
  if(driver.isAndroid){
    await HomeScreen.updateLater();
    await HomeScreen.selectAllowText('Permitir');
    await HomeScreen.waitHome(4);
  }

  if(driver.isIOS){
    await HomeScreen.selectAllowText('Allow');
    await HomeScreen.updateLater();
    if(await (await ScreenManagerMobile.homeElements.LOCATIONOPTIONS('Allow')).isDisplayed()){
      await HomeScreen.selectAllowText('Allow');
    }
  }



});

After(async ()  => {
  await HomeScreen.launchApp();

});


