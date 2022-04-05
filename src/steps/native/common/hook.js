
import {Before} from 'cucumber';
import ScreenManagerMobile from '../../../components/native/ScreenManagerMobile';
// import { CelsiusToFahrenhietScreen } from '../../../models/screens/CelsiusToFahrenhietScreen';
import { HomeScreen } from '../../../models/screens/HomeScreen';

Before(() => {
  if(ScreenManagerMobile.homeElements.ALLOWLOCATION().isDisplayed()){
    HomeScreen.allowLocation();
  }
  HomeScreen.launchApp();

  // HomeScreen.updateLater();
});


