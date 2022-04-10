import {BaseScreen} from './BaseScreen';

const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');

export class CelsiusToFahrenhietScreen extends BaseScreen {


  static async dismissAppRatingIfPresent() {
    if (await (await ScreenManagerMobile.celsiusElements.APPMESSAGE()).isDisplayed()) {
      await (await ScreenManagerMobile.celsiusElements.LATERBUTTON()).click();

    }
  }

  static launchApp() {
    super.launchApp();
    super.switchToNativeContext();
    super.pause(10);
  }

  static async enterCelsius(celsiusValue) {
    await  this.dismissAppRatingIfPresent();
    await super.waitForElement((await ScreenManagerMobile.celsiusElements.TEXTFIELD('C')), 4);
    await (await ScreenManagerMobile.celsiusElements.TEXTFIELD('C')).clearValue();
    await (await ScreenManagerMobile.celsiusElements.TEXTFIELD('C')).addValue( celsiusValue);
    await (await ScreenManagerMobile.celsiusElements.CONVERTBUTTONCTOF()).click();
  }

  static async verifyFahrenheitValue(fahrenheitValue) {
    super.waitForElement((await ScreenManagerMobile.celsiusElements.TEXTFIELD('F')), 4);
    await (await ScreenManagerMobile.celsiusElements.TEXTFIELD('F')).getText().should.equal(fahrenheitValue);

  }
}


