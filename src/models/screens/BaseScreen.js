export class BaseScreen{

  static launchApp() {
    driver.launchApp();

  }

  static switchToNativeContext() {
    browser.switchContext('NATIVE_APP');

  }

  static async pause(seconds) {
    browser.pause(seconds * 1000);
  }

  static async waitForElement(element, waitTimeInSeconds) {
    await element.waitForDisplayed(waitTimeInSeconds * 1000);
  }

  static async sleepForElement(element, seconds){
    await element.pause(seconds * 1000);

  }


}


