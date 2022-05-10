export class BaseScreen{

  static launchApp() {
    driver.launchApp();

  }

  static switchToNativeContext() {
    browser.switchContext('NATIVE_APP');

  }


  static async simpleClick(element){
    await element.click();
  }

  static async multipleClick(element, quantity){
    for(let i = 0; i <= quantity; i+=1){
      element.click();
    }
  };


  static async pause(seconds) {
    browser.pause(seconds * 1000);
  }

  static async waitForElement(element, waitTimeInSeconds) {
    await element.waitForDisplayed({timeout: waitTimeInSeconds * 1000});
  }



  static async sleepForElement(element, seconds){
    await element.pause(seconds * 1000);

  }


}


