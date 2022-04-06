
import {After, Before} from 'cucumber';
import ScreenManagerMobile from '../../../components/native/ScreenManagerMobile';
// import { CelsiusToFahrenhietScreen } from '../../../models/screens/CelsiusToFahrenhietScreen';
import { HomeScreen } from '../../../models/screens/HomeScreen';

Before(() => {
  if(ScreenManagerMobile.homeElements.LISTLOCATION('0').isDisplayed()){
    HomeScreen.selectAllow();
  }
  HomeScreen.waitHome(6);

  // HomeScreen.updateLater();
});

After(() => {
  HomeScreen.launchApp();
});
