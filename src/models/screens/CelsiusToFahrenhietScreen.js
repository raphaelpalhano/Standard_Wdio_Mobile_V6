import {BaseScreen} from './BaseScreen';

const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');

export class CelsiusToFahrenhietScreen extends BaseScreen {


  static dismissAppRatingIfPresent() {
    if (ScreenManagerMobile.celsiusElements.APPMESSAGE().isDisplayed()) {
      ScreenManagerMobile.celsiusElements.LATERBUTTON().click();

    }
  }

  static launchApp() {
    super.launchApp();
    super.switchToNativeContext();
    super.pause(10);
  }

  static enterCelsius(celsiusValue) {
    this.dismissAppRatingIfPresent();
    super.waitForElement(ScreenManagerMobile.celsiusElements.TEXTFIELD('C'), 4);
    ScreenManagerMobile.celsiusElements.TEXTFIELD('C').clearValue();
    ScreenManagerMobile.celsiusElements.TEXTFIELD('C').addValue( celsiusValue);
    ScreenManagerMobile.celsiusElements.CONVERTBUTTONCTOF().click();
  }

  static verifyFahrenheitValue(fahrenheitValue) {
    super.waitForElement(ScreenManagerMobile.celsiusElements.TEXTFIELD('F'), 4);
    ScreenManagerMobile.celsiusElements.TEXTFIELD('F').getText().should.equal(fahrenheitValue);

  }
}


