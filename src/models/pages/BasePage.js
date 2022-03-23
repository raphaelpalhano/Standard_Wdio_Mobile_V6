export class BasePage{

  static launchBrowserUrl(urlToLaunch) {
    browser.url(urlToLaunch);
  }

  static getTitle() {
    return browser.getTitle();
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

