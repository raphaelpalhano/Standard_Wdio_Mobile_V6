export class BaseScreen{

  static launchApp() {
    driver.launchApp();

  }

  static switchToNativeContext() {
    driver.switchContext('NATIVE_APP');
  }

  static pause(seconds) {
    browser.pause(seconds * 1000);
  }

  static waitForElementUsingTime(element, waitTimeInSeconds) {
    element.waitForDisplayed(waitTimeInSeconds * 1000);
  }



  static sleepForElement(element, seconds){
    element.pause(seconds * 1000);

  }


}


