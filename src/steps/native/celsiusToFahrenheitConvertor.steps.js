
import { Then, When } from 'cucumber';
import {CelsiusToFahrenhietScreen} from '../../models/screens/CelsiusToFahrenhietScreen';


When(/^I enter celsius of (.*)$/, async (celsius) => {
  await CelsiusToFahrenhietScreen.enterCelsius(celsius);

});

Then(/^I should see fahrenheit of (.*)$/, async (fahrenheit) => {
  await CelsiusToFahrenhietScreen.verifyFahrenheitValue(fahrenheit);
});



