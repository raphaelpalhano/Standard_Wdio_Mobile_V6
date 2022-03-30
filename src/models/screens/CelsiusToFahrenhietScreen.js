// import {CelsiusToFahrenheitElements} from '../../components/native/CelsiusToFahrenheitElements';
import {BaseScreen} from './BaseScreen';

const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');

export class CelsiusToFahrenhietScreen extends BaseScreen {


  static dismissAppRatingIfPresent() {
    if (ScreenManagerMobile.celsiusToFahrenheit.APPMESSAGE.isDisplayed()) {
      ScreenManagerMobile.celsiusToFahrenheit.LATERBUTTON.click();

    }
  }

  static launchApp() {
    super.launchApp();
    super.switchToNativeContext();
    super.pause(10);
  }

  static enterCelsius(celsiusValue) {
    this.dismissAppRatingIfPresent();
    super.waitForElement(ScreenManagerMobile.celsiusToFahrenheit.TEXTFIELDCELSIUS, 4);
    ScreenManagerMobile.celsiusToFahrenheit.TEXTFIELDCELSIUS.clearValue();
    ScreenManagerMobile.celsiusToFahrenheit.TEXTFIELDCELSIUS.addValue(celsiusValue);
    ScreenManagerMobile.celsiusToFahrenheit.CONVERTBUTTONCTOF.click();
  }

  static verifyFahrenheitValue(fahrenheitValue) {
    super.waitForElement(ScreenManagerMobile.celsiusToFahrenheit.TEXTFIELDFAHRENHEIT, 4);
    ScreenManagerMobile.celsiusToFahrenheit.TEXTFIELDFAHRENHEIT.getText().should.equal(fahrenheitValue);

  }
}


