import { Before } from 'cucumber';
import { HomeScreen } from '../../../models/screens/HomeScreen';
// import { CelsiusToFahrenhietScreen } from '../../../models/screens/CelsiusToFahrenhietScreen';

Before(() => {
  // CelsiusToFahrenhietScreen.launchApp();
  HomeScreen.launchApp();
  HomeScreen.goToHome();
});
