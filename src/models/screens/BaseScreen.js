export class BaseScreen{

  static launchApp() {
    driver.launchApp();

  }

  static switchToNativeContext() {
    browser.switchContext('NATIVE_APP');


  }

  static pause(seconds) {
    browser.pause(seconds * 1000);
  }

  static waitForElement(element, waitTimeInSeconds) {
    element.waitForDisplayed(waitTimeInSeconds * 1000);
  }


}


