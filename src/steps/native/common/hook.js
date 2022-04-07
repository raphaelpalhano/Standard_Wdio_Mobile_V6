
import {After, Before} from 'cucumber';
import ScreenManagerMobile from '../../../components/native/ScreenManagerMobile';
import { HomeScreen } from '../../../models/screens/HomeScreen';
// import { CelsiusToFahrenhietScreen } from '../../../models/screens/CelsiusToFahrenhietScreen';

Before(() => {
  const index = ScreenManagerMobile.homeElements.LISTLOCATION('0').getText().includes('Permitir') === true ? '0' : '1';
  HomeScreen.selectAllow(index);
  HomeScreen.waitHome(5);
});

After(() => {
  HomeScreen.launchApp();

});
