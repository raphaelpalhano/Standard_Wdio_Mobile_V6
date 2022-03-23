import { When, Then} from 'cucumber';
import {CelsiusToFahrenhietScreen} from '../../models/screens/CelsiusToFahrenhietScreen';


When(/^I enter celsius of (.*)$/, (celsius) => {
  CelsiusToFahrenhietScreen.enterCelsius(celsius);

});

Then(/^I should see fahrenheit of (.*)$/, (fahrenheit) => {
  CelsiusToFahrenhietScreen.verifyFahrenheitValue(fahrenheit);
});
