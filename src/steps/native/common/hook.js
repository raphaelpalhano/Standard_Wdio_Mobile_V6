
import {Before} from 'cucumber';
// import { CelsiusToFahrenhietScreen } from '../../../models/screens/CelsiusToFahrenhietScreen';
import { HomeScreen } from '../../../models/screens/HomeScreen';

Before(() => {
  // CelsiusToFahrenhietScreen.launchApp();
  HomeScreen.launchApp();
  // HomeScreen.updateLater();
});


