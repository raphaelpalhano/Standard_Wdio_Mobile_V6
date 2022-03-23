import { Before } from 'cucumber';
import { CelsiusToFahrenhietScreen } from '../../../models/screens/CelsiusToFahrenhietScreen';

Before(() => {
  CelsiusToFahrenhietScreen.launchApp();
});
